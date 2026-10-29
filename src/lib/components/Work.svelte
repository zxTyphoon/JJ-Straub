<script>
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { works, categories } from '$lib/data/portfolio.js';
	import { reveal } from '$lib/actions/reveal.js';
	import WorkItem from './WorkItem.svelte';
	import Lightbox from './Lightbox.svelte';

	let activeFilter = categories[0];
	let selectedIndex = null;
	let hasFiltered = false;
	let innerWidth = 0;
	// The masonry layout needs the viewport width, so the prerendered HTML uses
	// plain CSS columns until the component is mounted in the browser.
	let mounted = false;
	onMount(() => (mounted = true));

	const productionCount = works.filter((work) => work.category === 'character').length;

	$: filtered =
		activeFilter === 'clips'
			? works.filter((work) => work.video)
			: works.filter((work) => work.category === activeFilter);

	// Same breakpoints as the CSS-columns fallback (columns-1 sm:2 lg:3 xl:4)
	$: cols = innerWidth >= 1280 ? 4 : innerWidth >= 1024 ? 3 : innerWidth >= 640 ? 2 : 1;
	// Column width in px, from the section padding (px-6 md:px-10 lg:px-16) and gap-x-5
	$: pad = innerWidth >= 1024 ? 64 : innerWidth >= 768 ? 40 : 24;
	$: colWidth = Math.max(100, (innerWidth - 2 * pad - 20 * (cols - 1)) / cols);
	$: columns = layoutColumns(filtered, cols, colWidth);

	// Masonry. CSS columns fill column by column in array order and can only
	// move the breaks, which can leave the last column far shorter. Instead:
	// 1. put each card into the currently shortest column (array order then
	//    reads across the rows), using its known rendered height;
	// 2. let the cards in the bottom half (at least the last four rows) move or
	//    swap columns while that evens out the bottom edge. The upper half
	//    keeps the array order.
	function layoutColumns(items, count, width) {
		// image (border inside the card) + 2px border + mb-5 gap
		const h = items.map((w) => ((width - 2) * w.height) / w.width + 2 + 20);
		const assign = [];
		const heights = new Array(count).fill(0);
		h.forEach((height, i) => {
			let col = 0;
			for (let c = 1; c < count; c++) if (heights[c] < heights[col] - 0.5) col = c;
			assign[i] = col;
			heights[col] += height;
		});

		const spread = () => Math.max(...heights) - Math.min(...heights);
		const tail = Math.max(0, items.length - Math.max(4 * count, Math.ceil(items.length / 2)));
		const tryChange = (apply, undo) => {
			const before = spread();
			apply();
			if (spread() < before - 0.5) return true;
			undo();
			return false;
		};
		for (let pass = 0, improved = true; improved && pass < 20; pass++) {
			improved = false;
			for (let i = items.length - 1; i >= tail; i--) {
				for (let c = 0; c < count; c++) {
					const from = assign[i];
					if (c === from) continue;
					const move = (a, b) => ((heights[a] -= h[i]), (heights[b] += h[i]));
					if (
						tryChange(
							() => move(from, c),
							() => move(c, from)
						)
					) {
						assign[i] = c;
						improved = true;
					}
				}
				for (let j = tail; j < i; j++) {
					const a = assign[i];
					const b = assign[j];
					if (a === b) continue;
					const swap = (s) => (
						(heights[a] += s * (h[j] - h[i])),
						(heights[b] += s * (h[i] - h[j]))
					);
					if (
						tryChange(
							() => swap(1),
							() => swap(-1)
						)
					) {
						[assign[i], assign[j]] = [b, a];
						improved = true;
					}
				}
			}
		}

		const out = Array.from({ length: count }, () => []);
		items.forEach((work, index) => {
			const col = assign[index];
			out[col].push({ work, index, delay: Math.min(out[col].length * 90 + col * 30, 600) });
		});
		return out;
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

<section
	id="work"
	class="relative scroll-mt-[calc(5rem_+_env(safe-area-inset-top))] px-6 md:px-10 lg:px-16 pt-24 md:pt-36 pb-10 md:pb-12"
>
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
				class="tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-bone"
				use:reveal={{ delay: 100 }}
			>
				{$_('work.titleA')}
				<span class="text-brass">{$_('work.titleB')}</span>
			</h2>
			<p
				class="text-xs uppercase tracking-[0.25em] text-bone-faint pb-2"
				use:reveal={{ delay: 200 }}
			>
				{productionCount}
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
	     staggered rise-in (row by row), echoing the scroll-reveal language. -->
	{#key activeFilter}
		{#if mounted}
			<div
				class="grid gap-x-5 -mb-5"
				style="grid-template-columns: repeat({cols}, minmax(0, 1fr));"
			>
				{#each columns as column}
					<div>
						{#each column as { work, index, delay } (work.src)}
							<WorkItem
								{work}
								{index}
								flyDelay={delay}
								animate={!hasFiltered}
								on:select={() => openLightbox(index)}
							/>
						{/each}
					</div>
				{/each}
			</div>
		{:else}
			<div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 -mb-5">
				{#each filtered as work, index (work.src)}
					<WorkItem {work} {index} animate={!hasFiltered} on:select={() => openLightbox(index)} />
				{/each}
			</div>
		{/if}
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
