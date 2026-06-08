<script setup lang="ts">
import { properties, type Property } from '~/data/site'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Portfolio',
  description: 'Explore sample real estate media campaigns with photography, video placeholders, and future 3D tour viewer previews.'
})

const selectedProperty = ref<Property | null>(null)
const activeImageIndex = ref(0)

const openPreview = (property: Property) => {
  selectedProperty.value = property
  activeImageIndex.value = 0
}

const closePreview = () => {
  selectedProperty.value = null
}

const nextImage = () => {
  if (!selectedProperty.value) return
  activeImageIndex.value = (activeImageIndex.value + 1) % selectedProperty.value.images.length
}

const previousImage = () => {
  if (!selectedProperty.value) return
  activeImageIndex.value =
    (activeImageIndex.value - 1 + selectedProperty.value.images.length) % selectedProperty.value.images.length
}
</script>

<template>
  <main>
    <HeroSection
      compact
      eyebrow="Portfolio"
      title="Listing media with depth."
      subtitle="A sample gallery of cinematic property campaigns, interactive tour placeholders, and premium visual storytelling."
      image="https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=2200&q=85"
    />

    <section class="section-pad bg-pearl">
      <div class="container-wide columns-1 gap-7 md:columns-2 xl:columns-3">
        <article
          v-for="(property, index) in properties"
          :key="property.id"
          class="mb-7 break-inside-avoid overflow-hidden bg-white shadow-sm"
        >
          <button class="group block w-full text-left" type="button" @click="openPreview(property)">
            <img
              class="w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              :class="index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[4/3]'"
              :src="property.image"
              :alt="property.address"
            >
            <div class="p-6">
              <p class="eyebrow mb-2">{{ property.type }}</p>
              <h2 class="font-display text-3xl font-semibold">{{ property.address }}</h2>
              <p class="mt-3 text-sm text-stone">{{ property.squareFeet }} · {{ property.details }}</p>
              <span class="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-brass">Launch Tour</span>
            </div>
          </button>
        </article>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="selectedProperty"
        class="fixed inset-0 z-[80] overflow-y-auto bg-ink/92 p-5 text-white backdrop-blur-xl sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        <div class="mx-auto max-w-6xl">
          <div class="mb-6 flex items-center justify-between gap-5">
            <div>
              <p class="eyebrow mb-2">{{ selectedProperty.type }}</p>
              <h2 class="font-display text-4xl font-semibold sm:text-5xl">{{ selectedProperty.address }}</h2>
            </div>
            <button class="h-11 w-11 border border-white/25 text-2xl" type="button" aria-label="Close preview" @click="closePreview">
              &times;
            </button>
          </div>

          <div class="grid gap-7 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div class="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  class="h-full w-full object-cover"
                  :src="selectedProperty.images[activeImageIndex]"
                  :alt="selectedProperty.address"
                >
                <div class="absolute inset-x-0 bottom-0 flex justify-between p-4">
                  <button class="h-11 w-11 border border-white/45 bg-black/40" type="button" aria-label="Previous image" @click="previousImage">
                    Prev
                  </button>
                  <button class="h-11 w-11 border border-white/45 bg-black/40" type="button" aria-label="Next image" @click="nextImage">
                    Next
                  </button>
                </div>
              </div>

              <div class="mt-7 aspect-video bg-black p-6">
                <div class="flex h-full items-center justify-center border border-white/10 text-center">
                  <div>
                    <p class="eyebrow mb-3">Video</p>
                    <p class="font-display text-3xl font-semibold">{{ selectedProperty.videoLabel }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-7">
              <SplatViewer />
              <div class="bg-white p-6 text-ink">
                <h3 class="font-display text-3xl font-semibold">Property Details</h3>
                <p class="mt-4 text-sm leading-7 text-stone">{{ selectedProperty.squareFeet }} · {{ selectedProperty.details }}</p>
                <RouterLink to="/get-quote" class="btn-primary mt-7 w-full">Request Similar Tour</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>
