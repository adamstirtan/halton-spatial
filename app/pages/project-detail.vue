<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { company, projects } from "~/data/site";
import { useHead } from "@vueuse/head";
import CTASection from "~/components/CTASection.vue";
import PropertyCard from "~/components/PropertyCard.vue";
import SplatViewer from "~/components/SplatViewer.vue";

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
            {{ project.description }}
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

    <section class="section-pad bg-pearl">
      <div
        class="container-wide grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
      >
        <div>
          <p class="eyebrow mb-4">Interactive Viewer</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            A dedicated surface for future interactive 3D content.
          </h2>
          <p class="mt-6 text-base leading-8 text-stone">
            This project detail layout is prepared for embedded Three.js scenes,
            future PLY point clouds, Gaussian Splats, and other digital twin
            visualizations.
          </p>
          <div class="mt-8 grid gap-5 sm:grid-cols-2">
            <article class="border border-ink/10 bg-white p-5 shadow-sm">
              <p
                class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
              >
                Deliverables
              </p>
              <p
                v-for="item in project.deliverables"
                :key="item"
                class="mt-4 text-sm leading-7 text-stone"
              >
                {{ item }}
              </p>
            </article>
            <article class="border border-ink/10 bg-white p-5 shadow-sm">
              <p
                class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
              >
                Scope
              </p>
              <p
                v-for="item in project.scope"
                :key="item"
                class="mt-4 text-sm leading-7 text-stone"
              >
                {{ item }}
              </p>
            </article>
          </div>
        </div>

        <SplatViewer :viewer="project.viewer" />
      </div>
    </section>

    <section class="section-pad bg-white">
      <div class="container-wide grid gap-7 md:grid-cols-3">
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

    <section class="section-pad bg-ink text-white">
      <div
        class="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
      >
        <div>
          <p class="eyebrow mb-4">Instagram Support</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            Extend each project with social proof and work-in-progress
            storytelling.
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/68">
            {{ project.instagramNote }}
          </p>
          <a
            :href="company.instagramUrl"
            class="btn-primary mt-8"
            target="_blank"
            rel="noreferrer"
            >Follow on Instagram</a
          >
        </div>
        <article class="border border-white/10 bg-white/5 p-8">
          <p
            class="text-xs font-semibold uppercase tracking-[0.24em] text-brass"
          >
            Project Summary
          </p>
          <p class="mt-5 text-sm leading-7 text-white/68">
            {{ project.summary }}
          </p>
          <p class="mt-6 text-sm leading-7 text-white/55">
            This detail page gives Halton Spatial a dedicated space for future
            embeds, project notes, and related social content without sending
            visitors to a third-party platform.
          </p>
        </article>
      </div>
    </section>

    <section class="section-pad bg-pearl">
      <div class="container-wide">
        <div class="mb-10 flex items-end justify-between gap-6">
          <div>
            <p class="eyebrow mb-4">Related Projects</p>
            <h2
              class="font-display text-5xl font-semibold leading-none sm:text-6xl"
            >
              More work from the archive.
            </h2>
          </div>
          <RouterLink
            to="/projects"
            class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
            >Back to Projects</RouterLink
          >
        </div>
        <div class="grid gap-7 lg:grid-cols-2">
          <PropertyCard
            v-for="item in relatedProjects"
            :key="item.id"
            :property="item"
          />
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Next Project"
      title="Ready to plan a similar capture?"
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
