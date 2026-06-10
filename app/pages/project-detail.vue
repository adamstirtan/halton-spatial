<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import { projects } from "~/data/site";
import CTASection from "~/components/CTASection.vue";

const route = useRoute();

const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug),
);

const hasProjectVideo = computed(() => Boolean(project.value?.videoUrl));

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
    <section class="bg-pearl px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pb-16">
      <div
        class="container-wide overflow-hidden bg-ink text-white shadow-cinematic xl:grid xl:grid-cols-[1.35fr_0.65fr]"
      >
        <div
          class="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[560px]"
        >
          <template v-if="hasProjectVideo">
            <video
              class="block h-full w-full object-cover"
              :src="project.videoUrl"
              autoplay
              muted
              loop
              playsinline
              controls
            />
            <div
              class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,11,16,0.02),rgba(9,11,16,0.38))]"
            />
          </template>
          <img
            v-else
            class="h-full w-full object-cover"
            :src="project.image"
            :alt="project.title"
          />
        </div>

        <div class="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <p class="eyebrow mb-4">{{ project.industry }}</p>
            <h1
              class="font-display text-5xl font-semibold leading-[0.94] sm:text-6xl"
            >
              {{ project.title }}
            </h1>
            <p class="mt-5 text-base leading-8 text-white/74 sm:text-lg">
              {{ project.summary }}
            </p>
          </div>

          <div class="mt-8 space-y-6">
            <div
              class="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/68"
            >
              <span class="border border-white/12 px-4 py-2">{{
                project.location
              }}</span>
              <span class="border border-white/12 px-4 py-2">{{
                project.metric
              }}</span>
              <span class="border border-white/12 px-4 py-2">{{
                project.type
              }}</span>
            </div>

            <div class="border-t border-white/12 pt-6">
              <p
                class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
              >
                Details
              </p>
              <p class="mt-4 text-sm leading-7 text-white/70">
                {{ project.details }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad bg-white">
      <div class="container-wide">
        <div class="mb-10 max-w-3xl">
          <p class="eyebrow mb-4">Photo Gallery</p>
        </div>
      </div>
      <div class="container-wide grid gap-7 md:grid-cols-2 xl:grid-cols-3">
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

    <section class="section-pad bg-pearl">
      <div class="container-wide grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <article class="border border-ink/10 bg-white p-8 shadow-sm sm:p-10">
          <p class="eyebrow mb-4">Summary</p>
          <p class="mt-6 text-base leading-8 text-stone sm:text-lg">
            {{ project.description }}
          </p>
        </article>

        <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
          <article class="border border-ink/10 bg-white p-6 shadow-sm">
            <p
              class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
            >
              Deliverables
            </p>
            <ul class="mt-5 space-y-4 text-sm leading-7 text-stone">
              <li v-for="item in project.deliverables" :key="item">
                {{ item }}
              </li>
            </ul>
          </article>
          <article class="border border-ink/10 bg-white p-6 shadow-sm">
            <p
              class="text-xs font-semibold uppercase tracking-[0.22em] text-brass"
            >
              Scope
            </p>
            <ul class="mt-5 space-y-4 text-sm leading-7 text-stone">
              <li v-for="item in project.scope" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Next Project"
      title="Ready to plan your project?"
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
        <RouterLink to="/" class="btn-primary mt-8"> Back Home </RouterLink>
      </div>
    </section>
  </main>
</template>
