<script setup lang="ts">
import { computed, ref } from "vue";
import {
  company,
  featuredProjects,
  finalCta,
  homeHero,
  instagramSection,
  projectFilters,
  projects,
  processSteps,
  testimonials,
  whatWeDoItems,
  whyHaltonSpatial,
} from "~/data/site";
import { useHead } from "@vueuse/head";
import CTASection from "~/components/CTASection.vue";
import PropertyCard from "~/components/PropertyCard.vue";
import SplatViewer from "~/components/SplatViewer.vue";
import TestimonialCard from "~/components/TestimonialCard.vue";

useHead({
  title: "Halton Spatial | Interactive 3D Photos & Virtual Tours",
  meta: [
    {
      name: "description",
      content:
        "Halton Spatial creates interactive 3D photos, virtual tours, and digital twins for real-world spaces across Halton Region and surrounding communities.",
    },
    {
      property: "og:title",
      content: "Interactive 3D Photos & Virtual Tours",
    },
    {
      property: "og:description",
      content:
        "Full-service capture, processing, hosting, and delivery for real estate, construction, commercial spaces, arts, museums, and aerial documentation.",
    },
  ],
});

const spotlightProject =
  featuredProjects.find((project) => project.hasInteractiveViewer) ??
  featuredProjects[0];

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
    <section
      class="relative min-h-[86vh] overflow-hidden bg-[#090b10] text-white"
    >
      <!-- Three.js canvas fills the entire hero background -->
      <SplatViewer
        :viewer="spotlightProject?.viewer"
        background
        class="absolute inset-0"
      />
      <!-- Left-to-right overlay: transparent on left → dark on right for text legibility -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent from-[30%] via-[#090b10]/75 via-[62%] to-[#090b10]"
      />
      <!-- Subtle bottom fade -->
      <div
        class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090b10]/70 to-transparent"
      />

      <div
        class="relative z-10 flex min-h-[86vh] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-24"
      >
        <div class="container-wide flex justify-end">
          <div class="max-w-2xl">
            <p class="eyebrow mb-5">{{ homeHero.eyebrow }}</p>
            <h1
              class="font-display text-6xl font-semibold leading-[0.92] sm:text-7xl lg:text-8xl"
            >
              {{ homeHero.title }}
            </h1>
            <p class="mt-7 max-w-xl text-lg leading-8 text-white/78 sm:text-xl">
              {{ homeHero.subtitle }}
            </p>
            <div class="mt-10 flex flex-col gap-4 sm:flex-row">
              <RouterLink :to="homeHero.primaryTo" class="btn-primary">{{
                homeHero.primaryLabel
              }}</RouterLink>
            </div>
            <p class="mt-8 max-w-lg text-sm leading-7 text-white/55">
              Based in {{ company.region }}, we deliver complete on-site
              capture, processing, hosting, and handoff without requiring
              clients to buy equipment or manage software.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad bg-pearl">
      <div class="container-wide">
        <div
          class="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div class="max-w-3xl">
            <p class="eyebrow mb-4">Projects</p>
            <h2
              class="font-display text-5xl font-semibold leading-none sm:text-6xl"
            >
              Explore our 3D projects and digital twins.
            </h2>
          </div>
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
        <div class="grid gap-7 lg:grid-cols-3">
          <PropertyCard
            v-for="project in filteredProjects"
            :key="project.id"
            :property="project"
          />
        </div>
      </div>
    </section>

    <section class="section-pad bg-ink text-white">
      <div class="container-wide">
        <div class="mb-12 max-w-3xl">
          <p class="eyebrow mb-4">What We Do</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            Clear, immersive ways to explore real-world spaces online.
          </h2>
        </div>
        <div class="grid gap-7 md:grid-cols-2 xl:grid-cols-5">
          <article
            v-for="item in whatWeDoItems"
            :key="item.title"
            class="min-h-56 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-cinematic"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
            >
              Service
            </p>
            <h3 class="mt-8 font-display text-3xl font-semibold leading-tight">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-white/68">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-pearl">
      <div class="container-wide">
        <div class="mb-12 max-w-3xl">
          <p class="eyebrow mb-4">Why Halton Spatial</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            A local service model built around outcomes, not software
            subscriptions.
          </h2>
        </div>
        <div class="grid gap-7 md:grid-cols-2 xl:grid-cols-5">
          <article
            v-for="benefit in whyHaltonSpatial"
            :key="benefit.title"
            class="border border-ink/10 bg-white p-6 shadow-sm"
          >
            <h3 class="font-display text-3xl font-semibold leading-tight">
              {{ benefit.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-stone">
              {{ benefit.description }}
            </p>
          </article>
        </div>

        <div class="mt-16">
          <p class="eyebrow mb-10">Client Feedback</p>
          <div class="grid gap-12 lg:grid-cols-3">
            <TestimonialCard
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              :testimonial="testimonial"
            />
          </div>
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Get Started"
      :title="finalCta.title"
      :subtitle="finalCta.subtitle"
      :primary-label="finalCta.primaryLabel"
      :primary-to="finalCta.primaryTo"
      secondary-label="Instagram"
      :secondary-to="company.instagramUrl"
    />
  </main>
</template>
