<script setup lang="ts">
import { computed, ref } from "vue";
import { projectFilters, projects } from "~/data/site";
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
      </div>
    </section>
  </main>
</template>
