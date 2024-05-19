/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fr': 'auto 1fr',
				'fr-auto': '1fr auto',
			},
			transitionProperty: {
				height: 'height',
				width: 'width',
			},
		},
		fontFamily: {
			sans: ['Space Mono', 'monospace'],
		},
		colors: {
			white: '#F8F8F8',
			black: '#0A0A0A',
			gray: '#333333',
		},
	},
	plugins: [],
};
