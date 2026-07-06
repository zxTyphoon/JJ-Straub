<script>
	import { fade, scale } from 'svelte/transition';
	import { untrack } from 'svelte';

	// Self-contained lightbox. Navigates within `items` starting at `start`.
	// A fresh instance is mounted on each open, so `start` is only the initial index.
	let { items = [], start = 0, onClose } = $props();

	let i = $state(untrack(() => start));
	let dialog = $state(null);

	const current = $derived(items[i]);

	function next() {
		i = (i + 1) % items.length;
	}
	function prev() {
		i = (i - 1 + items.length) % items.length;
	}

	function onKeydown(e) {
		if (e.key === 'Escape') onClose?.();
		else if (e.key === 'ArrowRight') next();
		else if (e.key === 'ArrowLeft') prev();
	}

	// Lock page scroll while open, focus the dialog for keyboard nav.
	$effect(() => {
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		dialog?.focus();
		return () => {
			document.body.style.overflow = prevOverflow;
		};
	});
</script>

<svelte:window onkeydown={onKeydown} />

<div
	bind:this={dialog}
	class="fixed inset-0 z-[70] flex items-center justify-center p-4"
	transition:fade={{ duration: 200 }}
	role="dialog"
	aria-modal="true"
	aria-label="Media viewer"
	tabindex="-1"
>
	<!-- Backdrop: click to close (keyboard users use Esc or the close button) -->
	<button
		class="absolute inset-0 h-full w-full cursor-default bg-ink-950/95 backdrop-blur-xl"
		onclick={() => onClose?.()}
		aria-label="Close viewer"
		tabindex="-1"
	></button>

	<!-- Counter -->
	<div
		class="absolute left-4 top-4 z-10 rounded-full border border-bone/10 bg-ink-900/60 px-4 py-1.5 text-sm backdrop-blur md:left-8 md:top-8"
	>
		<span class="text-bone">{String(i + 1).padStart(2, '0')}</span>
		<span class="mx-1.5 text-bone-dim">/</span>
		<span class="text-bone-muted">{String(items.length).padStart(2, '0')}</span>
	</div>

	<!-- Close -->
	<button
		onclick={() => onClose?.()}
		class="group absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-bone/10 bg-ink-900/60 backdrop-blur transition-colors hover:border-accent md:right-8 md:top-8"
		aria-label="Close"
	>
		<svg
			class="h-5 w-5 text-bone transition-transform duration-300 group-hover:rotate-90"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			><path stroke-width="1.8" stroke-linecap="round" d="M6 6l12 12M18 6L6 18" /></svg
		>
	</button>

	{#if items.length > 1}
		<button
			onclick={(e) => {
				e.stopPropagation();
				prev();
			}}
			class="group absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bone/10 bg-ink-900/60 backdrop-blur transition-colors hover:border-accent md:left-8 md:h-14 md:w-14"
			aria-label="Previous"
		>
			<svg
				class="h-6 w-6 text-bone transition-transform duration-300 group-hover:-translate-x-0.5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				><path
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15 19l-7-7 7-7"
				/></svg
			>
		</button>
		<button
			onclick={(e) => {
				e.stopPropagation();
				next();
			}}
			class="group absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bone/10 bg-ink-900/60 backdrop-blur transition-colors hover:border-accent md:right-8 md:h-14 md:w-14"
			aria-label="Next"
		>
			<svg
				class="h-6 w-6 text-bone transition-transform duration-300 group-hover:translate-x-0.5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				><path
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 5l7 7-7 7"
				/></svg
			>
		</button>
	{/if}

	<!-- Media -->
	{#key i}
		<figure
			class="relative z-[5] flex max-h-[86vh] max-w-[92vw] flex-col items-center md:max-w-[80vw]"
			transition:scale={{ duration: 260, start: 0.96 }}
		>
			{#if current.video}
				<!-- svelte-ignore a11y_media_has_caption -->
				<video
					class="max-h-[74vh] max-w-full rounded-xl shadow-cinema"
					src={current.video}
					poster={current.src}
					controls
					autoplay
					playsinline
					preload="metadata"
					controlslist="nodownload"
					onended={() => onClose?.()}
				></video>
			{:else}
				<img
					class="max-h-[78vh] max-w-full rounded-xl object-contain shadow-cinema"
					src={current.src}
					alt={current.alt}
					oncontextmenu={(e) => e.preventDefault()}
					draggable="false"
				/>
			{/if}
			{#if current.caption}
				<figcaption
					class="mt-5 max-w-xl text-center font-display text-lg text-bone md:text-xl"
					style="font-variation-settings:'opsz' 60"
				>
					{current.caption}
				</figcaption>
			{/if}
		</figure>
	{/key}
</div>
