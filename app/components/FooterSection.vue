<script setup lang="ts">
import { company } from "~/data/site";
</script>

<template>
  <footer class="bg-ink px-5 py-14 text-white sm:px-8 lg:px-12">
    <div class="container-wide grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <div class="mb-5 flex items-center gap-3">
          <span
            class="flex h-10 w-10 items-center justify-center border border-brass text-sm font-semibold text-brass"
            >HS</span
          >
          <span class="text-sm font-semibold uppercase tracking-[0.22em]">{{
            company.name
          }}</span>
        </div>
        <p class="max-w-md text-sm leading-7 text-white/62">
          Full-service interactive 3D photos, virtual tours, and digital twins
          for real-world spaces across Halton Region and nearby communities.
        </p>
      </div>
      <div>
        <h2
          class="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brass"
        >
          Explore
        </h2>
        <div class="flex flex-col gap-3 text-sm text-white/68">
          <RouterLink to="/projects" class="hover:text-brass"
            >Projects</RouterLink
          >
          <RouterLink to="/services" class="hover:text-brass"
            >Services</RouterLink
          >
          <RouterLink to="/get-quote" class="hover:text-brass"
            >Get a Quote</RouterLink
          >
          <a
            :href="company.instagramUrl"
            class="hover:text-brass"
            target="_blank"
            rel="noreferrer"
            >Instagram</a
          >
        </div>
      </div>
      <div>
        <h2
          class="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brass"
        >
          Contact
        </h2>
        <div class="space-y-3 text-sm text-white/68">
          <p>{{ company.email }}</p>
          <p>{{ company.phone }}</p>
          <p>{{ company.region }}</p>
          <p>{{ company.serviceArea }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
