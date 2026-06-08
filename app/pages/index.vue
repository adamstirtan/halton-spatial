<script setup lang="ts">
import { industries, portfolioItems, services, testimonials } from '~/data/site'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Interactive 3D Tours, Digital Twins & Spatial Capture',
  ogTitle: 'Immersive 3D Experiences for Real-World Spaces',
  description:
    'Interactive 3D tours, digital twins, spatial capture, virtual walkthroughs, construction documentation, and digital preservation for physical environments.',
  ogDescription:
    'Transform real-world spaces, places, and objects into immersive interactive 3D experiences.'
})

const features = [
  {
    title: 'Explore Anywhere',
    copy: 'Give clients, stakeholders, visitors, and teams the ability to move through a space remotely with spatial context.'
  },
  {
    title: 'Share Instantly',
    copy: 'Deliver interactive walkthroughs and digital twins through links built for websites, presentations, campaigns, and reviews.'
  },
  {
    title: 'Preserve and Document',
    copy: 'Create lasting visual records for built environments, cultural assets, project milestones, and physical objects.'
  }
]
</script>

<template>
  <main>
    <HeroSection
      title="Immersive 3D Experiences for Real-World Spaces"
      subtitle="Capture buildings, environments, venues, construction projects, and cultural assets in stunning interactive 3D."
      primary-label="Get a Quote"
      primary-to="/get-quote"
      secondary-label="View Portfolio"
      secondary-to="/portfolio"
      video="https://cdn.coverr.co/videos/coverr-modern-living-room-1588/1080p.mp4"
    />

    <section class="section-pad bg-pearl">
      <div class="container-wide">
        <div class="mb-12 max-w-3xl">
          <p class="eyebrow mb-4">Capture Services</p>
          <h2 class="font-display text-5xl font-semibold leading-none sm:text-6xl">Transform physical environments into interactive digital experiences.</h2>
        </div>
        <div class="grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <article v-for="service in services" :key="service" class="min-h-56 bg-white p-6 transition hover:bg-ink hover:text-white">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-brass">Service</p>
            <h3 class="mt-12 font-display text-3xl font-semibold leading-tight">{{ service }}</h3>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-ink text-white">
      <div class="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p class="eyebrow mb-4">Why It Works</p>
          <h2 class="font-display text-5xl font-semibold leading-none sm:text-6xl">A richer way to understand places, projects, and objects.</h2>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <article v-for="feature in features" :key="feature.title">
            <h3 class="font-display text-3xl font-semibold">{{ feature.title }}</h3>
            <p class="mt-4 text-sm leading-7 text-white/62">{{ feature.copy }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-pearl">
      <div class="container-wide">
        <div class="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p class="eyebrow mb-4">Featured Work</p>
            <h2 class="font-display text-5xl font-semibold leading-none sm:text-6xl">Recent spatial capture projects.</h2>
          </div>
          <RouterLink to="/portfolio" class="text-xs font-semibold uppercase tracking-[0.22em] text-brass">View All</RouterLink>
        </div>
        <div class="grid gap-7 lg:grid-cols-3">
          <PropertyCard v-for="property in portfolioItems.slice(0, 3)" :key="property.id" :property="property" />
        </div>
      </div>
    </section>

    <section class="section-pad bg-ink text-white">
      <div class="container-wide">
        <div class="mb-12 max-w-3xl">
          <p class="eyebrow mb-4">Industries We Serve</p>
          <h2 class="font-display text-5xl font-semibold leading-none sm:text-6xl">Built for any space that needs to be explored, shared, or preserved.</h2>
        </div>
        <div class="grid gap-7 md:grid-cols-2 xl:grid-cols-5">
          <article v-for="industry in industries" :key="industry.name" class="group bg-white text-ink">
            <div class="aspect-[4/5] overflow-hidden">
              <img class="h-full w-full object-cover transition duration-700 group-hover:scale-105" :src="industry.image" :alt="industry.name">
            </div>
            <div class="p-6">
              <h3 class="font-display text-3xl font-semibold leading-tight">{{ industry.name }}</h3>
              <p class="mt-4 text-sm leading-7 text-stone">{{ industry.description }}</p>
              <span class="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                Learn More
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-pad bg-charcoal text-white">
      <div class="container-wide">
        <p class="eyebrow mb-10">Client Feedback</p>
        <div class="grid gap-12 lg:grid-cols-3">
          <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.name" :testimonial="testimonial" />
        </div>
      </div>
    </section>

    <CTASection
      title="Ready to turn a physical space into an immersive 3D experience?"
      subtitle="Capture the places, projects, venues, and cultural assets your audience needs to explore from anywhere."
      primary-label="Get a Quote"
      primary-to="/get-quote"
      secondary-label="Contact Us"
      secondary-to="/contact"
    />
  </main>
</template>
