<script setup lang="ts">
import { company, processSteps } from "~/data/site";
import { useHead } from "@vueuse/head";
import CTASection from "~/components/CTASection.vue";
import HeroSection from "~/components/HeroSection.vue";

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
      title="Services designed to make your space be memorable."
      subtitle="We handle the work behind the scenes so the final experience feels clean, simple, and effortless."
      image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2200&q=85"
    />
    <section class="section-pad bg-white">
      <div class="container-wide">
        <div class="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div class="xl:sticky xl:top-28">
            <p class="eyebrow mb-4">Workflow</p>
            <h2
              class="max-w-2xl font-display text-5xl font-semibold leading-none sm:text-6xl"
            >
              A refined workflow built to make the final experience feel
              effortless.
            </h2>
            <p class="mt-6 max-w-xl text-base leading-8 text-stone">
              Every project moves through a clear sequence, from the first plan
              to the finished presentation. The process stays structured behind
              the scenes so the result feels simple, elegant, and ready to
              share.
            </p>
          </div>

          <div
            class="relative overflow-hidden bg-ink p-6 text-white shadow-cinematic sm:p-8 lg:p-10"
          >
            <div
              class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,146,90,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_30%)]"
            />
            <div class="relative space-y-6">
              <article
                v-for="(step, index) in processSteps"
                :key="step.step"
                class="grid gap-5 border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:grid-cols-[auto_1fr] md:items-start"
              >
                <div class="flex items-center gap-4 md:block">
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.28em] text-brass"
                  >
                    {{ step.step }}
                  </p>
                  <div
                    v-if="index < processSteps.length - 1"
                    class="hidden h-16 w-px bg-white/10 md:mx-auto md:mt-4 md:block"
                  />
                </div>

                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.2em] text-white/45"
                  >
                    Step {{ index + 1 }}
                  </p>
                  <h3
                    class="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl"
                  >
                    {{ step.title }}
                  </h3>
                  <p
                    class="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base"
                  >
                    {{ step.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Request a Quote"
      title="Need something tailored to your space?"
      subtitle="Share the basics, and we will shape a recommendation that fits naturally."
      primary-label="Get a Quote"
      primary-to="/get-quote"
      secondary-label="Instagram"
      :secondary-to="company.instagramUrl"
    />
  </main>
</template>
