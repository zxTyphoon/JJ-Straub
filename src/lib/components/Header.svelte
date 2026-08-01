<script>
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import LanguageToggle from './LanguageToggle.svelte';
	import AccentSwitcher from './AccentSwitcher.svelte';

	import Instagram from '$lib/img/Instagram.svg';
	import IMDB from '$lib/img/imdb.svg';
	import YouTube from '$lib/img/YouTube.svg';
	import LinkedIn from '$lib/img/linkedin.svg';
	import Facebook from '$lib/img/Facebook.svg';
	import X from '$lib/img/X.svg';

	const nav = [
		{ href: '/#about', key: 'navAbout' },
		{ href: '/#reel', key: 'navReel' },
		{ href: '/#work', key: 'navWork' },
		{ href: '/#contact', key: 'navContact' }
	];

	const socials = [
		{ href: 'https://www.imdb.com/name/nm0833707/', icon: IMDB, label: 'IMDb' },
		{ href: 'https://www.instagram.com/jjstraub1', icon: Instagram, label: 'Instagram' },
		{ href: 'https://www.youtube.com/user/JJatUtube', icon: YouTube, label: 'YouTube' },
		{ href: 'https://www.linkedin.com/in/jj-straub/', icon: LinkedIn, label: 'LinkedIn' },
		{ href: 'https://www.facebook.com/JJStraub/', icon: Facebook, label: 'Facebook' },
		{ href: 'https://x.com/JJStraub4real', icon: X, label: 'X' }
	];

	let scrolled = $state(false);
	let menuOpen = $state(false);

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 40);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = menuOpen ? 'hidden' : '';
		}
	});

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<header
	class="fixed inset-x-0 top-0 z-40 transition-all duration-500 {scrolled
		? 'border-b border-bone/5 bg-ink-900/85 py-3 backdrop-blur-xl'
		: 'border-b border-transparent py-5'}"
>
	<div class="mx-auto flex max-w-container items-center justify-between px-5 md:px-10 lg:px-16">
		<!-- Monogram -->
		<button onclick={toTop} class="group flex items-baseline gap-2" aria-label="JJ Straub — home">
			<span
				class="font-display text-2xl font-semibold tracking-tight text-bone"
				style="font-variation-settings:'opsz' 140"
			>
				JJ<span class="text-accent">.</span>Straub
			</span>
		</button>

		<!-- Desktop nav -->
		<nav class="hidden items-center gap-8 lg:flex">
			{#each nav as item}
				<a
					href={item.href}
					class="group relative text-[0.8rem] uppercase tracking-[0.2em] text-bone-muted transition-colors duration-300 hover:text-bone"
				>
					{$_(item.key)}
					<span
						class="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
					></span>
				</a>
			{/each}
		</nav>

		<!-- Right cluster -->
		<div class="flex items-center gap-3">
			<div class="hidden items-center gap-1 xl:flex">
				{#each socials.slice(0, 4) as { href, icon, label }}
					<a
						{href}
						target="_blank"
						rel="noreferrer"
						class="flex h-8 w-8 items-center justify-center rounded-full opacity-70 transition-all duration-300 hover:bg-bone/10 hover:opacity-100"
						aria-label={label}
					>
						<img class="h-[18px] w-[18px]" src={icon} alt={label} />
					</a>
				{/each}
			</div>
			<div class="hidden sm:block"><LanguageToggle /></div>
			<AccentSwitcher />

			<!-- Mobile menu button -->
			<button
				class="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 lg:hidden"
				onclick={() => (menuOpen = true)}
				aria-label="Open menu"
			>
				<svg class="h-5 w-5 text-bone" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path stroke-width="1.6" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
				</svg>
			</button>
		</div>
	</div>
</header>

<!-- Mobile overlay -->
{#if menuOpen}
	<div class="fixed inset-0 z-50 lg:hidden">
		<button
			class="absolute inset-0 h-full w-full bg-ink-950/95 backdrop-blur-xl"
			onclick={() => (menuOpen = false)}
			aria-label="Close menu"
			tabindex="-1"
		></button>

		<div class="relative flex h-full flex-col px-8 py-7">
			<div class="flex items-center justify-between">
				<span class="font-display text-xl text-bone"
					>JJ<span class="text-accent">.</span>Straub</span
				>
				<button
					class="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15"
					onclick={() => (menuOpen = false)}
					aria-label="Close menu"
				>
					<svg class="h-5 w-5 text-bone" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path stroke-width="1.6" stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
					</svg>
				</button>
			</div>

			<nav class="mt-16 flex flex-col gap-7">
				{#each nav as item, i}
					<a
						href={item.href}
						onclick={() => (menuOpen = false)}
						class="font-display text-4xl font-light text-bone transition-colors hover:text-accent"
						style="font-variation-settings:'opsz' 100"
					>
						<span class="mr-4 align-middle text-sm text-bone-dim">0{i + 1}</span>{$_(item.key)}
					</a>
				{/each}
			</nav>

			<div class="mt-auto space-y-6">
				<LanguageToggle />
				<div class="flex flex-wrap gap-2">
					{#each socials as { href, icon, label }}
						<a
							{href}
							target="_blank"
							rel="noreferrer"
							class="flex h-11 w-11 items-center justify-center rounded-full bg-bone/5 transition-colors hover:bg-bone/10"
							aria-label={label}
						>
							<img class="h-5 w-5" src={icon} alt={label} />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
