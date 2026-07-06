<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = $state(false);

	onMount(() => {
		const onScroll = () => (visible = window.scrollY > 600);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

{#if visible}
	<button
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		transition:fade={{ duration: 200 }}
		class="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-bone/15 bg-ink-850/80 text-bone backdrop-blur transition-all duration-300 hover:border-accent hover:text-accent"
		aria-label="Scroll to top"
	>
		<svg
			class="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			><path
				stroke-width="1.8"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M5 15l7-7 7 7"
			/></svg
		>
	</button>
{/if}
