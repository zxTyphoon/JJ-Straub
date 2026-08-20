<script>
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { reveal } from '$lib/actions/reveal.js';

	export let work;
	export let index = 0;
	// Row-major stagger for the filter-switch cascade, computed by Work.svelte
	export let flyDelay = 0;
	// false after the user starts filtering: items must appear in place immediately
	// instead of re-running the staggered scroll reveal
	export let animate = true;

	const dispatch = createEventDispatcher();

	let isLoaded = false;
</script>

<!-- The rise-in plays when the grid is re-keyed on a filter switch (intros are
     skipped on initial mount, where the scroll reveal takes over). Transform +
     opacity only: reserved image dimensions keep the masonry layout stable. -->
<div
	in:fly|global={{ y: 24, duration: 450, delay: flyDelay, easing: quintOut }}
	use:reveal={{ delay: (index % 4) * 80, enabled: animate }}
	class="mb-5"
>
	<button
		class="group relative w-full block break-inside-avoid text-left border border-white/5 hover:border-brass/40 transition-colors duration-500 overflow-hidden bg-night-850"
		on:click={() => dispatch('select')}
		aria-label={work.alt}
	>
		<figure class="relative overflow-hidden">
			<!-- Loading placeholder -->
			{#if !isLoaded}
				<div class="absolute inset-0 bg-night-800 animate-pulse"></div>
			{/if}

			<img
				class="w-full h-auto block grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out-expo"
				src={work.src}
				alt={work.alt}
				width={work.width}
				height={work.height}
				loading="lazy"
				on:load={() => (isLoaded = true)}
				on:contextmenu|preventDefault
				draggable="false"
			/>

			<!-- Hover gradient -->
			<div
				class="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			></div>

			<!-- Index number -->
			<span
				class="absolute top-3 left-3 text-[0.6rem] tracking-[0.2em] text-bone/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			>
				{String(index + 1).padStart(2, '0')}
			</span>

			<!-- Clip badge -->
			{#if work.video}
				<span
					class="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-night-950/70 backdrop-blur-sm border border-white/10 text-[0.6rem] uppercase tracking-[0.2em] text-bone"
				>
					<svg class="w-2 h-2 fill-brass" viewBox="0 0 24 24">
						<path d="M8 5v14l11-7z" />
					</svg>
					Clip
				</span>
			{/if}

			<!-- Caption -->
			<figcaption
				class="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out-expo"
			>
				<p class="font-display text-lg md:text-xl text-bone leading-tight">{work.title}</p>
				{#if work.role}
					<p class="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-brass-light">
						{work.role}
					</p>
				{/if}
			</figcaption>
		</figure>
	</button>
</div>
