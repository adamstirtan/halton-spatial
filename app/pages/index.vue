<script setup lang="ts">
import {
  company,
  featuredProjects,
  finalCta,
  homeHero,
  industries,
  instagramSection,
  processSteps,
  technologyShowcase,
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
              <RouterLink :to="homeHero.secondaryTo" class="btn-secondary">{{
                homeHero.secondaryLabel
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
            class="min-h-56 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-cinematic"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
            >
              Service
            </p>
            <h3 class="mt-8 font-display text-3xl font-semibold leading-tight">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-stone">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-ink text-white">
      <div class="container-wide">
        <div class="mb-12 max-w-3xl">
          <p class="eyebrow mb-4">Industries We Serve</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            Built for more than real estate.
          </h2>
        </div>
        <div class="grid gap-7 md:grid-cols-2 xl:grid-cols-5">
          <article
            v-for="industry in industries"
            :key="industry.name"
            class="group bg-white text-ink"
          >
            <div class="aspect-[4/5] overflow-hidden">
              <img
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                :src="industry.image"
                :alt="industry.name"
              />
            </div>
            <div class="p-6">
              <h3 class="font-display text-3xl font-semibold leading-tight">
                {{ industry.name }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-stone">
                {{ industry.description }}
              </p>
              <p class="mt-4 text-sm leading-7 text-stone">
                {{ industry.audience }}
              </p>
              <span
                class="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-brass"
              >
                {{ company.region }} Service
              </span>
            </div>
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

    <section class="section-pad bg-pearl">
      <div class="container-wide">
        <div
          class="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p class="eyebrow mb-4">Featured Projects</p>
            <h2
              class="font-display text-5xl font-semibold leading-none sm:text-6xl"
            >
              Recent work across property, construction, commercial, and public
              spaces.
            </h2>
          </div>
          <RouterLink
            to="/projects"
            class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
            >View All Projects</RouterLink
          >
        </div>
        <div class="grid gap-7 lg:grid-cols-3">
          <PropertyCard
            v-for="project in featuredProjects.slice(0, 3)"
            :key="project.id"
            :property="project"
          />
        </div>

        <article
          v-if="spotlightProject"
          class="mt-10 grid gap-7 overflow-hidden bg-ink text-white shadow-cinematic lg:grid-cols-[1.1fr_0.9fr]"
        >
          <SplatViewer :viewer="spotlightProject.viewer" compact />
          <div class="p-8 sm:p-10">
            <p class="eyebrow mb-4">Interactive Project Preview</p>
            <h3 class="font-display text-4xl font-semibold leading-tight">
              {{ spotlightProject.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-white/70">
              {{ spotlightProject.description }}
            </p>
            <p class="mt-6 text-sm leading-7 text-white/55">
              This featured card shows how a future project page can embed a
              live Three.js, PLY, or Gaussian Splat viewer directly alongside
              project details.
            </p>
            <RouterLink
              :to="`/projects/${spotlightProject.slug}`"
              class="btn-primary mt-8"
              >View Project</RouterLink
            >
          </div>
        </article>
      </div>
    </section>

    <section class="section-pad bg-charcoal text-white">
      <div class="container-wide">
        <div class="mb-12 max-w-3xl">
          <p class="eyebrow mb-4">How It Works</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            A straightforward process from capture to delivery.
          </h2>
        </div>
        <div class="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="step in processSteps"
            :key="step.step"
            class="border border-white/10 bg-white/5 p-6"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.24em] text-brass"
            >
              {{ step.step }}
            </p>
            <h3 class="mt-6 font-display text-3xl font-semibold">
              {{ step.title }}
            </h3>
            <p class="mt-4 text-sm leading-7 text-white/62">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-pearl">
      <div
        class="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
      >
        <div>
          <p class="eyebrow mb-4">{{ technologyShowcase.eyebrow }}</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            {{ technologyShowcase.title }}
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-8 text-stone">
            {{ technologyShowcase.description }}
          </p>
          <div class="mt-8 space-y-3 text-sm text-stone">
            <p
              v-for="point in technologyShowcase.supportingPoints"
              :key="point"
            >
              {{ point }}
            </p>
          </div>
          <p
            class="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brass"
          >
            Drag to orbit. Pinch to zoom. Future project viewers will load
            directly in this surface.
          </p>
        </div>
        <SplatViewer :viewer="spotlightProject?.viewer" />
      </div>
    </section>

    <section class="section-pad bg-ink text-white">
      <div
        class="container-wide grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
      >
        <div>
          <p class="eyebrow mb-4">Instagram</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            {{ instagramSection.title }}
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/68">
            {{ instagramSection.description }}
          </p>
          <a
            :href="company.instagramUrl"
            class="btn-primary mt-8"
            target="_blank"
            rel="noreferrer"
            >{{ instagramSection.buttonLabel }}</a
          >
        </div>
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="item in instagramSection.checklist"
            :key="item"
            class="border border-white/10 bg-white/5 p-5"
          >
            <p class="text-sm font-medium leading-7 text-white/72">
              {{ item }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Get Started"
      :title="finalCta.title"
      :subtitle="finalCta.subtitle"
      :primary-label="finalCta.primaryLabel"
      :primary-to="finalCta.primaryTo"
      secondary-label="View Projects"
      secondary-to="/projects"
    />
  </main>
</template>
