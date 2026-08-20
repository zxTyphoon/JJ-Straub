<script>
	let { image, onOpen } = $props();
	let loaded = $state(false);
</script>

<button
	onclick={onOpen}
	class="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl bg-ink-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 sm:mb-4"
	aria-label={image.caption || image.alt}
>
	<figure class="relative overflow-hidden">
		{#if !loaded}
			<div class="absolute inset-0 animate-pulse bg-ink-700/60"></div>
		{/if}

		<img
			src={image.src}
			alt={image.alt}
			loading="lazy"
			decoding="async"
			onload={() => (loaded = true)}
			class="block w-full transition-all duration-700 ease-out group-hover:scale-[1.04] grayscale-[0.55] group-hover:grayscale-0"
			oncontextmenu={(e) => e.preventDefault()}
			draggable="false"
		/>

		<!-- Hover overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
		></div>

		<!-- Play badge for videos -->
		{#if image.video}
			<span
				class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-bone/30 bg-ink-950/50 backdrop-blur-sm transition-colors duration-500 group-hover:border-accent group-hover:bg-accent"
			>
				<svg
					class="ml-0.5 h-4 w-4 text-bone transition-colors duration-500 group-hover:text-ink-950"
					viewBox="0 0 24 24"
					fill="currentColor"><path d="M8 5v14l11-7z" /></svg
				>
			</span>
		{/if}

		<!-- Caption -->
		{#if image.caption}
			<figcaption
				class="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
			>
				<p
					class="font-display text-base leading-tight text-bone"
					style="font-variation-settings:'opsz' 40"
				>
					{image.caption}
				</p>
			</figcaption>
		{/if}

		<!-- Corner accent -->
		<span
			class="absolute left-3 top-3 h-6 w-6 origin-top-left scale-0 rounded-tl border-l-2 border-t-2 border-accent opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
		></span>
	</figure>
</button>
