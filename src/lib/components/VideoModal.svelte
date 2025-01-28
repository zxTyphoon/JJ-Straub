<script>
	export let videoUrl = null;
	export let onClose;

	let container;

	function handleClick(outside) {
		if (!container.contains(outside.target)) {
			onClose();
		}
	}
</script>

{#if videoUrl}
	<div
		class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
		aria-hidden="true"
		on:click={handleClick}
	>
		<div bind:this={container} class="relative max-w-3xl w-full">
			<video class="w-full h-auto rounded-lg" src={videoUrl} controls autoplay on:ended={onClose}>
				<track kind="captions" />
			</video>
			<button
				class="absolute top-2 right-2 bg-white text-black rounded-full px-1"
				on:click={onClose}
			>
				✖
			</button>
		</div>
	</div>
{/if}
