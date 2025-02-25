/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				playfair: ['Playfair Display Variable', 'serif'],
				lato: ['Lato', 'sans-serif'],
			},
			colors: {
				mintGreen: '#424F33',
				beige: '#F5EDE3',
				white: '#FFFFFF',
				lightGray: '#D9D9D9',
				darkGreen: '#424F33',
				darkGray: '#4A4A4A',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
