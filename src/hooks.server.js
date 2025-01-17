import { locale } from 'svelte-i18n'

export const handle = async ({ event, resolve }) => {
  // Get the language from the request header
  const lang = event.request.headers.get('accept-language')?.split(',')[0]
  
  // Set the locale for SSR
  if (lang) {
    locale.set(lang)
  }

  return resolve(event)
}
