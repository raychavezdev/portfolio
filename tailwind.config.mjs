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
				'grid': "repeating-linear-gradient(to right,black 0, black 1px,transparent 1px,transparent 20px),repeating-linear-gradient(to bottom,black 0, black 1px,transparent 1px,transparent 20px)"
			}
		},
	},
	plugins: [],
}
