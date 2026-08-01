import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				shimmer: 'shimmer 2s infinite linear',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				// `both` so staggered animation-delay holds the from-state instead of flashing in first
				'slide-up': 'slideUp 0.6s ease-out both'
			},
			keyframes: {
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			}
		}
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'hamlindigo',
						enhancements: true
					}
				]
			}
		})
	]
};
