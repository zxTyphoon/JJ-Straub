<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { _ } from 'svelte-i18n';

	export let item;
	export let currentIndex;
	export let total;

	const dispatch = createEventDispatcher();

	let touchStartX = null;
	let dialogEl;

	// Move focus into the dialog on open, back to the trigger on close
	onMount(() => {
		const trigger = document.activeElement;
		dialogEl?.focus();
		return () => {
			if (trigger instanceof HTMLElement) trigger.focus();
		};
	});

	function handleBackdropClick(event) {
		if (event.target === event.currentTarget) {
			dispatch('close');
		}
	}

	function handleBackdropKeydown(event) {
		if ((event.key === 'Enter' || event.key === ' ') && event.target === event.currentTarget) {
			dispatch('close');
		}
	}

	function handleTouchStart(event) {
		touchStartX = event.touches[0].clientX;
	}

	function handleTouchEnd(event) {
		if (touchStartX === null) return;
		const deltaX = event.changedTouches[0].clientX - touchStartX;
		touchStartX = null;
		if (Math.abs(deltaX) < 50) return;
		if (deltaX < 0) {
			dispatch('next');
		} else {
			dispatch('prev');
		}
	}
</script>

<div
	bind:this={dialogEl}
	class="fixed inset-0 z-50 flex flex-col bg-night-950/[0.97] backdrop-blur-lg"
	transition:fade={{ duration: 250 }}
	on:click={handleBackdropClick}
	on:keydown={handleBackdropKeydown}
	on:touchstart={handleTouchStart}
	on:touchend={handleTouchEnd}
	role="dialog"
	aria-modal="true"
	aria-label={item.title}
	tabindex="0"
>
	<!-- Top bar -->
	<div class="relative z-10 flex items-center justify-between px-6 md:px-10 py-5">
		<span class="text-xs tracking-[0.25em] text-bone-muted">
			<span class="text-bone">{String(currentIndex + 1).padStart(2, '0')}</span>
			<span class="text-bone-faint mx-1">/</span>
			<span>{String(total).padStart(2, '0')}</span>
		</span>
		<button
			class="group flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-bone-muted hover:text-bone transition-colors duration-300"
			on:click={() => dispatch('close')}
			aria-label={$_('lightbox.close')}
		>
			{$_('lightbox.close')}
			<span
				class="w-9 h-9 border border-white/15 group-hover:border-brass flex items-center justify-center transition-colors duration-300"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</span>
		</button>
	</div>

	<!-- Media -->
	{#key item.src}
		<!-- pointer-events-none lets clicks beside the media fall through to the backdrop -->
		<div
			class="flex-1 min-h-0 flex items-center justify-center px-4 md:px-24 pointer-events-none"
			transition:scale={{ duration: 300, start: 0.97 }}
		>
			{#if item.video}
				<!-- svelte-ignore a11y_media_has_caption -->
				<video
					class="max-w-full max-h-full border border-white/10 pointer-events-auto"
					src={item.video}
					controls
					autoplay
					playsinline
					disablepictureinpicture
					preload="metadata"
					controlslist="nodownload"
				></video>
			{:else}
				<img
					class="max-w-full max-h-full object-contain border border-white/10 pointer-events-auto"
					src={item.src}
					alt={item.alt}
					on:contextmenu|preventDefault
					draggable="false"
				/>
			{/if}
		</div>
	{/key}

	<!-- Caption + navigation -->
	<div class="relative z-10 flex items-center justify-between gap-6 px-6 md:px-10 py-6">
		<button
			class="group w-11 h-11 shrink-0 border border-white/15 hover:border-brass flex items-center justify-center transition-colors duration-300"
			on:click|stopPropagation={() => dispatch('prev')}
			aria-label={$_('lightbox.prev')}
		>
			<svg
				class="w-4 h-4 text-bone group-hover:-translate-x-0.5 transition-transform duration-300"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<div class="text-center min-w-0">
			<p class="font-display italic text-xl md:text-3xl text-bone leading-tight truncate">
				{item.title}
			</p>
			{#if item.role}
				<p class="mt-1.5 text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-brass-light">
					{item.role}
				</p>
			{/if}
		</div>

		<button
			class="group w-11 h-11 shrink-0 border border-white/15 hover:border-brass flex items-center justify-center transition-colors duration-300"
			on:click|stopPropagation={() => dispatch('next')}
			aria-label={$_('lightbox.next')}
		>
			<svg
				class="w-4 h-4 text-bone group-hover:translate-x-0.5 transition-transform duration-300"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
			</svg>
		</button>
	</div>
</div>
