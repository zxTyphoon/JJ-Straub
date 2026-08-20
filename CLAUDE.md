# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing/portfolio website for actor JJ Straub (www.jjstraub.com) — a SvelteKit 2 / Svelte 5 single-page site with a bespoke "cinematic editorial" Tailwind theme, deployed to Vercel.

## Commands

```
npm run dev        # start dev server (vite dev)
npm run build      # production build (vite build)
npm run preview    # preview a production build
npm run test       # run tests (vitest)
npm run lint       # prettier --check . && eslint .
npm run format     # prettier --write .
```

Run a single test file: `npx vitest run tests/hooks.server.test.js`.

There is only one test file today (`tests/hooks.server.test.js`), which exercises `src/hooks.server.js` via `vitest`, with `environment: 'node'` (see `vite.config.js`).

## Architecture

Single-page portfolio (plus a `/legal` route) built on SvelteKit with `adapter-vercel`. `src/routes/+layout.js` sets `prerender = true`, so the whole site is statically prerendered at build time.

**Locale handling (server + client, cookie-driven):** The site is bilingual (English/German) via `svelte-i18n`, registered in `src/lib/i18n/index.js` with locale JSON files in `src/lib/i18n/locales/{en,de}.json` (nested keys, accessed with dot paths like `$_('work.filters.all')`). Locale resolution happens in two places that mirror each other:

- `src/hooks.server.js` — on each request, reads the `locale` cookie first, falling back to the `Accept-Language` header, and calls `locale.set(...)` before rendering (SSR).
- `src/routes/+layout.js` `load()` — on the client, reads the same `locale` cookie, falling back to `navigator.language`, and calls `locale.set(...)` then `await waitLocale()`.

The language switcher lives in `Header.svelte` (`setLanguage`), which sets the `locale` store and writes the `locale` cookie (7-day max-age) so both server and client paths pick it up on the next load/navigation. When touching i18n behavior, keep the hook, the layout load, and the switcher's cookie name/format in sync.

**Data modules (`src/lib/data/`):** `portfolio.js` exports `works` (every credit as `{ src, alt, title, role, category, video? }`) and `categories` (the filter list; `clips` is virtual — derived from the presence of `video`). `links.js` exports `socials` (external profile links) and `contact` (direct email + agency details). Content edits happen here, not in components. Cover images are hotlinked from a Vercel Blob store (`https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/...`); video clips are served from `static/` as root-relative paths.

**Page composition:** `src/routes/+layout.svelte` loads the self-hosted fonts (Fontsource: Instrument Serif display + Space Grotesk Variable), wraps every page with `Header` / `Footer` / `ScrollToTop`, applies the `.grain` film-grain overlay class, and injects Vercel Analytics + Speed Insights. `src/routes/+page.svelte` holds all page-level SEO/meta tags (OpenGraph, Twitter cards, JSON-LD `Person` schema) and renders the four sections: `Hero` → `Work` → `About` → `Contact`. Sections are anchor targets (`#work`, `#about`, `#contact`) navigated from the header.

**Work/Lightbox pair:** `Work.svelte` owns the category filter state, the masonry grid (CSS columns), and lightbox state incl. keyboard navigation (arrow keys/Escape via `svelte:window`); the lightbox index refers into the _filtered_ list. `WorkItem.svelte` renders one credit card (hover caption, index number, clip badge). `Lightbox.svelte` renders `<img>` or `<video>` based on the item's `video` field, supports touch-swipe navigation, and dispatches `next`/`prev`/`close`.

**Scroll reveals:** `src/lib/actions/reveal.js` is a Svelte action using IntersectionObserver; it pairs with the `[data-reveal]` CSS in `app.postcss` (which also handles `prefers-reduced-motion`). Use `use:reveal={{ delay: 150 }}` for staggering.

## Design system

Bespoke Tailwind theme in `tailwind.config.js` — no UI kit:

- **Colors:** `night-*` (near-black canvas shades), `bone` / `bone-muted` / `bone-faint` (warm off-white ink), `brass` / `brass-light` / `brass-dark` (single gold accent).
- **Type:** `font-display` (Instrument Serif; italics as accent, used for headlines/wordmark) and `font-sans` (Space Grotesk; uppercase + wide tracking for micro-labels).
- **Motifs:** sharp corners (no rounded cards), hairline `border-white/5..15` borders, numbered section labels (`01 — Portfolio`), ghost-outline marquee text, film-grain overlay.
- **Animations:** `marquee`, `rise-in`, `ken-burns`, `fade-in` keyframes in the Tailwind config; scroll reveals via the `reveal` action.

## Code style

- Tabs for indentation, single quotes, no trailing commas, 100 print width (enforced by Prettier; see `.prettierrc`). Svelte files are parsed with `prettier-plugin-svelte`.
- ESLint flat config (`eslint.config.js`) extends `eslint:recommended` + `eslint-plugin-svelte` recommended, with `eslint-config-prettier` disabling stylistic rules that Prettier owns.
- Components use Svelte legacy syntax (`export let`, `on:click`, `$:`) consistently — keep new components consistent with that.
