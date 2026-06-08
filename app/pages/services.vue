<script setup lang="ts">
import { serviceCategories } from "~/data/site";
import { useHead } from "@vueuse/head";
import CTASection from "~/components/CTASection.vue";
import HeroSection from "~/components/HeroSection.vue";
import SplatViewer from "~/components/SplatViewer.vue";

useHead({
  title: "Services | Halton Spatial",
  meta: [
    {
      name: "description",
      content:
        "Explore Halton Spatial services for real estate tours, construction documentation, commercial spaces, arts and culture, and drone capture.",
    },
  ],
});
</script>

<template>
  <main>
    <HeroSection
      compact
      eyebrow="Services"
      title="Full-service capture for spaces that need to be explored, documented, and shared."
      subtitle="Halton Spatial handles on-site capture, processing, hosting, and delivery so clients can focus on the project instead of the software."
      image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2200&q=85"
    />

    <section class="section-pad bg-pearl">
      <div
        class="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
      >
        <div>
          <p class="eyebrow mb-4">How We Work</p>
          <h2
            class="font-display text-5xl font-semibold leading-none sm:text-6xl"
          >
            A local service company with modern 3D tools behind the scenes.
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-8 text-stone">
            Our role is to make advanced 3D visualization approachable. We plan
            the capture, process the data, host the final experience, and
            deliver something your audience can actually use.
          </p>
        </div>
        <SplatViewer compact />
      </div>
    </section>

    <section class="section-pad bg-white">
      <div class="container-wide space-y-7">
        <article
          v-for="service in serviceCategories"
          :key="service.slug"
          class="grid gap-8 border border-ink/10 bg-pearl p-8 shadow-sm lg:grid-cols-[0.7fr_1.3fr] lg:items-start"
        >
          <div>
            <p class="eyebrow mb-4">Service</p>
            <h2 class="font-display text-4xl font-semibold leading-tight">
              {{ service.title }}
            </h2>
          </div>
          <div>
            <p class="text-base leading-8 text-stone">{{ service.summary }}</p>
            <div class="mt-6 grid gap-4 sm:grid-cols-3">
              <article
                v-for="bullet in service.bullets"
                :key="bullet"
                class="border border-ink/10 bg-white p-4 text-sm font-medium text-ink"
              >
                {{ bullet }}
              </article>
            </div>
          </div>
        </article>
      </div>
    </section>

    <CTASection
      eyebrow="Request a Quote"
      title="Need a custom capture plan?"
      subtitle="Tell us about the space, audience, and timeline. We will recommend the right approach for the job."
      primary-label="Get a Quote"
      primary-to="/get-quote"
      secondary-label="View Projects"
      secondary-to="/projects"
    />
  </main>
</template>
