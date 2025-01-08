<script>
	import sticky from './sticky.js';

	export let stickToTop = true;

	let isStuck = false;

	function handleStuck(e) {
		isStuck = e.detail.isStuck;
	}
</script>

<section>
	{#if !stickToTop}
		<slot />
	{/if}

	<h2
		class="sticky"
		class:isStuck
		data-position={stickToTop ? 'top' : 'bottom'}
		use:sticky={{ stickToTop }}
		on:stuck={handleStuck}
	>
		Hello, I'm JJ Straub. As an actor, I am passionate about telling compelling stories that
		resonate with audiences.
        <br /><br />
        <a href="https://vimeo.com/1008219719">Check out my Showreel</a>
	</h2>

	{#if stickToTop}
		<slot />
	{/if}
</section>

<style>
	.sticky {
		position: sticky;
		padding: 1.5rem;
		background: #f7e7d2;
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;
		font-size: 1.25rem;
		font-weight: bold;
		color: #333;
        text-align: center;
        margin-top: -20rem;
        margin-inline: 2rem;
	}

	.sticky[data-position='top'] {
		top: 1rem;
	}

	.sticky[data-position='bottom'] {
		bottom: 1rem;
	}
    a {
        text-decoration: underline;
        color: lightskyblue;
    }
</style>
