import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize i18n
import { locale, waitLocale } from 'svelte-i18n';

export const load = async () => {
  if (browser) {
    const cookies = document.cookie.split('; ');
    const localeCookie = cookies.find(cookie => cookie.startsWith('locale='));
    
    if (localeCookie) {
      const savedLocale = localeCookie.split('=')[1];
      locale.set(savedLocale);
    } else if(window.navigator.language.length == 2) {
      locale.set(window.navigator.language);
    }
  }
  await waitLocale();
};
