<script setup lang="ts">
import { company } from '~/data/site'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Contact',
  description: 'Contact Splat Estate Media for real estate photography, video, drone, floor plans, and interactive 3D tours.'
})
</script>

<template>
  <main>
    <HeroSection
      compact
      eyebrow="Contact"
      title="Book media that gives your listing presence."
      subtitle="Tell us about the property, the launch date, and the story you want buyers to feel."
      image="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=2200&q=85"
    />

    <section class="section-pad bg-ink text-white">
      <div class="container-wide grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <aside>
          <p class="eyebrow mb-5">Studio Details</p>
          <div class="space-y-5 text-white/70">
            <p>{{ company.email }}</p>
            <p>{{ company.phone }}</p>
            <p>{{ company.serviceArea }}</p>
            <p>Instagram · Vimeo · LinkedIn</p>
          </div>
          <div class="mt-10 flex min-h-72 items-center justify-center border border-white/15 bg-white/5 p-6 text-center">
            <div>
              <p class="eyebrow mb-3">Service Area Map</p>
              <p class="text-sm text-white/60">Map placeholder for future embedded coverage zones.</p>
            </div>
          </div>
        </aside>
        <ContactForm />
      </div>
    </section>
  </main>
</template>
