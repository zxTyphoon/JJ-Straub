import { describe, it, expect } from 'vitest';
import en from '../src/lib/i18n/locales/en.json';
import de from '../src/lib/i18n/locales/de.json';
import { portfolio, categories } from '../src/lib/data/portfolio.js';

// A missing key renders the raw key string in the UI instead of text, silently.
describe('i18n locales', () => {
	it('en and de define the same keys', () => {
		expect(Object.keys(de).sort()).toEqual(Object.keys(en).sort());
	});

	it('defines a filter label for every category used', () => {
		// Reels.svelte builds these at runtime: 'filter' + capitalised category.
		const used = new Set([
			...categories.map((c) => c.labelKey),
			...portfolio.map((p) => `filter${p.category[0].toUpperCase()}${p.category.slice(1)}`)
		]);
		for (const key of used) expect(en, key).toHaveProperty(key);
	});
});
