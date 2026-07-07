/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				night: {
					950: '#070708',
					900: '#0c0c0e',
					850: '#121215',
					800: '#18181d',
					700: '#232329'
				},
				bone: {
					DEFAULT: '#e9e4da',
					muted: '#a39e93',
					faint: '#6b675f'
				},
				brass: {
					light: '#dcbf85',
					DEFAULT: '#c6a15b',
					dark: '#8f7440'
				}
			},
			fontFamily: {
				sans: ['Space Grotesk Variable', 'system-ui', 'sans-serif'],
				display: ['Instrument Serif', 'Georgia', 'serif']
			},
			letterSpacing: {
				widest: '0.3em'
			},
			animation: {
				marquee: 'marquee 40s linear infinite',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'rise-in': 'riseIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'ken-burns': 'kenBurns 3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				riseIn: {
					'0%': { opacity: '0', transform: 'translateY(2.5rem)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				kenBurns: {
					'0%': { opacity: '0', transform: 'scale(1.06)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
			}
		}
	},
	plugins: []
};
