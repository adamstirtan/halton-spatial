<script setup lang="ts">
import { company } from '~/data/site'
</script>

<template>
  <footer class="bg-ink px-5 py-14 text-white sm:px-8 lg:px-12">
    <div class="container-wide grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <div class="mb-5 flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center border border-brass text-sm font-semibold text-brass">SS</span>
          <span class="text-sm font-semibold uppercase tracking-[0.22em]">Splat Spatial Studio</span>
        </div>
        <p class="max-w-md text-sm leading-7 text-white/62">
          Professional interactive 3D capture, digital twin creation, spatial documentation, and immersive visualization
          for real-world spaces, places, and objects.
        </p>
      </div>
      <div>
        <h2 class="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brass">Studio</h2>
        <div class="flex flex-col gap-3 text-sm text-white/68">
          <RouterLink to="/portfolio" class="hover:text-brass">Portfolio</RouterLink>
          <RouterLink to="/pricing" class="hover:text-brass">Pricing</RouterLink>
          <RouterLink to="/about" class="hover:text-brass">About</RouterLink>
          <RouterLink to="/contact" class="hover:text-brass">Contact</RouterLink>
        </div>
      </div>
      <div>
        <h2 class="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brass">Contact</h2>
        <div class="space-y-3 text-sm text-white/68">
          <p>{{ company.email }}</p>
          <p>{{ company.phone }}</p>
          <p>{{ company.serviceArea }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
