<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "~/data/site";
import { useHead } from "@vueuse/head";
import CTASection from "~/components/CTASection.vue";
import ProjectPlyViewer from "~/components/ProjectPlyViewer.vue";

const route = useRoute();

const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug),
);

const relatedProjects = computed(() => {
  if (!project.value) {
    return [];
  }

  return projects
    .filter((item) => item.slug !== project.value?.slug)
    .slice(0, 2);
});

const hasProjectViewer = computed(
  () =>
    project.value?.viewer.sceneType === "ply" &&
    Boolean(project.value.viewer.assetUrl),
);

useHead(() => ({
  title: project.value
    ? `${project.value.title} | Halton Spatial`
    : "Project | Halton Spatial",
  meta: [
    {
      name: "description",
      content: project.value
        ? project.value.summary
        : "Project details for Halton Spatial interactive 3D capture work.",
    },
  ],
}));
</script>

<template>
  <main v-if="project">
    <section class="relative overflow-hidden bg-ink text-white">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :src="project.image"
        :alt="project.title"
      />
      <div class="cinematic-overlay absolute inset-0" />
      <div class="relative z-10 px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-24">
        <div class="container-wide max-w-5xl">
          <p class="eyebrow mb-4">{{ project.industry }}</p>
          <h1
            class="font-display text-6xl font-semibold leading-[0.94] sm:text-7xl"
          >
            {{ project.title }}
          </h1>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            {{ project.summary }}
          </p>
          <div
            class="mt-8 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/65"
          >
            <span>{{ project.location }}</span>
            <span>{{ project.metric }}</span>
            <span>{{ project.type }}</span>
          </div>
        </div>
      </div>
    </section>

    <ProjectPlyViewer v-if="hasProjectViewer" :viewer="project.viewer" />

    <section class="section-pad bg-pearl">
      <div class="container-wide grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <article class="border border-ink/10 bg-white p-8 shadow-sm sm:p-10">
          <p class="eyebrow mb-4">Project Overview</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            {{ project.title }} in full context.
          </h2>
          <p class="mt-6 text-base leading-8 text-stone sm:text-lg">
            {{ project.description }}
          </p>
          <div
            class="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone/80"
          >
            <span class="rounded-full border border-ink/10 px-4 py-2">{{
              project.location
            }}</span>
            <span class="rounded-full border border-ink/10 px-4 py-2">{{
              project.metric
            }}</span>
            <span class="rounded-full border border-ink/10 px-4 py-2">{{
              project.details
            }}</span>
          </div>
        </article>

        <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          <article class="border border-ink/10 bg-white p-6 shadow-sm">
            <p
              class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
            >
              Deliverables
            </p>
            <ul class="mt-5 space-y-4 text-sm leading-7 text-stone">
              <li v-for="item in project.deliverables" :key="item">
                {{ item }}
              </li>
            </ul>
          </article>
          <article class="border border-ink/10 bg-white p-6 shadow-sm">
            <p
              class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
            >
              Scope
            </p>
            <ul class="mt-5 space-y-4 text-sm leading-7 text-stone">
              <li v-for="item in project.scope" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-white">
      <div class="container-wide">
        <div class="mb-10 max-w-3xl">
          <p class="eyebrow mb-4">Project Gallery</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            Static views that support the interactive experience.
          </h2>
        </div>
      </div>
      <div class="container-wide grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="image in project.gallery"
          :key="image"
          class="overflow-hidden bg-pearl shadow-sm"
        >
          <img
            class="aspect-[4/3] h-full w-full object-cover"
            :src="image"
            :alt="project.title"
          />
        </article>
      </div>
    </section>

    <CTASection
      eyebrow="Next Project"
      title="Ready to plan your project?"
      subtitle="We can scope a one-time project or an ongoing documentation program based on your site, audience, and timeline."
      primary-label="Get a Quote"
      primary-to="/get-quote"
      secondary-label="View Services"
      secondary-to="/services"
    />
  </main>

  <main v-else>
    <section class="section-pad bg-pearl">
      <div class="container-wide max-w-3xl text-center">
        <p class="eyebrow mb-4">Project Not Found</p>
        <h1
          class="font-display text-5xl font-semibold leading-none sm:text-6xl"
        >
          That project is not available.
        </h1>
        <p class="mt-6 text-base leading-8 text-stone">
          Return to the project archive to browse the current sample work.
        </p>
        <RouterLink to="/projects" class="btn-primary mt-8"
          >Back to Projects</RouterLink
        >
      </div>
    </section>
  </main>
</template>
