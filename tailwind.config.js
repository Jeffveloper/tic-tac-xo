/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fr': 'auto 1fr',
				'fr-auto': '1fr auto',
			},
			gridTemplateRows: {
				'auto-fr': 'auto 1fr',
				'fr-auto': '1fr auto',
			},
			transitionProperty: {
				height: 'height',
				width: 'width',
			},
			height: {
				'mobile-header': '64px',
				'mobile-body': 'calc(100vh - 64px)',
			},
		},
		fontFamily: {
			sans: ['var(--font-jetbrains-mono)', 'monospace'],
		},
		colors: {
			white: '#F8F8F8',
			black: '#0A0A0A',
			gray: '#333333',
		},
	},
	plugins: [],
};
