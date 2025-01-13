<script>
	import sticky from './sticky.js';

	let isStuck = false;

	function handleStuck(e) {
		isStuck = e.detail.isStuck;
	}
</script>

<section class="grid grid-cols-2 gap-4">
	<slot />
	<h2 class="sticky" class:isStuck data-position="top" use:sticky={true} on:stuck={handleStuck}>
		Hello, I'm Juergen Jean (JJ) Straub.
		<br /><br />
		As an actor my focus is characters, which I studied with Lee Strasberg, Stella Adler and Uta Hagen
		in NYC.
		<br /><br />
		Represented by the www.Empire-Agency.com. As a dual citizen, German and American, I live in Berlin
		now.
		<br /><br />
		I am passionate about bringing stories to life in ways that captivate and inspire.
		<br /><br />
		Acting is not just my profession—it's my lifelong passion, and I strive to make every performance
		authentic and memorable.
		<br /><br />
		Collaboration is at the heart of my work. Whether working with directors, writers, or fellow actors,
		I aim to create compelling and meaningful characters.
		<br /><br />
		Feel free to reach out to my agent
		<a href="mailto:linda.b@empire-agency.com?bcc=jj@jjstraub.com">Linda Bose</a>
		to discuss potential collaborations or upcoming opportunities.
		<br /><br />
		Want to see some of my work?
		<br />
		<a href="https://vimeo.com/1008219719" target="_blank" rel="noreferrer">
			Check out my Showreel
		</a>
		<br /><br />
	</h2>
</section>

<style>
	section {
		display: grid;
	}

	.sticky {
		position: sticky;
		padding: 2rem;
		background-color: rgba(128, 128, 128, 0.5);
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
		justify-self: end;
		margin-bottom: 20px;
		height: fit-content;
	}

	.sticky[data-position='top'] {
		top: 1px;
	}

	a {
		text-decoration: underline;
		color: lightskyblue;
	}

	@media (max-width: 768px) {
		section {
			grid-template-columns: 1fr;
		}

		.sticky {
			justify-self: stretch; 
			margin-inline: 0;
			margin-top: 20px; 
		}

		.sticky[data-position='top'] {
			
			margin-top: 0;
		}

		::slotted(*) {
			width: 100%;
		}
	}
</style>
