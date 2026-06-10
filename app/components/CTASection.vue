<script setup lang="ts">
const props = withDefaults(
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

const isExternalLink = (value: string) => /^https?:\/\//i.test(value);
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
        <a
          v-if="isExternalLink(props.primaryTo)"
          :href="props.primaryTo"
          class="btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          {{ props.primaryLabel }}
        </a>
        <RouterLink v-else :to="props.primaryTo" class="btn-primary">
          {{ props.primaryLabel }}
        </RouterLink>
        <a
          v-if="
            props.secondaryLabel &&
            props.secondaryTo &&
            isExternalLink(props.secondaryTo)
          "
          :href="props.secondaryTo"
          class="btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          {{ props.secondaryLabel }}
        </a>
        <RouterLink
          v-else-if="props.secondaryLabel && props.secondaryTo"
          :to="props.secondaryTo"
          class="btn-secondary"
        >
          {{ props.secondaryLabel }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>
