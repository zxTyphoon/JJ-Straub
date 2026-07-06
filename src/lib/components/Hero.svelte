<script>
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Marquee from './Marquee.svelte';

	const productions = [
		'Kingdom Come: Deliverance 2',
		'The Wald',
		'Rapunzels Fluch 2',
		'Cutting Surface',
		'From Russia with Love',
		'eBay',
		'Sennheiser',
		'LA Kings',
		'100 Stories',
		'Coinstar'
	];

	let mounted = $state(false);
	let scrollY = $state(0);

	onMount(() => {
		requestAnimationFrame(() => (mounted = true));
		const onScroll = () => (scrollY = window.scrollY);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<section class="relative flex min-h-svh flex-col justify-end overflow-hidden">
	<!-- Headshot, B&W, with gentle parallax -->
	<div class="absolute inset-0 z-0">
		<img
			src="/JJStraub_Headshot.webp"
			alt="JJ Straub"
			fetchpriority="high"
			class="absolute right-0 top-0 h-full w-full object-cover object-[70%_15%] opacity-90 grayscale contrast-[1.05] transition-transform duration-700 md:w-[68%] md:object-[center_18%] lg:w-[58%]"
			style="transform: translate3d(0, {scrollY * 0.18}px, 0) scale({mounted
				? 1.02
				: 1.12}); transition: transform 1.6s cubic-bezier(0.16,1,0.3,1)"
			oncontextmenu={(e) => e.preventDefault()}
			draggable="false"
		/>
		<!-- Cinematic legibility gradients -->
		<div class="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-ink-900/40"></div>
		<div
			class="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/55 to-transparent md:via-ink-900/30"
		></div>
		<!-- Subtle accent wash -->
		<div
			class="absolute inset-0 mix-blend-soft-light"
			style="background: radial-gradient(80% 60% at 20% 80%, rgb(var(--accent) / 0.18), transparent 70%)"
		></div>
	</div>

	<!-- Letterbox bars -->
	<div
		class="pointer-events-none absolute inset-x-0 top-0 z-10 h-[7vh] bg-gradient-to-b from-ink-950/80 to-transparent"
	></div>

	<!-- Content -->
	<div class="relative z-20 mx-auto w-full max-w-container px-5 pb-10 md:px-10 lg:px-16 lg:pb-16">
		<div
			class="max-w-3xl transition-all duration-1000 ease-out"
			style="opacity: {mounted ? 1 : 0}; transform: translateY({mounted ? 0 : 24}px)"
		>
			<p class="kicker mb-6">
				<span class="h-px w-10 bg-accent"></span>
				{$_('actor')} · {$_('characterWork')}
			</p>

			<h1 class="font-display font-light leading-[0.86] text-bone">
				<span
					class="block text-[clamp(3rem,11vw,9rem)] transition-all duration-1000 ease-out"
					style="font-variation-settings:'opsz' 144; opacity: {mounted
						? 1
						: 0}; transform: translateY({mounted ? 0 : 30}px); transition-delay:120ms"
				>
					Jürgen J.
				</span>
				<span
					class="block text-[clamp(3.6rem,14vw,11.5rem)] font-normal italic text-accent transition-all duration-1000 ease-out"
					style="font-variation-settings:'opsz' 144; opacity: {mounted
						? 1
						: 0}; transform: translateY({mounted ? 0 : 30}px); transition-delay:260ms"
				>
					Straub
				</span>
			</h1>

			<p
				class="mt-7 max-w-xl text-pretty text-base leading-relaxed text-bone-muted md:text-lg transition-all duration-1000 ease-out"
				style="opacity: {mounted ? 1 : 0}; transform: translateY({mounted
					? 0
					: 20}px); transition-delay:420ms"
			>
				{$_('heroTagline')}
			</p>

			<div
				class="mt-8 flex flex-wrap items-center gap-4 transition-all duration-1000 ease-out"
				style="opacity: {mounted ? 1 : 0}; transition-delay:560ms"
			>
				<a
					href="#work"
					class="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-accent-soft hover:shadow-glow"
				>
					{$_('viewWork')}
					<svg
						class="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
					>
						<path
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 5v14M5 12l7 7 7-7"
						/>
					</svg>
				</a>
				<a
					href="#reel"
					class="inline-flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3 text-sm font-medium text-bone transition-colors duration-300 hover:border-accent hover:text-accent"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"
						><path d="M8 5v14l11-7z" /></svg
					>
					{$_('watchReel')}
				</a>
				<span class="hidden items-center gap-2 text-sm text-bone-dim sm:inline-flex">
					<svg class="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor"
						><path stroke-width="1.6" d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" /><circle
							cx="12"
							cy="10"
							r="2.4"
							stroke-width="1.6"
						/></svg
					>
					Berlin · Los Angeles
				</span>
			</div>
		</div>
	</div>

	<!-- Production marquee -->
	<div
		class="relative z-20 border-y border-bone/10 bg-ink-950/40 py-5 backdrop-blur-sm transition-opacity duration-1000"
		style="opacity: {mounted ? 1 : 0}; transition-delay:700ms"
	>
		<Marquee items={productions} duration={48} />
	</div>
</section>
