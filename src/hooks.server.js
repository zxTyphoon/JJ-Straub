import { locale } from 'svelte-i18n';

export const handle = async ({ event, resolve }) => {
	const cookies = event.request.headers.get('cookie') || '';
	const localeCookie = cookies.split('; ').find((cookie) => cookie.startsWith('locale='));

	if (localeCookie) {
		const savedLocale = localeCookie.split('=')[1];
		locale.set(savedLocale);
	} else {
		const lang = event.request.headers.get('accept-language')?.split(',')[0];
		if (lang.length == 2) {
			locale.set(lang);
		}
	}

	return resolve(event);
};
