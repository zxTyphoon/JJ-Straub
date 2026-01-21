<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { locale, _ } from 'svelte-i18n';

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics();
	injectSpeedInsights();
</script>

<div class="min-h-screen flex flex-col bg-surface-900">
	<Header />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
	<ScrollToTop />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
