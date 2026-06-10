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
  type SpatialViewerState,
} from "~/utils/createSpatialViewer";

const props = defineProps<{
  viewer: ViewerMedia;
}>();

const canvas = ref<HTMLCanvasElement | null>(null);
const viewerState = ref<SpatialViewerState>({ status: "loading" });

const canRenderViewer = computed(
  () => props.viewer.sceneType === "ply" && Boolean(props.viewer.assetUrl),
);

let controller: SpatialViewerController | null = null;

const mountViewer = async () => {
  await nextTick();

  if (!canvas.value || !canRenderViewer.value) {
    viewerState.value = canRenderViewer.value
      ? { status: "loading" }
      : {
          status: "error",
          message: "This project does not have a PLY model configured.",
        };
    return;
  }

  controller?.dispose();
  viewerState.value = { status: "loading" };
  controller = createSpatialViewer({
    canvas: canvas.value,
    sceneType: props.viewer.sceneType,
    assetUrl: props.viewer.assetUrl,
    onStateChange: (state) => {
      viewerState.value = state;
    },
  });
};

const controls = [
  { label: "Up", action: "lookUp" },
  { label: "Down", action: "lookDown" },
  { label: "Left", action: "lookLeft" },
  { label: "Right", action: "lookRight" },
  { label: "Turn Left", action: "turnLeft" },
  { label: "Turn Right", action: "turnRight" },
] as const satisfies ReadonlyArray<{
  label: string;
  action: keyof Pick<
    SpatialViewerController,
    "lookUp" | "lookDown" | "lookLeft" | "lookRight" | "turnLeft" | "turnRight"
  >;
}>;

const runControl = (action: (typeof controls)[number]["action"]) => {
  controller?.[action]();
};

const resetView = () => {
  controller?.resetView();
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
  <section class="bg-[#090b10] text-white">
    <div
      class="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[68vh]"
    >
      <canvas
        ref="canvas"
        class="absolute inset-0 h-full w-full"
        :class="viewerState.status === 'ready' ? 'opacity-100' : 'opacity-40'"
        aria-label="Interactive 3D project viewer"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,11,16,0.08),rgba(9,11,16,0.6))]"
      />
      <div
        class="relative flex min-h-[420px] flex-col justify-between px-5 py-6 sm:px-8 sm:py-8 lg:min-h-[68vh] lg:px-12"
      >
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="max-w-2xl">
            <p class="eyebrow mb-4">Interactive Viewer</p>
            <h2
              class="font-display text-4xl font-semibold leading-tight sm:text-5xl"
            >
              {{ viewer.title }}
            </h2>
            <p
              class="mt-4 max-w-xl text-sm leading-7 text-white/72 sm:text-base"
            >
              {{ viewer.summary }}
            </p>
            <p
              class="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-brass"
            >
              {{ viewer.interactionHint }}
            </p>
          </div>

          <div
            class="flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/74"
          >
            <span
              class="rounded-full border border-white/12 bg-white/8 px-3 py-2"
            >
              {{ viewer.sceneType }}
            </span>
            <span
              class="rounded-full border border-white/12 bg-white/8 px-3 py-2"
            >
              PLY Model
            </span>
          </div>
        </div>

        <div class="mt-8 flex flex-col gap-4 lg:max-w-4xl">
          <div
            v-if="viewerState.status === 'loading'"
            class="inline-flex w-fit rounded-full border border-white/12 bg-black/35 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/76"
          >
            Loading project model...
          </div>
          <div
            v-else-if="viewerState.status === 'error'"
            class="inline-flex w-fit rounded-full border border-[#b85c38]/40 bg-[#b85c38]/18 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd6c9]"
          >
            {{ viewerState.message ?? "Viewer unavailable." }}
          </div>

          <div class="flex flex-wrap gap-3">
            <button
              v-for="control in controls"
              :key="control.label"
              type="button"
              class="rounded-full border border-white/16 bg-black/35 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-brass hover:text-brass disabled:cursor-not-allowed disabled:opacity-45"
              :disabled="viewerState.status !== 'ready'"
              @click="runControl(control.action)"
            >
              {{ control.label }}
            </button>
            <button
              type="button"
              class="rounded-full border border-brass bg-brass px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
              :disabled="viewerState.status !== 'ready'"
              @click="resetView"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
