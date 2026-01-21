<script>
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	import Instagram from '$lib/img/Instagram.svg';
	import Facebook from '$lib/img/Facebook.svg';
	import Filmmakers from '$lib/img/Filmmakers.svg';
	import IMDB from '$lib/img/imdb.svg';
	import XING from '$lib/img/XING.svg';
	import YouTube from '$lib/img/YouTube.svg';
	import X from '$lib/img/X.svg';
	import LinkedIn from '$lib/img/linkedin.svg';

	let scrolled = false;
	let mobileMenuOpen = false;

	const socialLinks = [
		{ href: 'https://www.instagram.com/jjstraub1', icon: Instagram, label: 'Instagram' },
		{ href: 'https://www.imdb.com/name/nm0833707/', icon: IMDB, label: 'IMDB' },
		{ href: 'https://www.youtube.com/user/JJatUtube', icon: YouTube, label: 'YouTube' },
		{ href: 'https://www.linkedin.com/in/jj-straub/', icon: LinkedIn, label: 'LinkedIn' },
		{ href: 'https://www.facebook.com/JJStraub/', icon: Facebook, label: 'Facebook' },
		{ href: 'https://x.com/JJStraub4real', icon: X, label: 'X' },
		{ href: 'https://www.xing.com/profile/Juergen_Straub23', icon: XING, label: '' },
		{
			href: 'https://www.filmmakers.eu/de/actors/j-j-straub',
			icon: Filmmakers,
			label: ''
		}
	];

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-40 transition-all duration-500 {scrolled
		? 'bg-surface-900/95 backdrop-blur-xl shadow-2xl py-3'
		: 'py-4'}"
>
	<div class="px-6 md:px-12 lg:px-20">
		<nav class="flex items-center justify-between">
			<!-- Logo -->
			<button on:click={scrollToTop} class="relative group">
				<span
					class="text-2xl md:text-3xl font-bold tracking-tight text-white transition-all duration-300"
				>
					JJ
					<span
						class="text-primary-400 transition-all duration-300"
						class:text-primary-300={scrolled}
					>
						Straub
					</span>
				</span>
				<span
					class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"
				></span>
			</button>

			<!-- Desktop Social Links -->
			<div class="hidden lg:flex items-center gap-2">
				{#each socialLinks as { href, icon, label }}
					<a
						{href}
						target="_blank"
						rel="noreferrer"
						class="p-2 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-110"
						aria-label={label}
					>
						<img class="h-7 w-auto" src={icon} alt={label} />
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10"
				on:click={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<div class="relative w-6 h-5">
					<span
						class="absolute left-0 w-full h-0.5 bg-white rounded transition-all duration-300"
						class:top-0={!mobileMenuOpen}
						class:top-2={mobileMenuOpen}
						class:rotate-45={mobileMenuOpen}
					></span>
					<span
						class="absolute left-0 top-2 w-full h-0.5 bg-white rounded transition-all duration-300"
						class:opacity-100={!mobileMenuOpen}
						class:opacity-0={mobileMenuOpen}
					></span>
					<span
						class="absolute left-0 w-full h-0.5 bg-white rounded transition-all duration-300"
						class:top-4={!mobileMenuOpen}
						class:top-2={mobileMenuOpen}
						class:-rotate-45={mobileMenuOpen}
					></span>
				</div>
			</button>
		</nav>
	</div>
</header>

<!-- Mobile Menu -->
{#if mobileMenuOpen}
	<div class="fixed inset-0 z-50 lg:hidden">
		<!-- Backdrop -->
		<button
			class="absolute inset-0 bg-black/90 backdrop-blur-xl"
			on:click={toggleMobileMenu}
			aria-label="Close menu"
		></button>

		<!-- Menu Content -->
		<div class="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-surface-900 shadow-2xl">
			<!-- Close button -->
			<div class="flex justify-end p-6">
				<button
					class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/10"
					on:click={toggleMobileMenu}
					aria-label="Close menu"
				>
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<!-- Social Links Grid -->
			<div class="px-6">
				<p class="text-xs uppercase tracking-widest text-white/40 mb-4">{$_('connect')}</p>
				<div class="grid grid-cols-2 gap-3">
					{#each socialLinks as { href, icon, label }}
						<a
							{href}
							target="_blank"
							rel="noreferrer"
							class="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
							on:click={toggleMobileMenu}
						>
							<img class="h-6 w-auto" src={icon} alt={label} />
							<span class="text-white/80 text-sm font-medium">{label}</span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Contact Info -->
			<div class="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
				<p class="text-xs uppercase tracking-widest text-white/40 mb-3">Contact</p>
				<a
					href="mailto:jj@jjstraub.com"
					class="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					jj@jjstraub.com
				</a>
			</div>
		</div>
	</div>
{/if}
