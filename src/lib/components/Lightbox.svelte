<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	export let image;
	export let currentIndex;
	export let totalImages;

	const dispatch = createEventDispatcher();

	let videoElement;
	let isClosing = false;
	let showContent = false;

	onMount(() => {
		setTimeout(() => showContent = true, 50);
	});

	function close() {
		isClosing = true;
		showContent = false;
		setTimeout(() => dispatch('close'), 200);
	}

	function handleBackdropClick(event) {
		if (event.target === event.currentTarget) {
			close();
		}
	}

	function handleVideoEnded() {
		close();
	}

	function handleKeydown(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleBackdropClick(event);
		}
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- Backdrop -->
<div
	class="fixed inset-0 z-50 flex items-center justify-center"
	transition:fade={{ duration: 200 }}
	on:click={handleBackdropClick}
	on:keydown={handleKeydown}
	role="dialog"
	aria-modal="true"
	aria-label="Image lightbox"
	tabindex="0"
>
	<!-- Background blur -->
	<div class="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>

	<!-- Close button -->
	<button
		class="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
		on:click={close}
		aria-label="Close lightbox"
	>
		<svg class="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
		</svg>
	</button>

	<!-- Navigation arrows -->
	<button
		class="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
		on:click|stopPropagation={() => dispatch('prev')}
		aria-label="Previous image"
	>
		<svg class="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
		</svg>
	</button>

	<button
		class="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
		on:click|stopPropagation={() => dispatch('next')}
		aria-label="Next image"
	>
		<svg class="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
		</svg>
	</button>

	<!-- Counter -->
	<div class="absolute top-4 left-4 md:top-8 md:left-8 z-10">
		<div class="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
			<span class="text-white/80 text-sm font-medium">
				<span class="text-white">{currentIndex + 1}</span>
				<span class="text-white/40 mx-1">/</span>
				<span class="text-white/60">{totalImages}</span>
			</span>
		</div>
	</div>

	<!-- Content container -->
	{#if showContent}
		<div
			class="relative max-w-[92vw] md:max-w-[85vw] max-h-[85vh] flex flex-col items-center justify-center transition-all duration-300"
			in:scale={{ duration: 300, start: 0.95 }}
			in:fade={{ duration: 300 }}
			out:scale={{ duration: 200, start: 1 }}
			out:fade={{ duration: 200 }}
		>
			{#if image.video}
				<!-- Video player -->
				<video
					bind:this={videoElement}
					class="max-w-full max-h-[75vh] rounded-2xl shadow-2xl"
					src={image.video}
					controls
					autoplay
					playsinline
					disablepictureinpicture
					preload="metadata"
					controlslist="nodownload"
					on:ended={handleVideoEnded}
				>
					<track kind="captions" src="" srclang="en" label="No Captions" />
				</video>
			{:else}
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<!-- Image -->
				<img
					class="max-w-full max-h-[75vh] rounded-2xl shadow-2xl object-contain"
					src={image.src}
					alt={image.alt}
					on:contextmenu|preventDefault
					draggable="false"
				/>
			{/if}

			<!-- Caption -->
			{#if image.caption}
				<div class="mt-6 px-4 text-center">
					<p class="text-white/90 text-lg md:text-xl font-medium">{image.caption}</p>
				</div>
			{/if}
		</div>
	{/if}

	<!-- Progress bar -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
		{#each Array(totalImages) as _, i}
			<button
				class="h-1 rounded-full transition-all duration-300 {i === currentIndex ? 'bg-primary-400 w-12 md:w-16' : 'w-8 md:w-12 bg-white/30 hover:bg-white/50'}"
				on:click|stopPropagation={() => dispatch('goTo', { index: i })}
				aria-label="Go to image {i + 1}"
				style="display: {Math.abs(i - currentIndex) < 5 ? 'block' : 'none'}"
			></button>
		{/each}
	</div>
</div>
