<script setup lang="ts">
import type { Property } from "~/data/site";

defineProps<{
  property: Property;
  dark?: boolean;
}>();
</script>

<template>
  <article
    class="group overflow-hidden bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-cinematic"
    :class="{ 'bg-charcoal text-white': dark }"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <img
        class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        :src="property.image"
        :alt="property.title"
      />
    </div>
    <div class="p-6">
      <p
        class="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-brass"
      >
        {{ property.cardLabel }}
      </p>
      <h3 class="font-display text-3xl font-semibold leading-tight">
        {{ property.title }}
      </h3>
      <p class="mt-3 text-sm" :class="dark ? 'text-white/64' : 'text-stone'">
        {{ property.location }} · {{ property.details }}
      </p>
      <p
        class="mt-4 text-sm leading-7"
        :class="dark ? 'text-white/70' : 'text-stone'"
      >
        {{ property.summary }}
      </p>
      <RouterLink
        :to="`/projects/${property.slug}`"
        class="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-brass transition"
        :class="dark ? 'group-hover:text-white' : 'group-hover:text-ink'"
      >
        View Project
      </RouterLink>
    </div>
  </article>
</template>
