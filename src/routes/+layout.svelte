<script>
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		Drawer,
		initializeStores,
		getDrawerStore
	} from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { locale, _ } from 'svelte-i18n';

	import Instagram from '$lib/img/Instagram.svg';
	import Facebook from '$lib/img/Facebook.svg';
	import Filmmakers from '$lib/img/Filmmakers.svg';
	import IMDB from '$lib/img/imdb.svg';
	import XING from '$lib/img/XING.svg';
	import YouTube from '$lib/img/YouTube.svg';
	import X from '$lib/img/X.svg';
	import LinkedIn from '$lib/img/linkedin.svg';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics();
	injectSpeedInsights();

	import { afterNavigate } from '$app/navigation';

	afterNavigate((params) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});

	let showBackToTop = false;

	function scrollHandler(event) {
		showBackToTop = event.currentTarget.scrollTop > 300;
	}

	function scrollToTop() {
		const elemPage = document.querySelector('#page');
		if (elemPage) {
			elemPage.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	initializeStores();

	const drawerStore = getDrawerStore();

	function drawerOpen() {
		drawerStore.open({});
	}
</script>

<Drawer position="right" width="w-1/2" transitions="transition-all duration-300 ease-in-out">
	<div class="grid grid-cols-2 gap-5 px-5 py-5 items-center">
		<a href="https://www.linkedin.com/in/jj-straub/" target="_blank" rel="noreferrer">
			<img class="w-auto" src={LinkedIn} alt="LinkedIn" /></a
		>
		<a href="https://www.facebook.com/JJStraub/" target="_blank" rel="noreferrer">
			<img class="w-auto" src={Facebook} alt="Facebook" />
		</a>
		<a href="https://www.imdb.com/name/nm0833707/" target="_blank" rel="noreferrer">
			<img class="w-auto" src={IMDB} alt="IMDB" />
		</a>
		<a href="https://x.com/JJStraub4real" target="_blank" rel="noreferrer">
			<img class="w-auto" src={X} alt="X" />
		</a>
		<a href="https://www.instagram.com/jjstraub1" target="_blank" rel="noreferrer">
			<img class="w-auto" src={Instagram} alt="Instagram" />
		</a>
		<a href="https://www.youtube.com/user/JJatUtube" target="_blank" rel="noreferrer">
			<img class="w-auto" src={YouTube} alt="YouTube" />
		</a>
		<a href="https://www.xing.com/profile/Juergen_Straub23" target="_blank" rel="noreferrer">
			<img class="w-auto" src={XING} alt="XING" />
		</a>
	</div>
	<a
		class="btn btn-sm text-2xl mx-2"
		href="https://www.filmmakers.eu/de/actors/j-j-straub"
		target="_blank"
		rel="noreferrer"
	>
		<img class="w-auto" src={Filmmakers} alt="Filmmakers" />
	</a>
</Drawer>

<AppShell id="page" class="relative" on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" on:click={scrollToTop}>
					<strong class="text-4xl ml-2 uppercase">JJ  Straub</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden lg:flex items-center space-x-4">
					<a
						class="btn btn-sm variant-ghost-surface text-xl"
						href="https://www.instagram.com/jjstraub1"
						target="_blank"
						rel="noreferrer"
					>
						<img class="h-7" src={Instagram} alt="Instagram" />
					</a>
					<a
						class="btn btn-sm variant-ghost-surface text-xl"
						href="https://www.facebook.com/JJStraub/"
						target="_blank"
						rel="noreferrer"
					>
						<img class="h-7" src={Facebook} alt="Facebook" />
					</a>
					<a
						class="btn btn-sm variant-ghost-surface text-xl"
						href="https://www.imdb.com/name/nm0833707/"
						target="_blank"
						rel="noreferrer"
					>
						<img class="h-7" src={IMDB} alt="IMDB" />
					</a>
					<a
						class="btn btn-sm variant-ghost-surface text-xl"
						href="https://x.com/JJStraub4real"
						target="_blank"
						rel="noreferrer"
					>
						<img class="h-7" src={X} alt="X" />
					</a>
					<a
						class="btn btn-sm variant-ghost-surface text-xl"
						href="https://www.linkedin.com/in/jj-straub/"
						target="_blank"
						rel="noreferrer"
					>
						<img class="h-7" src={LinkedIn} alt="LinkedIn" />
					</a>
					<a
						class="btn btn-sm variant-ghost-surface text-xl"
						href="https://www.youtube.com/user/JJatUtube"
						target="_blank"
						rel="noreferrer"
					>
						<img class="h-7" src={YouTube} alt="YouTube" />
					</a>
					<a
						class="btn btn-sm variant-ghost-surface text-xl"
						href="https://www.xing.com/profile/Juergen_Straub23"
						target="_blank"
						rel="noreferrer"
					>
						<img class="h-7" src={XING} alt="XING" />
					</a>
					<a
						class="btn btn-sm variant-ghost-surface text-xl"
						href="https://www.filmmakers.eu/de/actors/j-j-straub"
						target="_blank"
						rel="noreferrer"
					>
						<img class="h-7" src={Filmmakers} alt="Filmmakers" />
					</a>
				</div>
				<div class="sm:block lg:hidden flex items-center">
					<button
						aria-label="Open Drawer button"
						class="lg:hidden btn btn-sm mr-4"
						on:click={drawerOpen}
					>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	{#if showBackToTop}
		<button
			class="fixed bottom-12 right-10 2xl:left-10 2xl:right-auto 2xl:text-xl p-2 bg-primary-800 text-white rounded-full shadow-lg"
			on:click={scrollToTop}
		>
			↑ Top
		</button>
	{/if}
	<svelte:fragment slot="pageFooter">
		<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center" padding="p-0">
			© 2025 JJ Straub - {$_('actor')} |
			<a class="px-1" href="./legal/"> legal notice</a>
		</AppBar>
	</svelte:fragment>
</AppShell>
