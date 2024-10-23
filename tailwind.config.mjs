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
        clampTitle: 'clamp(2.8rem,6.2vw,7.4rem)',
        clampSubTitle: 'clamp(1.2rem,2vw,3rem)',
        clamp: 'clamp(.75rem,2vw,.9rem)',
        clampDes: 'clamp(.9rem,2vw,1rem)',
      },
      backgroundImage: {
        grid: 'linear-gradient(#000 1px, transparent 1px),linear-gradient(90deg, #000 1px, transparent 1px)',
      },
      keyframes: {
        show: {
          to: {
            opacity: '1',
          },
        },
      },
      animation: {
        show: 'show .5s .2s forwards',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
