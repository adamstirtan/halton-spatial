<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: 'Get Quote',
  description: 'Request a custom quote for real estate photography, video, drone, floor plans, and interactive 3D property tours.'
})
</script>
<template>
  <main>
    <HeroSection
      compact
      eyebrow="Get Quote"
      title="Plan your next listing campaign."
      subtitle="Share the property details and services you need. We will shape a media package around the listing, timeline, and marketing goals."
      image="https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=2200&q=85"
    />
    <section class="section-pad bg-pearl">
      <div class="container-wide">
        <QuoteForm />
      </div>
    </section>
  </main>
</template>
