/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      fontSize: {
        clampTitle: 'clamp(3.45rem,8vw,14.5rem)',
        clamp: 'clamp(.75rem,2vw,.9rem)',
        clampDes: 'clamp(.9rem,2vw,1rem)',
      },
      backgroundImage: {
        grid: 'linear-gradient(#000 1px, transparent 1px),linear-gradient(90deg, #000 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
