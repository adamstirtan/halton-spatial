<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { company } from "~/data/site";

const isOpen = ref(false);
const isScrolled = ref(false);

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
];

const updateScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition duration-500"
    :class="isScrolled || isOpen ? 'bg-ink shadow-cinematic' : 'bg-ink'"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
    >
      <RouterLink
        to="/"
        class="flex items-center gap-3 text-white"
        @click="isOpen = false"
      >
        <span
          class="flex h-10 w-10 items-center justify-center border border-brass text-sm font-semibold text-brass"
          >HS</span
        >
        <span class="text-sm font-semibold uppercase tracking-[0.22em]">{{
          company.name
        }}</span>
      </RouterLink>

      <div class="hidden items-center gap-8 lg:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-xs font-semibold uppercase tracking-[0.2em] text-white/75 transition hover:text-brass"
        >
          {{ link.label }}
        </RouterLink>
        <a
          :href="company.instagramUrl"
          class="text-xs font-semibold uppercase tracking-[0.2em] text-white/75 transition hover:text-brass"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <RouterLink to="/get-quote" class="btn-primary">Get a Quote</RouterLink>
      </div>

      <button
        class="flex h-11 w-11 items-center justify-center border border-white/25 text-white lg:hidden"
        type="button"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <span v-if="isOpen" class="text-xl leading-none">&times;</span>
        <span v-else class="flex flex-col gap-1.5" aria-hidden="true">
          <span class="block h-px w-5 bg-current" />
          <span class="block h-px w-5 bg-current" />
          <span class="block h-px w-5 bg-current" />
        </span>
      </button>
    </nav>

    <div
      v-if="isOpen"
      class="border-t border-white/10 bg-ink px-5 pb-6 lg:hidden"
    >
      <div class="flex flex-col gap-4 pt-5">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
          @click="isOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <a
          :href="company.instagramUrl"
          class="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <RouterLink
          to="/get-quote"
          class="btn-primary w-full"
          @click="isOpen = false"
          >Get a Quote</RouterLink
        >
      </div>
    </div>
  </header>
</template>
