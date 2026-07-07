<script>
	import '@fontsource/instrument-serif';
	import '@fontsource/instrument-serif/400-italic.css';
	import '@fontsource-variable/space-grotesk';
	import '../app.postcss';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics();
	injectSpeedInsights();
</script>

<div class="grain min-h-screen flex flex-col bg-night-900">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
	<ScrollToTop />
</div>
