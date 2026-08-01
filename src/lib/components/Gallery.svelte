<script>
	import { _ } from 'svelte-i18n';
	import { portfolio, categories } from '$lib/data/portfolio.js';
	import { reveal } from '$lib/actions/reveal.js';
	import GalleryItem from './GalleryItem.svelte';
	import Lightbox from './Lightbox.svelte';

	let activeFilter = $state('all');
	let openIndex = $state(null);

	const filtered = $derived(
		activeFilter === 'all' ? portfolio : portfolio.filter((p) => p.category === activeFilter)
	);

	function setFilter(id) {
		activeFilter = id;
	}
</script>

<section id="work" class="relative scroll-mt-24 border-t border-bone/5 py-24 md:py-32">
	<div class="mx-auto max-w-container px-4 sm:px-6 md:px-10 lg:px-16">
		<!-- Header -->
		<div class="reveal mb-10 text-center" use:reveal>
			<p class="kicker mb-4 justify-center">
				<span class="h-px w-10 bg-accent"></span>{$_('workKicker')}<span class="h-px w-10 bg-accent"
				></span>
			</p>
			<h2
				class="font-display text-4xl font-light text-bone md:text-6xl lg:text-7xl"
				style="font-variation-settings:'opsz' 144"
			>
				{$_('workTitle')}
			</h2>
			<p class="mx-auto mt-5 max-w-xl text-pretty text-sm text-bone-muted md:text-base">
				{$_('workSubtitle')}
			</p>
		</div>

		<!-- Filters -->
		<div class="reveal mb-10 flex flex-wrap justify-center gap-2" use:reveal={{ delay: 80 }}>
			{#each categories as cat}
				<button
					onclick={() => setFilter(cat.id)}
					class="rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 {activeFilter ===
					cat.id
						? 'border-accent bg-accent text-ink-950'
						: 'border-bone/15 text-bone-muted hover:border-bone/40 hover:text-bone'}"
				>
					{$_(cat.labelKey)}
				</button>
			{/each}
		</div>

		<!-- Masonry -->
		{#key activeFilter}
			<div class="columns-2 gap-3 lg:columns-3 xl:columns-4 sm:gap-4">
				{#each filtered as image, index (image.src)}
					<GalleryItem {image} onOpen={() => (openIndex = index)} />
				{/each}
			</div>
		{/key}
	</div>
</section>

{#if openIndex !== null}
	<Lightbox items={filtered} start={openIndex} onClose={() => (openIndex = null)} />
{/if}
