<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

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
</script>

<AppShell id="page" class="relative" on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-4xl ml-2 uppercase">JJ  Straub</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
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
				<a
					class="btn btn-sm variant-ghost-surface text-xl flex items-center space-x-2"
					href="/JJStraub_empireagency-Vita-11-2025.pdf"
					download="JJStraub_empireagency-Vitae-11-2025.pdf"
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M16.293 9.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L9 14.586V3a1 1 0 112 0v11.586l5.293-5.293z"
						clip-rule="evenodd"
					/>
				</svg>
					<span>Vitae</span>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	{#if showBackToTop}
		<button
			class="fixed bottom-12 right-12 p-2 bg-primary-800 text-white rounded-full shadow-lg"
			on:click={scrollToTop}
		>
			↑ Top
		</button>
	{/if}
	<svelte:fragment slot="pageFooter">
		<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center" padding="p-0">
			<a class="variant-ghost-surface btn-icon-sm px-1" href="./legal/"> legal </a>
		</AppBar>
	</svelte:fragment>
</AppShell>
