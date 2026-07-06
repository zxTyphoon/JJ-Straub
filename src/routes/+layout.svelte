<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	let { children } = $props();

	injectAnalytics();
	injectSpeedInsights();
</script>

<div class="relative flex min-h-svh flex-col bg-ink-900">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
	<ScrollToTop />
</div>

<!-- Cinematic overlays -->
<div class="grain-overlay" aria-hidden="true"></div>
<div class="vignette-overlay" aria-hidden="true"></div>
