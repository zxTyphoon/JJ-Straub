<script>
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	// Runtime accent palettes. The swatch hex mirrors the CSS variable in
	// app.postcss so the preview dot is correct even before the var applies.
	const palettes = [
		{ id: 'gold', nameKey: 'accentGold', swatch: '#c9a45c' },
		{ id: 'steel', nameKey: 'accentSteel', swatch: '#8ba9c4' },
		{ id: 'oxblood', nameKey: 'accentOxblood', swatch: '#b03838' },
		{ id: 'mono', nameKey: 'accentMono', swatch: '#ede8e0' }
	];

	let open = $state(false);
	let current = $state('gold');
	let root;

	onMount(() => {
		current = document.documentElement.dataset.accent || 'gold';
	});

	function choose(id) {
		current = id;
		document.documentElement.dataset.accent = id;
		try {
			localStorage.setItem('accent', id);
		} catch {
			// localStorage unavailable (private mode) — accent still applies for the session
		}
		open = false;
	}

	function onWindowClick(event) {
		if (open && root && !root.contains(event.target)) open = false;
	}

	function onKeydown(event) {
		if (event.key === 'Escape') open = false;
	}
</script>

<svelte:window onclick={onWindowClick} onkeydown={onKeydown} />

<div class="relative" bind:this={root}>
	<button
		type="button"
		onclick={() => (open = !open)}
		class="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 bg-ink-800/60 backdrop-blur transition-colors duration-300 hover:border-accent/60"
		aria-haspopup="menu"
		aria-expanded={open}
		aria-label={$_('theme')}
		title={$_('theme')}
	>
		<span
			class="h-4 w-4 rounded-full ring-1 ring-bone/30"
			style="background: {palettes.find((p) => p.id === current)?.swatch}"
		></span>
	</button>

	{#if open}
		<div
			class="absolute right-0 z-50 mt-3 w-44 rounded-2xl border border-bone/10 bg-ink-850/95 p-2 shadow-cinema backdrop-blur-xl"
			role="menu"
		>
			<p class="px-3 py-2 text-[0.62rem] uppercase tracking-kicker text-bone-dim">{$_('theme')}</p>
			{#each palettes as palette}
				<button
					type="button"
					role="menuitemradio"
					aria-checked={current === palette.id}
					onclick={() => choose(palette.id)}
					class="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-bone/5 {current ===
					palette.id
						? 'text-bone'
						: 'text-bone-muted'}"
				>
					<span
						class="h-4 w-4 flex-shrink-0 rounded-full ring-1 ring-bone/30"
						style="background: {palette.swatch}"
					></span>
					<span class="flex-1">{$_(palette.nameKey)}</span>
					{#if current === palette.id}
						<svg class="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>
