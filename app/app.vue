<script setup lang="ts">
import FooterSection from "~/components/FooterSection.vue";
import NavigationBar from "~/components/NavigationBar.vue";
</script>

<template>
  <div class="min-h-screen bg-pearl text-ink antialiased">
    <NavigationBar />
    <main>
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>
