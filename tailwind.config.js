import { join } from 'path';
import { fileURLToPath } from 'url';

import { skeleton } from '@skeletonlabs/tw-plugin';

// Resolve __dirname in an ES Module context
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(__dirname, 'node_modules', '@skeletonlabs', 'skeleton', '**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			animation: {
				shimmer: 'shimmer 2s infinite linear',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'scale-in': 'scaleIn 0.3s ease-out forwards'
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
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			transitionTimingFunction: {
				'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
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
