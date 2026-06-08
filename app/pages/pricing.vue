<script setup lang="ts">
import { pricingPackages } from '~/data/site'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Pricing',
  description: 'Real estate photography, video, drone, floor plan, and interactive 3D tour package options.'
})
</script>

<template>
  <main>
    <HeroSection
      compact
      eyebrow="Pricing"
      title="Media packages for every listing tier."
      subtitle="Choose a simple photography package or build a full interactive campaign for your next premium property."
      image="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2200&q=85"
    />

    <section class="section-pad bg-pearl">
      <div class="container-wide grid gap-7 lg:grid-cols-3">
        <PricingCard v-for="plan in pricingPackages" :key="plan.name" :plan="plan" />
      </div>
      <div class="container-wide mt-14 text-center">
        <RouterLink to="/get-quote" class="btn-primary">Request Custom Quote</RouterLink>
      </div>
    </section>
  </main>
</template>
