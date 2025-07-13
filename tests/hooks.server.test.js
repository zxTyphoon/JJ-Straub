import { describe, it, expect, vi, beforeEach } from 'vitest';
import { handle } from '../src/hooks.server.js';
import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';

// reset locale before each test
beforeEach(() => {
	locale.set(null);
});

describe('handle hook', () => {
	it('sets locale from accept-language header', async () => {
		const request = new Request('http://localhost', {
			headers: {
				'accept-language': 'de-DE,de;q=0.9'
			}
		});

		const event = { request };
		const resolve = vi.fn(async () => new Response('ok'));

		await handle({ event, resolve });

		expect(get(locale)).toBe('de');
	});
});
