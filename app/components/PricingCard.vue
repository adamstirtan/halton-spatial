<script setup lang="ts">
import type { PricingPackage } from '~/data/site'

defineProps<{
  plan: PricingPackage
}>()
</script>

<template>
  <article
    class="flex min-h-[520px] flex-col border p-8 transition duration-500"
    :class="plan.featured ? 'border-brass bg-ink text-white shadow-cinematic' : 'border-ink/12 bg-white text-ink'"
  >
    <p class="eyebrow mb-5">{{ plan.featured ? 'Most Requested' : 'Package' }}</p>
    <h3 class="font-display text-5xl font-semibold">{{ plan.name }}</h3>
    <p class="mt-5 text-sm leading-7" :class="plan.featured ? 'text-white/65' : 'text-stone'">{{ plan.description }}</p>
    <p class="mt-8 text-2xl font-semibold">{{ plan.price }}</p>
    <ul class="mt-8 space-y-4 text-sm" :class="plan.featured ? 'text-white/78' : 'text-charcoal'">
      <li v-for="service in plan.services" :key="service" class="flex items-center gap-3">
        <span class="h-1.5 w-1.5 rounded-full bg-brass" />
        {{ service }}
      </li>
    </ul>
    <RouterLink to="/get-quote" class="btn-primary mt-auto w-full">Request Quote</RouterLink>
  </article>
</template>
