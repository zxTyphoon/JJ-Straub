<script>
	// Seamless infinite marquee. Renders the items twice and animates -50% so the
	// loop is continuous. Pauses on hover. Honours reduced-motion (CSS quiets it).
	let { items = [], duration = 42, reverse = false, separator = '✦' } = $props();
</script>

<div class="marquee-mask group relative w-full overflow-hidden" aria-hidden="true">
	<div
		class="flex w-max {reverse
			? 'animate-marquee-reverse'
			: 'animate-marquee'} group-hover:[animation-play-state:paused]"
		style="--marquee-duration: {duration}s"
	>
		{#each [0, 1] as copy (copy)}
			<ul class="flex shrink-0 items-center">
				{#each items as item}
					<li class="flex items-center whitespace-nowrap">
						<span
							class="font-display text-2xl font-light tracking-tight text-bone-muted/70 sm:text-3xl md:text-4xl"
							style="font-variation-settings: 'opsz' 120"
						>
							{item}
						</span>
						<span class="mx-6 text-base text-accent/70 sm:mx-8">{separator}</span>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>
