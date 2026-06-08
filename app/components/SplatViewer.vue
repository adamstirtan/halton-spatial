<template>
  <div class="flex min-h-[360px] flex-col items-center justify-center border border-white/15 bg-ink bg-fine-grain bg-[length:32px_32px] p-8 text-center text-white">
    <p class="eyebrow mb-4">Future Integration</p>
    <h3 class="font-display text-4xl font-semibold">Interactive 3D Tour Viewer</h3>
    <p class="mt-4 max-w-lg text-sm leading-7 text-white/62">
      Gaussian Splat tour embed placeholder for client previews, MLS-safe links, and hosted interactive walkthroughs.
    </p>
  </div>
</template>

<!--
  Future Three.js Gaussian Splat renderer integration point:
  - Mount the renderer inside this component after client hydration.
  - Load splat assets from authenticated object storage/CDN URLs.
  - Add embed configuration for branded/unbranded tour sharing, lead capture, and MLS-compliant links.
  - Keep asset hosting, access controls, and signed URLs behind a future backend or serverless API.
-->
