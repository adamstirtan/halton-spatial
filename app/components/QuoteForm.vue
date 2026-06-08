<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  description: "",
});
</script>

<template>
  <form
    class="space-y-10 bg-white p-6 shadow-cinematic sm:p-10"
    name="quote-request"
    @submit.prevent
  >
    <section>
      <h2 class="font-display text-3xl font-semibold">Contact Information</h2>
      <div class="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <input
          v-model="form.name"
          class="field"
          name="name"
          placeholder="Name"
          type="text"
        />
        <input
          v-model="form.company"
          class="field"
          name="company"
          placeholder="Company"
          type="text"
        />
        <input
          v-model="form.email"
          class="field"
          name="email"
          placeholder="Email"
          type="email"
        />
        <input
          v-model="form.phone"
          class="field"
          name="phone"
          placeholder="Phone"
          type="tel"
        />
      </div>
    </section>

    <section>
      <h2 class="font-display text-3xl font-semibold">Project Details</h2>
      <div class="mt-5 grid gap-6 md:grid-cols-2">
        <input
          v-model="form.projectType"
          class="field"
          name="projectType"
          placeholder="Project Type"
          type="text"
        />
        <input
          v-model="form.location"
          class="field"
          name="location"
          placeholder="Location"
          type="text"
        />
      </div>
    </section>

    <section>
      <h2 class="font-display text-3xl font-semibold">Project Description</h2>
      <textarea
        v-model="form.description"
        class="field min-h-36 resize-y"
        name="description"
        placeholder="Tell us about the space, your timeline, how you plan to use the final deliverable, and any access considerations."
      />
    </section>

    <!-- Future integration point: submit to a protected quote workflow with scheduling, file uploads, and CRM routing. -->
    <button class="btn-primary" type="submit">Request Quote</button>
  </form>
</template>
