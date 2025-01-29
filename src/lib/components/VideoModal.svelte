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
		<div class="relative max-w-3xl w-full max-h-screen flex justify-center">
			<video
				bind:this={container}
				class="max-w-full max-h-screen w-auto h-auto rounded-lg"
				src={videoUrl}
				controls
				autoplay
				on:ended={onClose}
			>
				<track kind="captions" />
			</video>
		</div>
	</div>
{/if}
