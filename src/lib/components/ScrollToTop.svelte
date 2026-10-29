<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		const handleScroll = () => {
			visible = window.scrollY > 600;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if visible}
	<button
		on:click={scrollToTop}
		transition:fade={{ duration: 200 }}
		class="fixed bottom-[calc(1.5rem_+_env(safe-area-inset-bottom))] right-[calc(1.5rem_+_env(safe-area-inset-right))] md:bottom-[calc(2rem_+_env(safe-area-inset-bottom))] md:right-[calc(2rem_+_env(safe-area-inset-right))] z-40 w-11 h-11 bg-night-900/80 backdrop-blur-sm border border-white/15 hover:border-brass text-bone hover:text-brass flex items-center justify-center transition-colors duration-300"
		aria-label="Scroll to top"
	>
		<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-width="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
		</svg>
	</button>
{/if}
