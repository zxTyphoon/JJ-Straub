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
				shimmer: 'shimmer 2.2s infinite linear',
				marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
				'marquee-reverse': 'marquee-reverse var(--marquee-duration, 40s) linear infinite',
				grain: 'grain 8s steps(10) infinite',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite'
			},
			keyframes: {
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'marquee-reverse': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0)' }
				},
				grain: {
					'0%,100%': { transform: 'translate(0,0)' },
					'10%': { transform: 'translate(-5%,-10%)' },
					'20%': { transform: 'translate(-15%,5%)' },
					'30%': { transform: 'translate(7%,-25%)' },
					'40%': { transform: 'translate(-5%,25%)' },
					'50%': { transform: 'translate(-15%,10%)' },
					'60%': { transform: 'translate(15%,0)' },
					'70%': { transform: 'translate(0,15%)' },
					'80%': { transform: 'translate(3%,35%)' },
					'90%': { transform: 'translate(-10%,10%)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				pulseSoft: {
					'0%,100%': { opacity: '1' },
					'50%': { opacity: '0.4' }
				}
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
				cinema: 'cubic-bezier(0.65, 0, 0.35, 1)'
			}
		}
	},
	plugins: []
};
