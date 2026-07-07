<script>
	import { _ } from 'svelte-i18n';
	import { works, categories } from '$lib/data/portfolio.js';
	import { reveal } from '$lib/actions/reveal.js';
	import WorkItem from './WorkItem.svelte';
	import Lightbox from './Lightbox.svelte';

	let activeFilter = 'all';
	let selectedIndex = null;
	let hasFiltered = false;
	let innerWidth = 0;

	$: filtered =
		activeFilter === 'all'
			? works
			: activeFilter === 'clips'
				? works.filter((work) => work.video)
				: works.filter((work) => work.category === activeFilter);

	// Mirrors the grid's responsive column count (columns-1 sm:2 lg:3 xl:4)
	$: cols = innerWidth >= 1280 ? 4 : innerWidth >= 1024 ? 3 : innerWidth >= 640 ? 2 : 1;
	$: rowsPerCol = Math.max(1, Math.ceil(filtered.length / cols));

	// CSS columns lay items out down each column, so an index-based stagger
	// would sweep column by column. Convert to the item's visual row/column so
	// the cascade sweeps row by row instead.
	function cascadeDelay(index, rowsPerCol, cols) {
		const col = Math.floor(index / rowsPerCol);
		const row = index % rowsPerCol;
		return Math.min(row * 90 + col * 30, 600);
	}

	$: selected = selectedIndex !== null ? filtered[selectedIndex] : null;

	function setFilter(filter) {
		activeFilter = filter;
		selectedIndex = null;
		hasFiltered = true;
	}

	function openLightbox(index) {
		selectedIndex = index;
		document.body.style.overflow = 'hidden';
	}

	function closeLightbox() {
		selectedIndex = null;
		document.body.style.overflow = '';
	}

	function next() {
		selectedIndex = (selectedIndex + 1) % filtered.length;
	}

	function prev() {
		selectedIndex = (selectedIndex - 1 + filtered.length) % filtered.length;
	}

	function handleKeydown(event) {
		if (selectedIndex === null) return;
		if (event.key === 'Escape') closeLightbox();
		if (event.key === 'ArrowRight') next();
		if (event.key === 'ArrowLeft') prev();
	}
</script>

<svelte:window on:keydown={handleKeydown} bind:innerWidth />

<section id="work" class="relative scroll-mt-20 px-6 md:px-10 lg:px-16 py-24 md:py-36">
	<!-- Section header -->
	<div class="mb-12 md:mb-16">
		<div class="flex items-center gap-4 mb-6" use:reveal>
			<span class="text-[0.65rem] uppercase tracking-[0.3em] text-brass">01</span>
			<span class="h-px w-10 bg-brass/50"></span>
			<span class="text-[0.65rem] uppercase tracking-[0.3em] text-bone-muted">
				{$_('work.label')}
			</span>
		</div>

		<div class="flex flex-wrap items-end justify-between gap-8">
			<h2
				class="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-bone"
				use:reveal={{ delay: 100 }}
			>
				{$_('work.titleA')}
				<em class="italic text-brass">{$_('work.titleB')}</em>
			</h2>
			<p
				class="text-xs uppercase tracking-[0.25em] text-bone-faint pb-2"
				use:reveal={{ delay: 200 }}
			>
				{works.length}
				{$_('work.productions')}
			</p>
		</div>
	</div>

	<!-- Filters -->
	<div class="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14" use:reveal={{ delay: 250 }}>
		{#each categories as category}
			<button
				on:click={() => setFilter(category)}
				class="px-4 md:px-5 py-2 text-[0.65rem] md:text-xs uppercase tracking-[0.2em] border transition-all duration-300 {activeFilter ===
				category
					? 'bg-bone text-night-900 border-bone'
					: 'border-white/15 text-bone-muted hover:border-bone/40 hover:text-bone'}"
				aria-pressed={activeFilter === category}
			>
				{$_(`work.filters.${category}`)}
			</button>
		{/each}
	</div>

	<!-- Masonry grid. Re-keyed per filter so every card re-enters with the
	     staggered rise-in, echoing the scroll-reveal language. -->
	{#key activeFilter}
		<div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
			{#each filtered as work, index (work.src)}
				<WorkItem
					{work}
					{index}
					flyDelay={cascadeDelay(index, rowsPerCol, cols)}
					animate={!hasFiltered}
					on:select={() => openLightbox(index)}
				/>
			{/each}
		</div>
	{/key}
</section>

{#if selected}
	<Lightbox
		item={selected}
		currentIndex={selectedIndex}
		total={filtered.length}
		on:close={closeLightbox}
		on:next={next}
		on:prev={prev}
	/>
{/if}
