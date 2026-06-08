<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  propertyType: '',
  squareFeet: '',
  services: [] as string[],
  notes: ''
})

const serviceOptions = ['Photography', 'Video', 'Drone', '3D Tour', 'Floor Plan']
</script>

<template>
  <form class="space-y-10 bg-white p-6 shadow-cinematic sm:p-10" name="quote-request" @submit.prevent>
    <section>
      <h2 class="font-display text-3xl font-semibold">Contact Information</h2>
      <div class="mt-5 grid gap-6 md:grid-cols-3">
        <input v-model="form.name" class="field" name="name" placeholder="Name" type="text">
        <input v-model="form.email" class="field" name="email" placeholder="Email" type="email">
        <input v-model="form.phone" class="field" name="phone" placeholder="Phone" type="tel">
      </div>
    </section>

    <section>
      <h2 class="font-display text-3xl font-semibold">Property Information</h2>
      <div class="mt-5 grid gap-6 md:grid-cols-2">
        <input v-model="form.address" class="field" name="address" placeholder="Property Address" type="text">
        <input v-model="form.city" class="field" name="city" placeholder="City" type="text">
        <input v-model="form.propertyType" class="field" name="propertyType" placeholder="Property Type" type="text">
        <input v-model="form.squareFeet" class="field" name="squareFeet" placeholder="Approximate Square Footage" type="text">
      </div>
    </section>

    <section>
      <h2 class="font-display text-3xl font-semibold">Services Requested</h2>
      <div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <label
          v-for="service in serviceOptions"
          :key="service"
          class="flex cursor-pointer items-center gap-3 border border-ink/12 p-4 text-sm font-medium transition hover:border-brass"
        >
          <input v-model="form.services" class="accent-brass" type="checkbox" :value="service">
          {{ service }}
        </label>
      </div>
    </section>

    <section>
      <h2 class="font-display text-3xl font-semibold">Project Notes</h2>
      <textarea v-model="form.notes" class="field min-h-36 resize-y" name="notes" placeholder="Tell us about timing, access, special rooms, twilight requests, or tour goals." />
    </section>

    <!-- Future integration point: submit to a protected quote workflow with file uploads, scheduling, and payment status. -->
    <button class="btn-primary" type="submit">Request Quote</button>
  </form>
</template>
