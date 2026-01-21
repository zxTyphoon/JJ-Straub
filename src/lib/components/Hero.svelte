<script>
	import { locale, _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import German from '$lib/img/German.svg';
	import English from '$lib/img/English.svg';

	let isVisible = false;

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
		}, 100);
	});

	function changeLanguage(newLang) {
		locale.set(newLang);
		if (typeof window !== 'undefined') {
			document.cookie = `locale=${newLang}; path=/; max-age=${60 * 60 * 24 * 7}`;
		}
	}
</script>

<section class="relative min-h-[100vh] md:min-h-[90vh] flex items-end overflow-hidden">
	<!-- Background Image with Parallax Effect -->
	<div class="absolute inset-0 z-0 flex items-center justify-center pt-16 md:pt-20">
		<img
			src="/JJStraub_Headshot.webp"
			alt="JJ Straub"
			class="h-full w-auto max-w-none md:w-full md:h-auto md:max-h-[120%] object-contain transition-transform duration-[2000ms]"
			class:scale-100={isVisible}
			on:contextmenu|preventDefault
			draggable="false"
		/>
		<!-- Sophisticated gradient overlays -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/60 to-transparent"
		></div>
		<div
			class="absolute inset-0 bg-gradient-to-r from-surface-900/80 via-transparent to-transparent"
		></div>
	</div>

	<!-- Language Switcher -->
	<div class="absolute top-20 md:top-24 right-6 z-30 flex flex-col gap-2">
		<button
			on:click={() => changeLanguage('de')}
			class="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20 hover:ring-white/60 transition-all duration-300 hover:scale-110 bg-black/30 backdrop-blur-sm"
			aria-label="Switch to German"
		>
			<img src={German} class="w-full h-full object-cover" alt="German" />
		</button>
		<button
			on:click={() => changeLanguage('en')}
			class="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20 hover:ring-white/60 transition-all duration-300 hover:scale-110 bg-black/30 backdrop-blur-sm"
			aria-label="Switch to English"
		>
			<img src={English} class="w-full h-full object-cover" alt="English" />
		</button>
	</div>

	<!-- Content -->
	<div class="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
		<div
			class="max-w-4xl transform transition-all duration-1000 ease-out"
			class:translate-y-0={isVisible}
			class:opacity-100={isVisible}
			class:translate-y-8={!isVisible}
			class:opacity-0={!isVisible}
		>
			<!-- Name with dramatic typography -->
			<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
				<span class="block">Juergen J.</span>
				<span class="block text-primary-400">Straub</span>
			</h1>

			<!-- Role badge -->
			<div
				class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
			>
				<span class="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
				<span class="text-sm font-medium text-white/90 uppercase tracking-widest"
					>{$_('actor')}</span
				>
			</div>

			<!-- Bio text -->
			<p class="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
				{$_('about')}
			</p>

			<!-- Contact info card -->
			<div class="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 max-w-xl">
				<div class="flex items-start gap-4 mb-4">
					<div
						class="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0"
					>
						<svg
							class="w-6 h-6 text-primary-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/>
						</svg>
					</div>
					<div>
						<p class="text-xs uppercase tracking-wider text-white/50 mb-1">{$_('agentur')}</p>
						<p class="text-white font-medium">ZAV-Berlin, Sonja Sommer</p>
					</div>
				</div>

				<div class="flex flex-wrap gap-3">
					<a
						href="tel:+49228502088025"
						class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
					>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						+49 228 50208-8025
					</a>
					<a
						href="mailto:sonja.sommer@arbeitsagentur.de"
						class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
					>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						sonja.sommer@arbeitsagentur.de
					</a>
				</div>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div
			class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-500"
			class:opacity-100={isVisible}
			class:opacity-0={!isVisible}
		>
			<span class="text-xs uppercase tracking-widest text-white/40">{$_('scroll')}</span>
			<div class="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
				<div class="w-1.5 h-3 rounded-full bg-white/60 animate-bounce"></div>
			</div>
		</div>
	</div>
</section>
