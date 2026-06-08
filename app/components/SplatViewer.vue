<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import type { ViewerMedia } from "~/data/site";
import {
  createSpatialViewer,
  type SpatialViewerController,
} from "~/utils/createSpatialViewer";

const fallbackViewer: ViewerMedia = {
  title: "Interactive 3D Visualization",
  summary:
    "Production-ready placeholder scene for future digital twin, point cloud, and Gaussian Splat embeds.",
  sceneType: "abstract",
  interactionHint: "Drag to orbit. Scroll or pinch to zoom.",
  futureLoader: "PLYLoader",
};

const props = withDefaults(
  defineProps<{
    viewer?: ViewerMedia;
    compact?: boolean;
    background?: boolean;
  }>(),
  {
    compact: false,
    background: false,
  },
);

const canvas = ref<HTMLCanvasElement | null>(null);
const viewerConfig = computed(() => props.viewer ?? fallbackViewer);

let controller: SpatialViewerController | null = null;

const mountViewer = async () => {
  await nextTick();

  if (!canvas.value) {
    return;
  }

  controller?.dispose();
  controller = createSpatialViewer({
    canvas: canvas.value,
    sceneType: viewerConfig.value.sceneType,
  });
};

onMounted(() => {
  mountViewer();
});

watch(
  () => props.viewer,
  () => {
    mountViewer();
  },
  { deep: true },
);

onBeforeUnmount(() => {
  controller?.dispose();
});
</script>

<template>
  <div
    class="group isolate overflow-hidden bg-[#090b10] text-white"
    :class="
      background
        ? 'h-full w-full'
        : [
            'relative border border-white/12 shadow-cinematic',
            compact ? 'min-h-[360px]' : 'min-h-[420px] sm:min-h-[520px]',
          ]
    "
  >
    <canvas
      ref="canvas"
      class="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(183,146,90,0.2),transparent_42%)]"
    />
    <div
      class="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),transparent_28%,rgba(0,0,0,0.34))]"
    />

    <div
      v-if="!background"
      class="relative flex h-full flex-col justify-between p-6 sm:p-8"
    >
      <div
        class="flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70"
      >
        <span
          class="rounded-full border border-white/12 bg-white/5 px-3 py-2"
          >{{ viewerConfig.sceneType }}</span
        >
        <span class="rounded-full border border-white/12 bg-white/5 px-3 py-2"
          >Future {{ viewerConfig.futureLoader }}</span
        >
      </div>

      <div class="max-w-md">
        <p class="eyebrow mb-4">Interactive Viewer</p>
        <h3
          class="font-display text-4xl font-semibold leading-tight sm:text-5xl"
        >
          {{ viewerConfig.title }}
        </h3>
        <p class="mt-4 text-sm leading-7 text-white/68">
          {{ viewerConfig.summary }}
        </p>
        <p
          class="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brass"
        >
          {{ viewerConfig.interactionHint }}
        </p>
      </div>
    </div>
  </div>
</template>
