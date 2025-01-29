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
		<div class="relative max-w-[90vw] md:max-w-3xl w-full max-h-[90vh] flex justify-center">
			<video
				bind:this={container}
				class="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-lg"
				src={videoUrl}
				controls
				autoplay
				playsinline
				disablepictureinpicture
				preload="metadata"
				controlslist="nodownload"
				on:ended={onClose}
			>
			<track kind="captions" src="" srclang="en" label="No Captions"/>
			</video>
		</div>
	</div>
{/if}
