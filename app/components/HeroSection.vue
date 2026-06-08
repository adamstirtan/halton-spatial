<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle: string
    image?: string
    video?: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
    compact?: boolean
  }>(),
  {
    eyebrow: '',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85',
    video: '',
    primaryLabel: '',
    primaryTo: '/',
    secondaryLabel: '',
    secondaryTo: '/',
    compact: false
  }
)
</script>

<template>
  <section class="relative flex min-h-[86vh] items-end overflow-hidden bg-ink text-white" :class="{ 'min-h-[62vh]': compact }">
    <video
      v-if="video"
      class="absolute inset-0 h-full w-full object-cover"
      autoplay
      muted
      loop
      playsinline
      poster="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
    >
      <source :src="video" type="video/mp4">
    </video>
    <img v-else class="absolute inset-0 h-full w-full object-cover" :src="image" :alt="title">
    <div class="cinematic-overlay absolute inset-0" />
    <div class="relative z-10 w-full px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-24">
      <div class="container-wide">
        <p v-if="eyebrow" class="eyebrow mb-5">{{ eyebrow }}</p>
        <h1 class="max-w-4xl font-display text-6xl font-semibold leading-[0.92] sm:text-7xl lg:text-8xl">
          {{ title }}
        </h1>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
          {{ subtitle }}
        </p>
        <div v-if="primaryLabel || secondaryLabel" class="mt-10 flex flex-col gap-4 sm:flex-row">
          <RouterLink v-if="primaryLabel" :to="primaryTo" class="btn-primary">{{ primaryLabel }}</RouterLink>
          <RouterLink v-if="secondaryLabel" :to="secondaryTo" class="btn-secondary">{{ secondaryLabel }}</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
