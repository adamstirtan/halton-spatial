<script setup lang="ts">
import { computed, ref } from "vue";
import { company, projectFilters, projects } from "~/data/site";
import { useHead } from "@vueuse/head";
import HeroSection from "~/components/HeroSection.vue";
import PropertyCard from "~/components/PropertyCard.vue";
import SplatViewer from "~/components/SplatViewer.vue";

const selectedFilter = ref("All");

const filteredProjects = computed(() => {
  if (selectedFilter.value === "All") {
    return projects;
  }

  return projects.filter(
    (project) => project.industry === selectedFilter.value,
  );
});

const interactiveProject =
  projects.find((project) => project.hasInteractiveViewer) ?? projects[0];

useHead({
  title: "Projects | Halton Spatial",
  meta: [
    {
      name: "description",
      content:
        "Browse Halton Spatial projects across real estate, construction, commercial spaces, arts, museums, and aerial documentation.",
    },
  ],
});
</script>

<template>
  <main>
    <HeroSection
      compact
      eyebrow="Projects"
      title="Selected 3D capture projects."
      subtitle="Explore how interactive walkthroughs, digital twins, and site documentation can support marketing, communication, and long-term records."
      image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85"
    />

    <section class="section-pad bg-pearl">
      <div class="container-wide">
        <div
          class="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div class="max-w-3xl">
            <p class="eyebrow mb-4">Project Archive</p>
            <h2
              class="font-display text-5xl font-semibold leading-none sm:text-6xl"
            >
              Work across the built environment, public spaces, and active
              sites.
            </h2>
          </div>
          <p class="max-w-md text-sm leading-7 text-stone">
            Based in {{ company.region }}, Halton Spatial delivers local capture
            with hosted outputs that are ready to share.
          </p>
        </div>

        <div class="mb-10 flex flex-wrap gap-3">
          <button
            v-for="filter in projectFilters"
            :key="filter"
            class="rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition"
            :class="
              selectedFilter === filter
                ? 'border-ink bg-ink text-white'
                : 'border-ink/15 bg-white text-ink hover:border-brass hover:text-brass'
            "
            type="button"
            @click="selectedFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div class="grid gap-7 lg:grid-cols-3">
          <PropertyCard
            v-for="project in filteredProjects"
            :key="project.id"
            :property="project"
          />
        </div>

        <article
          v-if="interactiveProject"
          class="mt-12 grid gap-7 overflow-hidden bg-ink text-white shadow-cinematic lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div class="p-8 sm:p-10">
            <p class="eyebrow mb-4">Interactive Viewer Example</p>
            <h3 class="font-display text-4xl font-semibold leading-tight">
              {{ interactiveProject.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-white/68">
              {{ interactiveProject.description }}
            </p>
            <RouterLink
              :to="`/projects/${interactiveProject.slug}`"
              class="btn-primary mt-8"
              >Open Project Detail</RouterLink
            >
          </div>
          <SplatViewer :viewer="interactiveProject.viewer" compact />
        </article>
      </div>
    </section>
  </main>
</template>
