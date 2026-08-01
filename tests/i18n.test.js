import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import en from '../src/lib/i18n/locales/en.json';
import de from '../src/lib/i18n/locales/de.json';

const srcDir = fileURLToPath(new URL('../src', import.meta.url));

function keysUsedInSource() {
	const used = new Set();
	for (const entry of readdirSync(srcDir, { recursive: true })) {
		const file = String(entry);
		if (!file.endsWith('.svelte')) continue;
		const source = readFileSync(`${srcDir}/${file}`, 'utf8');
		for (const [, key] of source.matchAll(/\$_\('([^']+)'\)/g)) used.add(key);
	}
	return used;
}

describe('i18n locales', () => {
	it('en and de define the same keys', () => {
		expect(Object.keys(en).sort()).toEqual(Object.keys(de).sort());
	});

	it('defines every key the components ask for', () => {
		const missing = [...keysUsedInSource()].filter((key) => !(key in en));
		expect(missing).toEqual([]);
	});

	it('defines no keys the components never use', () => {
		const used = keysUsedInSource();
		expect(Object.keys(en).filter((key) => !used.has(key))).toEqual([]);
	});
});
