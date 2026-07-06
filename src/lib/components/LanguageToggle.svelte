<script>
	import { locale } from 'svelte-i18n';

	// Compact EN / DE segmented toggle. Persists choice in a cookie (read by
	// hooks.server.js and +layout.js) so the language survives reloads.
	const langs = [
		{ code: 'en', label: 'EN' },
		{ code: 'de', label: 'DE' }
	];

	function setLang(code) {
		locale.set(code);
		if (typeof document !== 'undefined') {
			document.cookie = `locale=${code}; path=/; max-age=${60 * 60 * 24 * 365}`;
		}
	}

	const active = (code) => ($locale || '').slice(0, 2) === code;
</script>

<div
	class="flex items-center rounded-full border border-bone/15 bg-ink-800/60 p-0.5 text-xs font-medium backdrop-blur"
	role="group"
	aria-label="Language"
>
	{#each langs as { code, label }}
		<button
			type="button"
			onclick={() => setLang(code)}
			aria-pressed={active(code)}
			class="rounded-full px-2.5 py-1 tracking-wide transition-colors duration-300 {active(code)
				? 'bg-accent text-ink-950'
				: 'text-bone-muted hover:text-bone'}"
		>
			{label}
		</button>
	{/each}
</div>
