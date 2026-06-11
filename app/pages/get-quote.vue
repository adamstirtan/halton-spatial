<script setup lang="ts">
import { useHead } from "@vueuse/head";
import HeroSection from "~/components/HeroSection.vue";
import QuoteForm from "~/components/QuoteForm.vue";

const quoteSteps = [
  {
    step: "01",
    title: "Say Hello",
    description:
      "Tell us a little about the space, the timing, and what you want people to feel when they see it.",
  },
  {
    step: "02",
    title: "Shape the Plan",
    description:
      "We map out the right approach, the right timing, and the smoothest way to capture everything well.",
  },
  {
    step: "03",
    title: "Receive a Clear Quote",
    description:
      "You get a clear proposal with everything laid out simply and transparently.",
  },
  {
    step: "04",
    title: "Bring It to Life",
    description:
      "Once approved, we create the final experience and prepare it for sharing.",
  },
];

useHead({
  title: "Get a Quote | Halton Spatial",
  meta: [
    {
      name: "description",
      content:
        "Request a custom quote for interactive 3D photos, virtual tours, digital twins, and spatial documentation services in Halton Region.",
    },
  ],
});
</script>
<template>
  <main>
    <HeroSection
      compact
      eyebrow="Get Quote"
      title="Let’s talk about your space."
      subtitle="Share what you have in mind, and we will help shape the right next step."
      image="https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=2200&q=85"
    />
    <section class="section-pad bg-pearl">
      <div
        class="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
      >
        <QuoteForm />

        <aside class="space-y-6 bg-ink p-8 text-white shadow-cinematic sm:p-10">
          <div>
            <p class="eyebrow mb-4">What Happens Next</p>
            <h2 class="font-display text-4xl font-semibold leading-tight">
              A simple path from first message to finished experience.
            </h2>
          </div>

          <div class="space-y-5">
            <article
              v-for="step in quoteSteps"
              :key="step.step"
              class="border border-white/10 bg-white/5 p-5"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.24em] text-brass"
              >
                {{ step.step }}
              </p>
              <h3 class="mt-3 font-display text-2xl font-semibold">
                {{ step.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-white/65">
                {{ step.description }}
              </p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>
