<script setup lang="ts">
import { computed, ref } from "vue";
import { useHead } from "@vueuse/head";
import CTASection from "~/components/CTASection.vue";
import HeroSection from "~/components/HeroSection.vue";
import PropertyCard from "~/components/PropertyCard.vue";
import { projectFilters, projects } from "~/data/site";

useHead({
  title: "Projects | Halton Spatial",
  meta: [
    {
      name: "description",
      content:
        "Browse Halton Spatial projects by industry and explore individual 3D capture, digital twin, and documentation case studies.",
    },
  ],
});

const selectedFilter = ref("All");

const filteredProjects = computed(() => {
  if (selectedFilter.value === "All") {
    return projects;
  }

  return projects.filter(
    (project) => project.industry === selectedFilter.value,
  );
});
</script>

<template>
  <main>
    <HeroSection
      compact
      eyebrow="Projects"
      title="A closer look at the spaces we have captured."
      subtitle="Browse the work, filter by category, and open any project for the full story."
      image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=85"
    />

    <section class="section-pad bg-pearl">
      <div class="container-wide">
        <div
          class="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div class="max-w-3xl">
            <p class="eyebrow mb-4">Project Archive</p>
            <h2
              class="font-display text-5xl font-semibold leading-none sm:text-6xl"
            >
              Find the work that feels closest to what you want to create.
            </h2>
          </div>
          <p class="max-w-md text-sm leading-7 text-stone">
            Every project opens into a dedicated page with imagery, context, and
            a clearer view of the finished result.
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
                : 'border-ink/10 bg-white text-ink hover:border-brass hover:text-brass'
            "
            type="button"
            @click="selectedFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div v-if="filteredProjects.length" class="grid gap-7 lg:grid-cols-3">
          <PropertyCard
            v-for="project in filteredProjects"
            :key="project.id"
            :property="project"
          />
        </div>

        <div v-else class="border border-ink/10 bg-white p-8 shadow-sm">
          <p class="eyebrow mb-4">No Projects</p>
          <h2 class="font-display text-4xl font-semibold leading-tight">
            Nothing here just yet.
          </h2>
          <p class="mt-4 max-w-2xl text-base leading-8 text-stone">
            Try another category, or get in touch if you have something specific
            in mind.
          </p>
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Start a Project"
      title="Have a space you want to share beautifully?"
      subtitle="Tell us what you are planning, and we will help shape the right approach for it."
      primary-label="Get a Quote"
      primary-to="/get-quote"
      secondary-label="View Services"
      secondary-to="/services"
    />
  </main>
</template>
