<script setup lang="ts">
import { useHead } from "@vueuse/head";
import HeroSection from "~/components/HeroSection.vue";
import QuoteForm from "~/components/QuoteForm.vue";

const quoteSteps = [
  {
    step: "01",
    title: "Initial Discussion",
    description:
      "We learn about the space, your timeline, and how you plan to use the final interactive deliverable.",
  },
  {
    step: "02",
    title: "Site Visit or Capture Planning",
    description:
      "We confirm access, scope, and the best approach for on-site capture.",
  },
  {
    step: "03",
    title: "Quote",
    description:
      "You receive a clear proposal covering capture, processing, hosting, and delivery.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Once approved, we complete the work and provide hosted outputs, embeds, and share-ready links.",
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
      title="Start the conversation about your space."
      subtitle="Tell us what you are documenting, marketing, or building and we will shape the right capture approach for your project."
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
              A clear process from first message to final delivery.
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
