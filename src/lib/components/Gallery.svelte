<script>
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import GalleryItem from './GalleryItem.svelte';
	import Lightbox from './Lightbox.svelte';

	export let images = [];

	let selectedIndex = null;
	let mounted = false;
	let visibleItems = [];

	$: selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

	onMount(() => {
		mounted = true;
		const timeouts = [];
		// Stagger the appearance of gallery items
		images.forEach((_, index) => {
			const id = setTimeout(() => {
				if (!mounted) return;
				visibleItems = [...visibleItems, index];
			}, index * 50);
			timeouts.push(id);
		});

		return () => {
			mounted = false;
			timeouts.forEach((id) => clearTimeout(id));
		};
	});

	function openLightbox(index) {
		selectedIndex = index;
		document.body.style.overflow = 'hidden';
	}

	function closeLightbox() {
		selectedIndex = null;
		document.body.style.overflow = '';
	}

	function nextImage() {
		if (selectedIndex < images.length - 1) {
			selectedIndex++;
		} else {
			selectedIndex = 0;
		}
	}

	function prevImage() {
		if (selectedIndex > 0) {
			selectedIndex--;
		} else {
			selectedIndex = images.length - 1;
		}
	}

	function handleKeydown(event) {
		if (selectedIndex === null) return;
		
		if (event.key === 'Escape') closeLightbox();
		if (event.key === 'ArrowRight') nextImage();
		if (event.key === 'ArrowLeft') prevImage();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="relative bg-surface-900 py-16 md:py-24">
	<!-- Section header -->
	<div class="px-6 md:px-12 lg:px-20 mb-12">
		<div class="flex items-center gap-4 mb-4">
			<div class="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent"></div>
			<span class="text-xs uppercase tracking-[0.3em] text-primary-400 font-medium">{$_('portfolio')}</span>
			<div class="h-px flex-1 bg-gradient-to-l from-primary-500/50 to-transparent"></div>
		</div>
		<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
			{$_('featuredWork')}
		</h2>
	</div>

	<!-- Masonry Grid -->
	<div class="px-4 md:px-8 lg:px-12">
		<div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
			{#each images as image, index}
				<GalleryItem
					{image}
					{index}
					isVisible={visibleItems.includes(index)}
					on:click={() => openLightbox(index)}
				/>
			{/each}
		</div>
	</div>

	<!-- Subtle gradient at bottom -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none"></div>
</section>

{#if selectedImage}
	<Lightbox
		image={selectedImage}
		currentIndex={selectedIndex}
		totalImages={images.length}
		on:close={closeLightbox}
		on:next={nextImage}
		on:prev={prevImage}
	/>
{/if}
