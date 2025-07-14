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
		class="sticky left-4 top-4 z-20 right-3 lg:right-4 p-4 bg-gray-500 bg-opacity-40 md:bg-opacity-100 rounded-lg shadow-lg text-md lg:text-xl font-semibold md:font-bold text-white justify-self-end h-fit mx-2 transition-all ease-in-out"
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
		</p>
		<br />
		<p>
			{$_('contact')}
			<a href="mailto:jj@jjstraub.com" class="underline text-sky-400">
				E-Mail (jj@jjstraub.com)
			</a>
			{$_('or')} <br />
			<a href="tel:+493049500829" class="underline text-sky-400">{$_('phone')}</a>.
		</p>
	</h1>
	<slot />
</section>
