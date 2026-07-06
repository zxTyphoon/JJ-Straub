# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing/portfolio website for actor JJ Straub (www.jjstraub.com) — a SvelteKit 2 / Svelte 5 site styled with Tailwind + Skeleton UI, deployed to Vercel.

## Commands

```
npm run dev        # start dev server (vite dev)
npm run build       # production build (vite build)
npm run preview     # preview a production build
npm run test        # run tests (vitest)
npm run lint        # prettier --check . && eslint .
npm run format      # prettier --write .
```

Run a single test file: `npx vitest run tests/hooks.server.test.js`.

There is only one test file today (`tests/hooks.server.test.js`), which exercises `src/hooks.server.js` via `vitest`, with `environment: 'node'` (see `vite.config.js`).

## Architecture

This is a single-page portfolio site (plus a `/legal` route) built on SvelteKit with `adapter-vercel`. `svelte.config.js` sets `prerender = true` in `src/routes/+layout.js`, so the whole site is statically prerendered at build time.

**Locale handling (server + client, cookie-driven):** The site is bilingual (English/German) via `svelte-i18n`, registered in `src/lib/i18n/index.js` with locale JSON files in `src/lib/i18n/locales/{en,de}.json`. Locale resolution happens in two places that mirror each other:
- `src/hooks.server.js` — on each request, reads the `locale` cookie first, falling back to the `Accept-Language` header, and calls `locale.set(...)` before rendering (SSR).
- `src/routes/+layout.js` `load()` — on the client, reads the same `locale` cookie, falling back to `navigator.language`, and calls `locale.set(...)` then `await waitLocale()`.

The language switcher lives in `Hero.svelte` (`changeLanguage`), which sets the `locale` store and writes the `locale` cookie (7-day max-age) so both server and client paths pick it up on the next load/navigation. When touching i18n behavior, keep the hook, the layout load, and the switcher's cookie name/format in sync.

**Page composition:** `src/routes/+layout.svelte` wraps every page with `Header` / `Footer` / `ScrollToTop`, injects Vercel Analytics + Speed Insights, and imports the global `app.postcss`. `src/routes/+page.svelte` is the actual homepage: it defines the full portfolio image/video list inline (an array of `{ src, alt, caption, video? }` objects) and all page-level SEO/meta tags (OpenGraph, Twitter cards, JSON-LD `Person` schema), then renders `Hero` + `Gallery`.

**Gallery/Lightbox pair:** `Gallery.svelte` owns `selectedIndex` state and keyboard navigation (arrow keys/Escape via `svelte:window`), staggers item entrance animations via `onMount` timeouts, and renders a CSS-columns masonry grid of `GalleryItem` components. Clicking an item opens `Lightbox.svelte`, which renders either an `<img>` or `<video>` depending on whether the item has a `video` field, and dispatches `next`/`prev`/`close`/`goTo` events back up to `Gallery`. Portfolio media itself is split across two hosts: cover images are hotlinked from a Vercel Blob store (`https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/...`), while video clips are served from `static/` (referenced as root-relative paths like `/JJStraub_empireagency-...mp4`).

**Styling:** Tailwind (`tailwind.config.js`) is layered with the Skeleton UI plugin (`@skeletonlabs/tw-plugin`) using a custom `hamlindigo` theme (set via `data-theme` in `src/app.html`), plus custom keyframe animations (shimmer, fade-in, slide-up, scale-in) used for loading/entrance effects throughout the gallery and hero.

## Code style

- Tabs for indentation, single quotes, no trailing commas, 100 print width (enforced by Prettier; see `.prettierrc`). Svelte files are parsed with `prettier-plugin-svelte`.
- ESLint flat config (`eslint.config.js`) extends `eslint:recommended` + `eslint-plugin-svelte` recommended, with `eslint-config-prettier` disabling stylistic rules that Prettier owns.
