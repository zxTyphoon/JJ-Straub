/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// Warm cinematic near-black scale (static)
				ink: {
					950: '#070605',
					900: '#0b0a09',
					850: '#100e0b',
					800: '#16130e',
					750: '#1c1813',
					700: '#231e17',
					600: '#332c22',
					500: '#473e30'
				},
				bone: {
					DEFAULT: '#ede8e0',
					muted: '#b7b0a5',
					dim: '#857f74'
				},
				// Runtime-switchable accent, driven by CSS variables on <html data-accent>
				accent: {
					DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
					soft: 'rgb(var(--accent-soft) / <alpha-value>)',
					strong: 'rgb(var(--accent-strong) / <alpha-value>)'
				}
			},
			fontFamily: {
				display: ['"Fraunces Variable"', 'Georgia', 'Cambria', 'serif'],
				sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'sans-serif']
			},
			letterSpacing: {
				kicker: '0.32em'
			},
			maxWidth: {
				container: '90rem'
			},
			boxShadow: {
				cinema: '0 40px 120px -40px rgb(0 0 0 / 0.9)',
				glow: '0 0 60px -12px rgb(var(--accent) / 0.45)'
			},
			animation: {
				marquee: 'marquee var(--marquee-duration, 40s) linear infinite'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				}
			}
		}
	},
	plugins: []
};
