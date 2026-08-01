import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize i18n
import { locale, waitLocale } from 'svelte-i18n';

export const prerender = true;

export const load = async () => {
	if (browser) {
		const cookies = document.cookie.split('; ');
		const localeCookie = cookies.find((cookie) => cookie.startsWith('locale='));

		// No cookie? svelte-i18n's initialLocale already derives one from navigator.language.
		if (localeCookie) {
			locale.set(localeCookie.split('=')[1]);
		}
	}
	await waitLocale();
};
