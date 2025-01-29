<script>
	import German from '$lib/img/German.svg';
	import English from '$lib/img/English.svg';
	import { _, locale } from 'svelte-i18n';

	function changeLanguage(newLang) {
		locale.set(newLang);
		if (typeof window !== 'undefined') {
			document.cookie = `locale=${newLang}; path=/; max-age=${60 * 60 * 24 * 7}`;
		}
	}
</script>

<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<h1
		class="sticky left-2 top-1 z-20 right-3 lg:right-5 p-4 bg-gray-500 bg-opacity-70 rounded-lg shadow-lg text-md lg:text-xl font-semibold md:font-extrabold text-white justify-self-end h-fit mx-2 lg:mx-0 transition-all ease-in-out"
	>
		<div class="flex space-x-2 lg:space-x-4 absolute top-5 right-3 lg:right-5">
			<button on:click={() => changeLanguage('de')}>
				<img src={German} class="w-7 cursor-pointer" alt="German Flag" />
			</button>
			<button on:click={() => changeLanguage('en')}>
				<img src={English} class="w-7 cursor-pointer" alt="English Flag" />
			</button>
		</div>

		<p>{$_('intro')} Juergen Jean <br class="xl:hidden" /> (JJ) Straub.</p>
		<br />
		<p>{$_('about')}</p>
		<br />
		<p>
			{$_('living')}
			<a
				href="https://www.empire-agency.com/male-talents"
				target="_blank"
				class="underline text-sky-400"
			>
				Empire-Agency</a
			>.
		</p>
		<br />
		<p>
			{$_('contact')}
			<a href="mailto:linda.b@empire-agency.com?bcc=jj@jjstraub.com" class="underline text-sky-400">
				E-Mail (linda.b@empire-agency.com)
			</a>
			{$_('or')} <br />
			<a href="tel:+493020059089" class="underline text-sky-400">{$_('phone')}</a>.
		</p>
		<br />
		<p>{$_('seeWork')}</p>
		<a
			href="https://vimeo.com/1008219719"
			target="_blank"
			rel="noreferrer"
			class="underline text-sky-400"
		>
			{$_('Showreel US')}
		</a>
		&nbsp;||&nbsp;
		<a
			href="https://vimeo.com/manage/videos/1008017841"
			target="_blank"
			rel="noreferrer"
			class="underline text-sky-400"
		>
			{$_('Showreel DE')}
		</a>
	</h1>
	<slot />
</section>
