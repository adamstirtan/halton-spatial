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
          Halton Spatial creates immersive 3D photos, virtual walkthroughs, and
          digital twins that let customers explore places as if they were there
          in person. We serve businesses and organizations across Halton Region
          with a fully managed service—from capture and processing to web-ready
          delivery without subscriptions or platform lock-in.
        </p>
      </div>
      <div>
        <h2
          class="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brass"
        >
          Explore
        </h2>
        <div class="flex flex-col gap-3 text-sm text-white/68">
          <RouterLink to="/" class="hover:text-brass">Home</RouterLink>
          <RouterLink to="/projects" class="hover:text-brass"
            >Projects</RouterLink
          >
          <RouterLink to="/services" class="hover:text-brass"
            >Services</RouterLink
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
          <p>
            <a :href="`mailto:${company.email}`" class="hover:text-brass">{{
              company.email
            }}</a>
          </p>
          <p>
            <a :href="`tel:${company.phone}`" class="hover:text-brass">{{
              company.phone
            }}</a>
          </p>
          <p>{{ company.serviceArea }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
