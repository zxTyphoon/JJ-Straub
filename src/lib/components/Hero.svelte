<script>
	import { _ } from 'svelte-i18n';

	$: disciplines = [
		$_('marquee.film'),
		$_('marquee.tv'),
		$_('marquee.commercial'),
		$_('marquee.mocap'),
		$_('marquee.theatre')
	];
</script>

<section class="relative min-h-[100svh] flex flex-col overflow-hidden">
	<!-- Headshot, blended into the canvas -->
	<div class="absolute inset-0">
		<div class="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[55%]">
			<img
				src="/JJStraub_Headshot.webp"
				alt="JJ Straub"
				class="w-full h-full object-cover object-top opacity-90 grayscale-[15%] contrast-105 animate-ken-burns"
				fetchpriority="high"
				on:contextmenu|preventDefault
				draggable="false"
			/>
		</div>
		<!-- Blend gradients -->
		<div
			class="absolute inset-0 bg-gradient-to-r from-night-900 via-night-900/70 to-night-900/10 md:via-night-900/40 md:to-transparent"
		></div>
		<div
			class="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/30 to-night-900/60"
		></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 flex-1 flex items-end px-6 md:px-10 lg:px-16 pt-28 pb-12 md:pb-16">
		<div class="w-full max-w-6xl">
			<!-- Eyebrow -->
			<div
				class="flex items-center gap-4 mb-6 md:mb-8"
				style="animation: riseIn 0.9s cubic-bezier(0.16,1,0.3,1) 150ms both"
			>
				<span class="h-px w-10 md:w-16 bg-brass/60"></span>
				<p class="text-[0.65rem] md:text-xs uppercase tracking-[0.3em] text-bone-muted">
					{$_('actor')} — Berlin · Los Angeles
				</p>
			</div>

			<!-- Name -->
			<h1 class="font-display leading-[0.88] mb-8 md:mb-10">
				<span
					class="block text-[clamp(4.5rem,16vw,12rem)] text-bone"
					style="animation: riseIn 1s cubic-bezier(0.16,1,0.3,1) 300ms both"
				>
					JJ
				</span>
				<span
					class="block text-[clamp(4.5rem,16vw,12rem)] italic text-brass"
					style="animation: riseIn 1s cubic-bezier(0.16,1,0.3,1) 450ms both"
				>
					Straub
				</span>
			</h1>

			<!-- Bio + CTAs -->
			<div
				class="max-w-md lg:max-w-lg"
				style="animation: riseIn 1s cubic-bezier(0.16,1,0.3,1) 650ms both"
			>
				<p class="text-sm md:text-base text-bone-muted leading-relaxed mb-8">
					{$_('about')}
				</p>

				<div class="flex flex-wrap items-center gap-4 md:gap-6">
					<a
						href="#work"
						class="group inline-flex items-center gap-3 px-6 py-3 border border-bone/25 text-xs uppercase tracking-[0.25em] text-bone hover:border-brass hover:text-brass transition-colors duration-300"
					>
						{$_('hero.viewWork')}
						<span class="group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
					</a>
					<a
						href="#contact"
						class="group relative text-xs uppercase tracking-[0.25em] text-bone-muted hover:text-bone transition-colors duration-300"
					>
						{$_('hero.getInTouch')}
						<span
							class="absolute -bottom-1.5 left-0 w-full h-px bg-bone-faint group-hover:bg-brass transition-colors duration-300"
						></span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll cue -->
	<div
		class="hidden md:flex absolute bottom-24 right-10 lg:right-16 z-10 flex-col items-center gap-3"
		style="animation: fadeIn 1s ease-out 1200ms both"
	>
		<span
			class="text-[0.6rem] uppercase tracking-[0.3em] text-bone-faint"
			style="writing-mode: vertical-rl"
		>
			{$_('scroll')}
		</span>
		<span class="scroll-line w-px h-14 bg-bone-faint/60"></span>
	</div>

	<!-- Discipline marquee -->
	<div class="relative z-10 border-t border-white/5 py-4 md:py-5 overflow-hidden select-none">
		<div class="flex w-max animate-marquee whitespace-nowrap">
			{#each [0, 1] as copy}
				<div class="flex items-center" aria-hidden={copy === 1}>
					{#each disciplines as discipline}
						<span class="ghost font-display italic text-3xl md:text-5xl px-6 md:px-10">
							{discipline}
						</span>
						<span class="w-1.5 h-1.5 rounded-full bg-brass/50 shrink-0"></span>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.ghost {
		color: transparent;
		-webkit-text-stroke: 1px rgba(233, 228, 218, 0.25);
	}

	.scroll-line {
		transform-origin: top;
		animation: scrollPulse 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
	}

	@keyframes scrollPulse {
		0% {
			transform: scaleY(0);
		}
		50% {
			transform: scaleY(1);
		}
		100% {
			transform: scaleY(0);
			transform-origin: bottom;
		}
	}
</style>
