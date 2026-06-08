<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    subtitle?: string;
    primaryLabel: string;
    primaryTo: string;
    secondaryLabel?: string;
    secondaryTo?: string;
  }>(),
  {
    eyebrow: "Next Step",
  },
);
</script>

<template>
  <section class="bg-charcoal px-5 py-20 text-white sm:px-8 lg:px-12">
    <div
      class="container-wide flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
    >
      <div>
        <p class="eyebrow mb-4">{{ eyebrow }}</p>
        <h2
          class="max-w-3xl font-display text-5xl font-semibold leading-none sm:text-6xl"
        >
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="mt-5 max-w-2xl text-base leading-7 text-white/65"
        >
          {{ subtitle }}
        </p>
      </div>
      <div class="flex flex-col gap-4 sm:flex-row">
        <RouterLink :to="primaryTo" class="btn-primary">{{
          primaryLabel
        }}</RouterLink>
        <RouterLink
          v-if="secondaryLabel && secondaryTo"
          :to="secondaryTo"
          class="btn-secondary"
          >{{ secondaryLabel }}</RouterLink
        >
      </div>
    </div>
  </section>
</template>
