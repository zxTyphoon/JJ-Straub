import { locale } from 'svelte-i18n';

export const handle = async ({ event, resolve }) => {
	const cookies = event.request.headers.get('cookie') || '';
  const localeCookie = cookies
    .split('; ')
    .find((cookie) => cookie.startsWith('locale='));

  if (localeCookie) {
    const savedLocale = localeCookie.split('=')[1];
    locale.set(savedLocale);
  } else {
    const langHeader = event.request.headers.get('accept-language');
    if (langHeader) {
      const lang = langHeader.split(',')[0].split('-')[0];
      if (lang.length === 2) {
        locale.set(lang);
      }
    }
  }

	return resolve(event);
};
