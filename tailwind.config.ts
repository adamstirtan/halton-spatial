import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/app.vue',
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/composables/**/*.{js,ts}',
    './app/utils/**/*.{js,ts}',
    './app/data/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#121212',
        charcoal: '#1f1f1d',
        pearl: '#f5f2ec',
        mist: '#d8d2c6',
        brass: '#b7925a',
        stone: '#80786e'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif']
      },
      boxShadow: {
        cinematic: '0 30px 80px rgba(0, 0, 0, 0.28)'
      },
      backgroundImage: {
        'fine-grain':
          'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)'
      }
    }
  }
}
