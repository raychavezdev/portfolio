/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif'],
				'oswald': ['Oswald', 'sans-serif']
			},
			fontSize: {
				'clamp': "clamp(3.5rem,8vw,15rem)"
			},
			backgroundImage: {
				'grid': "linear-gradient(#000 1px, transparent 1px),linear-gradient(90deg, #000 1px, transparent 1px)"
			}
		},
	},
	plugins: [],
}
