<script>
	import { locale, _ } from 'svelte-i18n';
	import sticky from './sticky.js';
	import German from '$lib/img/German.svg';
	import English from '$lib/img/English.svg';

	let isStuck = false;

	function changeLanguage(newLang) {
       locale.set(newLang);
       if (typeof window !== 'undefined') {
           document.cookie = `locale=${newLang}; path=/; max-age=${60 * 60 * 24 * 7}`;
       }
   }

	function handleStuck(e) {
		isStuck = e.detail.isStuck;
	}
</script>

<section class="grid grid-cols-2 gap-4">
	<h2 class="sticky" class:isStuck data-position="top" use:sticky={true} on:stuck={handleStuck}>
		<div class="flex space-x-2 lg:space-x-4 absolute top-5 right-3 lg:right-5">
			<button on:click={() => changeLanguage('de')}>
				<img src={German} class="w-7 cursor-pointer" alt="German Flag" />
			</button>
			<button on:click={() => changeLanguage('en')}>
				<img src={English} class="w-7 cursor-pointer" alt="English Flag" />
			</button>
		</div>

		<!-- Use the svelte-i18n translation keys directly -->
		<p>{$_('intro')} Juergen Jean <br class="xl:hidden" /> (JJ) Straub.</p>
		<br />
		<p>{$_('about')}</p>
		<br />
		<p>
			{$_('represented')}
			<a href="https://www.empire-agency.com" target="_blank"> Empire-Agency</a>.
		</p>
		<p>{$_('living')}</p>
		<br />
		<p>
			{$_('contact')} <br />
			<a href="mailto:linda.b@empire-agency.com?bcc=jj@jjstraub.com">
				E-Mail (linda.b@empire-agency.com)
			</a>
			{$_('or')} <br />
			<a href="tel:+493020059089">{$_('phone')}</a>.
		</p>
		<br />
		<p>{$_('seeWork')}</p>
		<a href="https://vimeo.com/1008219719" target="_blank" rel="noreferrer">
			{$_('englishReel')}
		</a>
		&nbsp;||&nbsp;
		<a href="https://vimeo.com/manage/videos/1008017841" target="_blank" rel="noreferrer">
			{$_('germanReel')}
		</a>
	</h2>
	<slot />
</section>

<style>
	section {
		display: grid;
	}

	.sticky {
		position: sticky;
		padding: 1rem;
		background-color: rgba(150, 150, 150, 0.75);
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
		justify-self: end;
		margin-bottom: 20px;
		height: fit-content;
		margin-left: 10px;
		margin-right: -10px;
	}

	.sticky[data-position='top'] {
		top: 5px;
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
