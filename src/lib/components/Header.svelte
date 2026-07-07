<script>
	import { onMount } from 'svelte';
	import { locale, _ } from 'svelte-i18n';
	import { socials } from '$lib/data/links.js';

	let scrolled = false;
	let menuOpen = false;

	// Root-relative so the links also work from /legal, where the anchors don't exist
	$: navItems = [
		{ href: '/#work', label: $_('nav.work'), index: '01' },
		{ href: '/#about', label: $_('nav.about'), index: '02' },
		{ href: '/#contact', label: $_('nav.contact'), index: '03' }
	];

	$: currentLang = $locale?.startsWith('de') ? 'de' : 'en';

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 40;
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function setLanguage(lang) {
		locale.set(lang);
		if (typeof window !== 'undefined') {
			document.cookie = `locale=${lang}; path=/; max-age=${60 * 60 * 24 * 7}`;
		}
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = menuOpen ? 'hidden' : '';
		}
	}

	function closeMenu() {
		if (menuOpen) toggleMenu();
	}

	function scrollToTop() {
		closeMenu();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-40 transition-all duration-500 {scrolled
		? 'bg-night-900/85 backdrop-blur-md border-b border-white/5'
		: 'border-b border-transparent'}"
>
	<div class="px-6 md:px-10 lg:px-16">
		<nav class="flex items-center justify-between h-16 md:h-20">
			<!-- Wordmark -->
			<button on:click={scrollToTop} class="group" aria-label="JJ Straub — back to top">
				<span class="font-display text-2xl md:text-[1.7rem] text-bone leading-none">
					JJ <em
						class="italic text-brass group-hover:text-brass-light transition-colors duration-300"
						>Straub</em
					>
				</span>
			</button>

			<!-- Desktop nav -->
			<div class="hidden md:flex items-center gap-10">
				{#each navItems as item}
					<a
						href={item.href}
						class="group flex items-baseline gap-2 text-xs uppercase tracking-[0.25em] text-bone-muted hover:text-bone transition-colors duration-300"
					>
						<span class="text-[0.6rem] text-brass/70">{item.index}</span>
						<span class="relative">
							{item.label}
							<span
								class="absolute -bottom-1 left-0 w-0 h-px bg-brass group-hover:w-full transition-all duration-300"
							></span>
						</span>
					</a>
				{/each}
			</div>

			<!-- Language toggle -->
			<div class="hidden md:flex items-center gap-1 text-xs uppercase tracking-[0.2em]">
				<button
					on:click={() => setLanguage('en')}
					class="px-2 py-1 transition-colors duration-300 {currentLang === 'en'
						? 'text-bone underline underline-offset-4 decoration-brass'
						: 'text-bone-faint hover:text-bone-muted'}"
					aria-label="Switch to English"
				>
					EN
				</button>
				<span class="text-bone-faint">/</span>
				<button
					on:click={() => setLanguage('de')}
					class="px-2 py-1 transition-colors duration-300 {currentLang === 'de'
						? 'text-bone underline underline-offset-4 decoration-brass'
						: 'text-bone-faint hover:text-bone-muted'}"
					aria-label="Auf Deutsch umschalten"
				>
					DE
				</button>
			</div>

			<!-- Mobile menu button -->
			<button
				class="md:hidden relative w-10 h-10 flex items-center justify-center"
				on:click={toggleMenu}
				aria-label="Toggle menu"
				aria-expanded={menuOpen}
			>
				<div class="relative w-6 h-4">
					<span
						class="absolute left-0 w-full h-px bg-bone transition-all duration-300 {menuOpen
							? 'top-2 rotate-45'
							: 'top-0'}"
					></span>
					<span
						class="absolute left-0 top-2 w-full h-px bg-bone transition-all duration-300 {menuOpen
							? 'opacity-0'
							: 'opacity-100'}"
					></span>
					<span
						class="absolute left-0 w-full h-px bg-bone transition-all duration-300 {menuOpen
							? 'top-2 -rotate-45'
							: 'top-4'}"
					></span>
				</div>
			</button>
		</nav>
	</div>
</header>

<!-- Mobile menu overlay -->
{#if menuOpen}
	<div class="fixed inset-0 z-30 md:hidden bg-night-950/98 backdrop-blur-xl overflow-y-auto">
		<div class="min-h-full flex flex-col justify-between px-8 pt-28 pb-10">
			<nav class="flex flex-col gap-2">
				{#each navItems as item, i}
					<a
						href={item.href}
						on:click={closeMenu}
						class="group flex items-baseline gap-4 py-3 border-b border-white/5"
						style="animation: riseIn 0.7s cubic-bezier(0.16,1,0.3,1) {i * 90}ms both"
					>
						<span class="text-xs text-brass/70 tracking-widest">{item.index}</span>
						<span
							class="font-display text-4xl text-bone group-hover:text-brass transition-colors duration-300"
						>
							{item.label}
						</span>
					</a>
				{/each}
			</nav>

			<div class="mt-12">
				<!-- Language -->
				<div class="flex items-center gap-3 mb-10 text-sm uppercase tracking-[0.2em]">
					<button
						on:click={() => setLanguage('en')}
						class={currentLang === 'en'
							? 'text-bone underline underline-offset-4 decoration-brass'
							: 'text-bone-faint'}
					>
						English
					</button>
					<span class="text-bone-faint">/</span>
					<button
						on:click={() => setLanguage('de')}
						class={currentLang === 'de'
							? 'text-bone underline underline-offset-4 decoration-brass'
							: 'text-bone-faint'}
					>
						Deutsch
					</button>
				</div>

				<!-- Socials -->
				<p class="text-[0.65rem] uppercase tracking-[0.3em] text-bone-faint mb-4">
					{$_('connect')}
				</p>
				<div class="flex flex-wrap gap-x-6 gap-y-3">
					{#each socials as { label, href }}
						<a
							{href}
							target="_blank"
							rel="noreferrer"
							class="text-sm text-bone-muted hover:text-brass transition-colors duration-300"
						>
							{label} ↗
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
