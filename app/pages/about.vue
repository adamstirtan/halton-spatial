<script setup lang="ts">
import { company } from '~/data/site'
import { useHead } from '@vueuse/head'

useHead({
  title: 'About',
  description: 'Learn about Splat Estate Media, a local real estate media studio specializing in immersive interactive property tours.'
})

const team = [
  {
    name: 'Avery Stone',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85'
  },
  {
    name: 'Jordan Vale',
    role: '3D Capture Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85'
  },
  {
    name: 'Noah Reed',
    role: 'Aerial & Video Producer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85'
  }
]
</script>

<template>
  <main>
    <HeroSection
      compact
      eyebrow="About"
      title="A local studio built for the next era of property marketing."
      subtitle="We combine cinematic real estate media with interactive Gaussian Splatting tours so buyers can experience space with more confidence."
      image="https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=2200&q=85"
    />

    <section class="section-pad bg-pearl">
      <div class="container-wide grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p class="eyebrow mb-4">Company Story</p>
          <h2 class="font-display text-5xl font-semibold leading-none sm:text-6xl">Premium media, grounded in local market knowledge.</h2>
        </div>
        <div class="space-y-7 text-base leading-8 text-charcoal/78">
          <p>
            Splat Estate Media was created for agents, teams, and builders who want listings to feel considered from
            the first impression. We produce polished photography, cinematic motion, aerial context, measured floor
            plans, and interactive 3D tours under one creative direction.
          </p>
          <p>
            Our mission is to make every property easier to understand and easier to remember. Interactive tours help
            buyers explore layout, light, scale, and finishes on their own time, which makes showings more intentional
            and listing campaigns more shareable.
          </p>
          <p>{{ company.serviceArea }}.</p>
        </div>
      </div>
    </section>

    <section class="section-pad bg-ink text-white">
      <div class="container-wide">
        <p class="eyebrow mb-10">Team</p>
        <div class="grid gap-7 md:grid-cols-3">
          <article v-for="member in team" :key="member.name">
            <img class="aspect-[4/5] w-full object-cover" :src="member.image" :alt="member.name">
            <h3 class="mt-5 font-display text-3xl font-semibold">{{ member.name }}</h3>
            <p class="mt-2 text-sm text-white/60">{{ member.role }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
