<script setup lang="ts">
import type { Testimonial } from "~/data/site";

defineProps<{
  testimonial: Testimonial;
}>();
</script>

<template>
  <figure class="border-l border-brass/60 pl-6">
    <blockquote
      class="font-display text-3xl font-medium leading-tight text-ink"
    >
      &ldquo;{{ testimonial.quote }}&rdquo;
    </blockquote>
    <figcaption class="mt-8 text-sm text-ink/70">
      <strong class="block text-ink">{{ testimonial.name }}</strong>
      {{ testimonial.role }}
    </figcaption>
  </figure>
</template>
