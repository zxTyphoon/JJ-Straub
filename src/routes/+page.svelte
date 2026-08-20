<script>
	import { locale, _ } from 'svelte-i18n';
	import Hero from '$lib/components/Hero.svelte';
	import Statement from '$lib/components/Statement.svelte';
	import Reels from '$lib/components/Reels.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Contact from '$lib/components/Contact.svelte';

	const title = $derived(`JJ Straub — ${$_('actor')} Portfolio`);

	// JSON-LD Person schema. Built as a string here (rather than inline in the
	// head) so the markup mustache stays a simple identifier. The closing script
	// tag is concatenated below so it never terminates this component's script block.
	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'JJ Straub',
		alternateName: 'Juergen J. Straub',
		url: 'https://www.jjstraub.com',
		image: 'https://www.jjstraub.com/JJStraub_Headshot-og.webp',
		jobTitle: 'Actor',
		description:
			'JJ Straub is a professional actor showcasing his portfolio of film, theater, and television roles — including career highlights, achievements, and behind-the-scenes insights.',
		birthDate: '1952-02-08',
		gender: 'Male',
		knowsLanguage: ['German', 'English'],
		sameAs: [
			'https://www.imdb.com/name/nm0833707/',
			'https://www.instagram.com/jjstraub1',
			'https://www.facebook.com/JJStraub/',
			'https://x.com/JJStraub4real',
			'https://www.linkedin.com/in/jj-straub/',
			'https://www.youtube.com/user/JJatUtube',
			'https://www.xing.com/profile/Juergen_Straub23',
			'https://www.filmmakers.eu/de/actors/j-j-straub',
			'https://www.crew-united.com/en/J-J-Straub.html'
		],
		occupation: { '@type': 'Occupation', name: 'Actor' }
	};
	const jsonLd =
		`<script type="application/ld+json">${JSON.stringify(personSchema)}` + '</' + 'script>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="JJ Straub is a professional actor showcasing his portfolio of film, theater, and television roles — including career highlights, achievements, and behind-the-scenes insights."
	/>
	<meta
		name="keywords"
		content="actor, portfolio, Juergen Straub, JJ, JJ Straub, jj, jj straub, juergen"
	/>
	<meta name="author" content="Juergen Straub" />
	<meta name="image" content="https://www.jjstraub.com/JJStraub_Headshot-og.webp" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.jjstraub.com" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://iet4nqumkcygt4t7.public.blob.vercel-storage.com" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta
		name="twitter:description"
		content="JJ Straub is a professional actor showcasing his portfolio of film, theater, and television roles — including career highlights, achievements, and behind-the-scenes insights."
	/>
	<meta name="twitter:image" content="https://www.jjstraub.com/JJStraub_Headshot-og.webp" />

	<meta property="og:title" content={title} />
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="https://www.jjstraub.com" />
	<meta property="og:image" content="https://www.jjstraub.com/JJStraub_Headshot-og.webp" />
	<meta property="og:image:alt" content="Juergen Straub, professional actor" />
	<meta
		property="og:description"
		content="JJ Straub is a professional actor showcasing his portfolio of film, theater, and television roles — including career highlights, achievements, and behind-the-scenes insights."
	/>
	<meta property="og:site_name" content="JJ Straub Portfolio" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:locale:alternate" content="de_DE" />

	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLd}
</svelte:head>

<div lang={$locale}>
	<Hero />
	<Statement />
	<Reels />
	<Gallery />
	<Contact />
</div>
