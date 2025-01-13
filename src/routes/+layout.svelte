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

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
				<strong class="text-4xl ml-2 uppercase" >JJ  Straub</strong>
			</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface text-xl "
					href="/contact"
				>
					Legal
				</a>
				<a
					class="btn btn-sm variant-ghost-surface text-xl "
					href="https://www.instagram.com/jjstraub1"
					target="_blank"
					rel="noreferrer"
				>
					Instagram
				</a>
				<a
					class="btn btn-sm variant-ghost-surface text-xl "
					href="https://www.facebook.com/JJStraub/"
					target="_blank"
					rel="noreferrer"
				>
					Facebook
				</a>
				<a
					class="btn btn-sm variant-ghost-surface text-xl "
					href="https://www.filmmakers.eu/de/actors/j-j-straub"
					target="_blank"
					rel="noreferrer"
				>
					Filmmakers Profile
				</a>
				<a
					class="btn btn-sm variant-ghost-surface text-xl "
					href="/"
				>
					Curriculum Vitae
				</a>
				
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
