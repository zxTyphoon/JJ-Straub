<script>
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		const handleScroll = () => {
			visible = window.scrollY > 500;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if visible}
	<button
		on:click={scrollToTop}
		class="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-primary-500 hover:bg-primary-400 text-white shadow-lg shadow-primary-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-fade-in"
		aria-label="Scroll to top"
	>
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
		</svg>
	</button>
{/if}
