import {
  AdditiveBlending,
  AmbientLight,
  Box3,
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
  Vector3,
  WebGLRenderer,
  WireframeGeometry,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";
import type { ViewerSceneType } from "~/data/site";

export interface SpatialViewerOptions {
  canvas: HTMLCanvasElement;
  sceneType: ViewerSceneType;
  assetUrl?: string;
  onStateChange?: (state: SpatialViewerState) => void;
}

export interface SpatialViewerController {
  resize: () => void;
  lookUp: () => void;
  lookDown: () => void;
  lookLeft: () => void;
  lookRight: () => void;
  turnLeft: () => void;
  turnRight: () => void;
  resetView: () => void;
  dispose: () => void;
}

export interface SpatialViewerState {
  status: "loading" | "ready" | "error";
  message?: string;
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

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

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
  assetUrl,
  onStateChange,
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
  const particleGroup = new Group();
  scene.add(sceneGroup, particleGroup);

  let contentObject: Group | Points | LineSegments | null = null;
  let currentState: SpatialViewerState["status"] = "ready";
  let defaultRadius = 4.8;
  let defaultPolar = 1.08;
  let defaultAzimuth = 0.22;
  let currentRadius = defaultRadius;
  let currentPolar = defaultPolar;
  let currentAzimuth = defaultAzimuth;
  let disposed = false;

  const setState = (state: SpatialViewerState) => {
    currentState = state.status;
    onStateChange?.(state);
  };

  const applyView = () => {
    const offset = new Vector3().setFromSphericalCoords(
      currentRadius,
      currentPolar,
      currentAzimuth,
    );

    camera.position.copy(controls.target).add(offset);
    controls.update();
  };

  const setDefaultView = (radius: number) => {
    defaultRadius = Math.max(radius * 2.35, 2.8);
    defaultPolar = 1.08;
    defaultAzimuth = 0.22;
    currentRadius = defaultRadius;
    currentPolar = defaultPolar;
    currentAzimuth = defaultAzimuth;
    controls.minDistance = Math.max(radius * 0.8, 1.6);
    controls.maxDistance = Math.max(radius * 5.5, 7);
    applyView();
  };

  const clearContent = () => {
    if (!contentObject) {
      return;
    }

    sceneGroup.remove(contentObject);
    particleGroup.remove(contentObject);
    disposeObjectTree(contentObject);
    contentObject = null;
  };

  const mountPlaceholderScene = () => {
    clearContent();

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
    sceneGroup.add(wireframe);
    contentObject = wireframe;

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
    const wrapper = new Group();
    wrapper.add(wireframe, particles);
    sceneGroup.add(wrapper);
    contentObject = wrapper;
    setDefaultView(2);
    setState({ status: "ready" });
  };

  const loadPlyScene = async (url: string) => {
    clearContent();
    setState({ status: "loading" });

    try {
      const geometry = await new PLYLoader().loadAsync(url);

      if (disposed) {
        geometry.dispose();
        return;
      }

      geometry.computeBoundingBox();

      const boundingBox = geometry.boundingBox ?? new Box3();
      const center = boundingBox.getCenter(new Vector3());
      geometry.translate(-center.x, -center.y, -center.z);
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();

      const radius = geometry.boundingSphere?.radius ?? 1.5;
      const pointSize = clamp(radius / 90, 0.018, 0.08);
      const material = new PointsMaterial({
        color: accent,
        size: pointSize,
        vertexColors: geometry.hasAttribute("color"),
        transparent: true,
        opacity: 0.96,
        depthWrite: false,
        sizeAttenuation: true,
      });
      const points = new Points(geometry, material);
      sceneGroup.add(points);
      contentObject = points;

      controls.target.set(0, 0, 0);
      setDefaultView(radius);
      setState({ status: "ready" });
    } catch (error) {
      if (disposed) {
        return;
      }

      const message =
        error instanceof Error
          ? error.message
          : "Unable to load the PLY model.";
      setState({
        status: "error",
        message,
      });
    }
  };

  if (sceneType === "ply" && assetUrl) {
    void loadPlyScene(assetUrl);
  } else {
    mountPlaceholderScene();
  }

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

    if (!prefersReducedMotion && currentState === "ready" && !assetUrl) {
      sceneGroup.rotation.y = elapsed * profile.rotationSpeed;
      sceneGroup.rotation.x = 0.6 + Math.sin(elapsed * 0.5) * 0.08;
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
    lookUp: () => {
      currentPolar = clamp(currentPolar - Math.PI / 18, 0.35, Math.PI - 0.35);
      applyView();
    },
    lookDown: () => {
      currentPolar = clamp(currentPolar + Math.PI / 18, 0.35, Math.PI - 0.35);
      applyView();
    },
    lookLeft: () => {
      currentAzimuth += Math.PI / 18;
      applyView();
    },
    lookRight: () => {
      currentAzimuth -= Math.PI / 18;
      applyView();
    },
    turnLeft: () => {
      currentAzimuth += Math.PI / 8;
      applyView();
    },
    turnRight: () => {
      currentAzimuth -= Math.PI / 8;
      applyView();
    },
    resetView: () => {
      currentRadius = defaultRadius;
      currentPolar = defaultPolar;
      currentAzimuth = defaultAzimuth;
      applyView();
    },
    dispose: () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      controls.dispose();
      clearContent();
      renderer.dispose();
    },
  };
};
