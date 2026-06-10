import {
  AdditiveBlending,
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  Clock,
  Color,
  DirectionalLight,
  Group,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  SRGBColorSpace,
  Scene,
  TorusKnotGeometry,
  WebGLRenderer,
  WireframeGeometry,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { ViewerSceneType } from "~/data/site";

export interface SpatialViewerOptions {
  canvas: HTMLCanvasElement;
  sceneType: ViewerSceneType;
}

export interface SpatialViewerController {
  resize: () => void;
  dispose: () => void;
}

const sceneProfiles: Record<
  ViewerSceneType,
  {
    accent: string;
    pointCount: number;
    pointSize: number;
    shellScale: number;
    rotationSpeed: number;
  }
> = {
  abstract: {
    accent: "#b7925a",
    pointCount: 900,
    pointSize: 0.03,
    shellScale: 1,
    rotationSpeed: 0.18,
  },
  "point-cloud": {
    accent: "#caa773",
    pointCount: 1300,
    pointSize: 0.028,
    shellScale: 1.05,
    rotationSpeed: 0.16,
  },
  ply: {
    accent: "#d0b27d",
    pointCount: 1500,
    pointSize: 0.025,
    shellScale: 1.1,
    rotationSpeed: 0.15,
  },
  "gaussian-splat": {
    accent: "#f0cf96",
    pointCount: 1700,
    pointSize: 0.022,
    shellScale: 1.14,
    rotationSpeed: 0.14,
  },
  photogrammetry: {
    accent: "#d7bb88",
    pointCount: 1100,
    pointSize: 0.026,
    shellScale: 1.08,
    rotationSpeed: 0.17,
  },
  "digital-twin": {
    accent: "#e0bc82",
    pointCount: 1250,
    pointSize: 0.024,
    shellScale: 1.12,
    rotationSpeed: 0.16,
  },
};

const createParticleField = (count: number) => {
  const geometry = new BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const stride = index * 3;
    const radius = 1.5 + Math.random() * 1.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[stride] = radius * Math.sin(phi) * Math.cos(theta);
    positions[stride + 1] = radius * Math.cos(phi) * 0.72;
    positions[stride + 2] = radius * Math.sin(phi) * Math.sin(theta);
  }

  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  return geometry;
};

const disposeMaterial = (material: unknown) => {
  if (Array.isArray(material)) {
    material.forEach((item) => {
      if (!item || typeof item !== "object") {
        return;
      }

      const dispose = Reflect.get(item, "dispose");

      if (typeof dispose === "function") {
        dispose.call(item);
      }
    });
    return;
  }

  if (!material || typeof material !== "object") {
    return;
  }

  const dispose = Reflect.get(material, "dispose");

  if (typeof dispose === "function") {
    dispose.call(material);
  }
};

const disposeObjectTree = (object: Group | Points | LineSegments) => {
  object.traverse((child) => {
    const geometry = Reflect.get(child, "geometry");
    const material = Reflect.get(child, "material");

    geometry?.dispose?.();
    disposeMaterial(material);
  });
};

export const createSpatialViewer = ({
  canvas,
  sceneType,
}: SpatialViewerOptions): SpatialViewerController => {
  const container = canvas.parentElement;

  if (!container) {
    throw new Error("Spatial viewer requires a parent container.");
  }

  const profile = sceneProfiles[sceneType];
  const scene = new Scene();
  const accent = new Color(profile.accent);
  const background = new Color("#090b10");

  scene.background = background;

  const camera = new PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 0.55, 4.8);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });

  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(background, 1);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 2.6;
  controls.maxDistance = 7;
  controls.target.set(0, 0, 0);

  const ambientLight = new AmbientLight(0xffffff, 1.1);
  const keyLight = new DirectionalLight(0xffffff, 1.7);
  keyLight.position.set(4, 5, 2);
  const fillLight = new DirectionalLight(accent, 1.2);
  fillLight.position.set(-3, -1, 4);

  scene.add(ambientLight, keyLight, fillLight);

  const sceneGroup = new Group();
  scene.add(sceneGroup);

  const wireframeGeometry = new WireframeGeometry(
    new TorusKnotGeometry(1.06 * profile.shellScale, 0.28, 220, 28),
  );
  const wireframeMaterial = new LineBasicMaterial({
    color: accent,
    transparent: true,
    opacity: 0.86,
  });
  const wireframe = new LineSegments(wireframeGeometry, wireframeMaterial);
  wireframe.rotation.x = 0.72;

  const particleGeometry = createParticleField(profile.pointCount);
  const particleMaterial = new PointsMaterial({
    color: accent,
    size: profile.pointSize,
    transparent: true,
    opacity: 0.88,
    depthWrite: false,
    sizeAttenuation: true,
    blending: AdditiveBlending,
  });
  const particles = new Points(particleGeometry, particleMaterial);

  sceneGroup.add(wireframe, particles);

  const clock = new Clock();
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let animationFrame = 0;

  const resize = () => {
    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
  };

  const render = () => {
    const elapsed = clock.getElapsedTime();

    if (!prefersReducedMotion) {
      sceneGroup.rotation.y = elapsed * profile.rotationSpeed;
      sceneGroup.rotation.x = 0.6 + Math.sin(elapsed * 0.5) * 0.08;
      particles.rotation.y = -elapsed * profile.rotationSpeed * 0.45;
      particles.rotation.z = elapsed * 0.08;
    }

    controls.update();
    renderer.render(scene, camera);
    animationFrame = window.requestAnimationFrame(render);
  };

  const resizeObserver = new ResizeObserver(() => {
    resize();
  });
  resizeObserver.observe(container);

  resize();
  render();

  return {
    resize,
    dispose: () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      controls.dispose();
      disposeObjectTree(sceneGroup);
      renderer.dispose();
    },
  };
};
