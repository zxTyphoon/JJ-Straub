<script>
	import { _ } from 'svelte-i18n';
	import { reels } from '$lib/data/portfolio.js';
	import { reveal } from '$lib/actions/reveal.js';
	import Lightbox from './Lightbox.svelte';

	let openIndex = $state(null);

	function open(i) {
		openIndex = i;
	}
</script>

<section id="reel" class="relative scroll-mt-24 border-t border-bone/5 py-24 md:py-32">
	<div class="mx-auto max-w-container px-5 md:px-10 lg:px-16">
		<!-- Header -->
		<div
			class="reveal mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
			use:reveal
		>
			<div>
				<p class="kicker mb-4"><span class="h-px w-10 bg-accent"></span>{$_('reelKicker')}</p>
				<h2
					class="font-display text-4xl font-light text-bone md:text-6xl"
					style="font-variation-settings:'opsz' 144"
				>
					{$_('reelTitle')}
				</h2>
			</div>
			<p class="max-w-sm text-pretty text-sm text-bone-muted md:text-right">{$_('reelSubtitle')}</p>
		</div>

		<!-- Bento grid of reels -->
		<div class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
			{#each reels as reel, i}
				<button
					onclick={() => open(i)}
					use:reveal={{ delay: i * 60 }}
					class="reveal group relative overflow-hidden rounded-2xl bg-ink-800 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent {i ===
					0
						? 'col-span-2 aspect-[16/10] lg:row-span-2 lg:aspect-auto'
						: 'aspect-[4/3]'}"
					aria-label={reel.caption}
				>
					<img
						src={reel.src}
						alt={reel.alt}
						loading="lazy"
						decoding="async"
						class="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
						oncontextmenu={(e) => e.preventDefault()}
						draggable="false"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent"
					></div>

					<!-- Play -->
					<span
						class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
					>
						<span
							class="absolute h-16 w-16 rounded-full bg-accent/30 blur-xl transition-all duration-500 group-hover:bg-accent/50"
						></span>
						<span
							class="relative flex h-14 w-14 items-center justify-center rounded-full border border-bone/40 bg-ink-950/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent"
						>
							<svg
								class="ml-0.5 h-5 w-5 text-bone transition-colors duration-500 group-hover:text-ink-950"
								viewBox="0 0 24 24"
								fill="currentColor"><path d="M8 5v14l11-7z" /></svg
							>
						</span>
					</span>

					<!-- Caption -->
					<div class="absolute inset-x-0 bottom-0 p-4 md:p-5">
						<span
							class="mb-2 inline-block rounded-full border border-bone/20 bg-ink-950/40 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.18em] text-accent backdrop-blur-sm"
						>
							{$_('filter' + reel.category.charAt(0).toUpperCase() + reel.category.slice(1))}
						</span>
						<p
							class="font-display text-lg leading-tight text-bone md:text-xl"
							style="font-variation-settings:'opsz' 60"
						>
							{reel.caption}
						</p>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

{#if openIndex !== null}
	<Lightbox items={reels} start={openIndex} onClose={() => (openIndex = null)} />
{/if}
