<script>
	import { createEventDispatcher } from 'svelte';
	import Playbutton from '$lib/img/play-button.svg';

	export let image;
	export let isVisible = false;

	const dispatch = createEventDispatcher();

	let isLoaded = false;
	let isHovered = false;

	function handleLoad() {
		isLoaded = true;
	}

	function handleClick() {
		dispatch('click');
	}
</script>

<button
	class="relative w-full block break-inside-avoid cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 rounded-xl overflow-hidden transition-all duration-700 ease-out"
	class:opacity-0={!isVisible}
	class:translate-y-8={!isVisible}
	class:opacity-100={isVisible}
	class:translate-y-0={isVisible}
	on:click={handleClick}
	on:mouseenter={() => isHovered = true}
	on:mouseleave={() => isHovered = false}
	aria-label={image.alt}
>
	<figure class="relative overflow-hidden rounded-xl bg-surface-800">
		<!-- Shimmer loading placeholder -->
		{#if !isLoaded}
			<div class="absolute inset-0 bg-gradient-to-r from-surface-800 via-surface-700 to-surface-800 animate-shimmer"></div>
		{/if}

		<!-- Image -->
		<img
			class="w-full block transition-all duration-700 ease-out"
			class:scale-110={isHovered}
			class:filter={!isHovered}
			class:grayscale-[30%]={!isHovered}
			src={image.src}
			alt={image.alt}
			loading="lazy"
			on:load={handleLoad}
			on:contextmenu|preventDefault
			draggable="false"
		/>

		<!-- Overlay gradients -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"
			class:opacity-100={isHovered}
			class:opacity-0={!isHovered}
		></div>

		<!-- Video play indicator -->
		{#if image.video}
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
				class:scale-100={!isHovered}
				class:scale-110={isHovered}
				class:opacity-80={!isHovered}
				class:opacity-100={isHovered}
			>
				<div class="relative">
					<div class="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 animate-pulse"></div>
					<div class="relative w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
						<svg class="w-6 h-6 md:w-8 md:h-8 text-surface-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
							<path d="M8 5v14l11-7z"/>
						</svg>
					</div>
				</div>
			</div>
		{/if}

		<!-- Caption -->
		{#if image.caption}
			<figcaption
				class="absolute bottom-0 left-0 right-0 p-4 md:p-5 transition-all duration-500 ease-out"
				class:translate-y-0={isHovered}
				class:opacity-100={isHovered}
				class:translate-y-4={!isHovered}
				class:opacity-0={!isHovered}
			>
				<p class="text-white font-medium text-sm md:text-base leading-tight">{image.caption}</p>
			</figcaption>
		{/if}

		<!-- Corner accent -->
		<div
			class="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary-400 rounded-tr-lg transition-all duration-500 origin-top-right"
			class:scale-100={isHovered}
			class:opacity-100={isHovered}
			class:scale-0={!isHovered}
			class:opacity-0={!isHovered}
		></div>
		<div
			class="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-primary-400 rounded-bl-lg transition-all duration-500 origin-bottom-left"
			class:scale-100={isHovered}
			class:opacity-100={isHovered}
			class:scale-0={!isHovered}
			class:opacity-0={!isHovered}
		></div>
	</figure>
</button>
