<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: ''
})
</script>

<template>
  <form class="space-y-6" name="contact" @submit.prevent>
    <div class="grid gap-6 sm:grid-cols-2">
      <input v-model="form.name" class="dark-field" name="name" placeholder="Name" type="text">
      <input v-model="form.email" class="dark-field" name="email" placeholder="Email" type="email">
    </div>
    <textarea v-model="form.message" class="dark-field min-h-36 resize-y" name="message" placeholder="How can we help?" />
    <!-- Future integration point: connect submissions to CRM, email automation, or authenticated client portal workflows. -->
    <button class="btn-primary" type="submit">Send Message</button>
  </form>
</template>
