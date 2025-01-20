<script>
	import StickyContent from '$lib/components/StickyContent.svelte';
	import { locale, _ } from 'svelte-i18n';

	let images = [
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-LA-Kings.jpg',
			alt: 'LA Kings',
			caption: 'LA Kings - Commercial - Producer'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Feeder.jpg',
			alt: 'Feeder',
			caption: 'Feeder - The Vet'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-JJ-peace.jpg',
			alt: 'Make me feel',
			caption: 'Make me feel - Dr. Buchenwald'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-CuttingSur.jpg',
			alt: 'Cutting Sur',
			caption: 'Cutting Surface - Dr. Belial'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-eBay.jpg',
			alt: 'eBay',
			caption: 'eBay - Commercial'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-General.jpg',
			alt: 'General',
			caption: 'Reparation Day - Columbian General'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Reinfressen1.jpg',
			alt: 'Reinfressen 1',
			caption: 'Reinfressen - Bernd'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Sylvia.jpg',
			alt: 'Sylvia',
			caption: 'Sylvia - upset customer'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_Smiling.jpg',
			alt: 'Smiling',
			caption: ''
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Piano-Bar.jpg',
			alt: 'Piano Bar',
			caption: 'Piano Bar - John'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Kingdom-Come-Deliverance.jpg',
			alt: 'Kingdom Come Deliverance',
			caption: 'Kingdom Come Deliverance - Game - Motion Capture'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-TheOffer.jpg',
			alt: 'The Offer',
			caption: 'The Offer'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_Golfing.jpg',
			alt: 'Golfing',
			caption: 'Golfing'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-SAT1-Notruf.jpg',
			alt: 'SAT1 Notruf',
			caption: 'SAT1 Notruf'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_Headshot2.jpg',
			alt: 'JJ Straub',
			caption: ''
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-NYPD.jpg',
			alt: 'NYPD',
			caption: 'Long Journey - NYPD Officer'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Farmer.jpg',
			alt: 'Farmer',
			caption: 'Farmer'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Life-KinoLoop.jpg',
			alt: 'L.I.F.E',
			caption: 'L.I.F.E - Philosophy Teacher'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Karma.jpg',
			alt: 'Karma - Father',
			caption: 'Karma - Father'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Jawlock-DR-Dentist.jpg',
			alt: 'Jawlock DR Dentist',
			caption: 'Jawlock - Dentist'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Cloud-Lawyer.jpg',
			alt: 'Cloud Lawyer',
			caption: 'Cloud - Lawyer'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Karma-PI.jpg',
			alt: 'Karma PI',
			caption: 'Karma - Father'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-RedBloom-CIA.jpg',
			alt: 'RedBloom CIA',
			caption: 'RedBloom - CIA'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-DerPate-HeadShot.jpg',
			alt: 'Der Pate HeadShot',
			caption: 'Der Pate'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-VonLoewenberg.jpg',
			alt: 'Von Loewenberg',
			caption: 'Mask of the Schwarzen-Loewenbergs - Hans von Schwarzen-Loewenberg'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-TheWindow1.jpg',
			alt: 'The Window',
			caption: 'The Window - Frederick'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Diamanten.jpg',
			alt: 'Diamanten',
			caption: 'Diamanten - Ali'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Reinfressen.jpg',
			alt: 'Reinfressen',
			caption: 'Reinfressen - Bernd'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Professor.jpg',
			alt: 'Professor',
			caption: 'Professor'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-TJ.jpg',
			alt: 'TJ',
			caption: 'TJ'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-TheWald.jpg',
			alt: 'The Wald',
			caption: 'The Wald - Injured Soldier'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Smoking-kills.jpg',
			alt: 'smoking kills',
			caption: 'Smoking kills - American Cancer Society'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-RapunzelsFluch2.jpg',
			alt: "Rapunzel's Curse",
			caption: 'Rapunzels Fluch 2 - Oberkommisar Schulz'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-100Stories.jpg',
			alt: '100 Stories',
			caption: '100 Stories - Kurt'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-Booth-Game.jpg',
			alt: 'Booth Game',
			caption: 'The Booth Game'
		},
		{
			src: 'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_empireagency-L.I.F.E.-KinoLoop.jpg',
			alt: 'L.I.F.E. KinoLoop',
			caption: 'L.I.F.E. - Philosophy Teacher'
		}
	];
</script>

<svelte:head>
	<title>Juergen Straub - {$_('actor')} Portfolio</title>
	<meta
		name="description"
		content={$_('description')}
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.jjstraub.com" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://kafo1tfijyjcs03n.public.blob.vercel-storage.com" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Juergen Straub - {$_('actor')} Portfolio" />
	<meta
		name="twitter:description"
		content={$_('description')}
	/>
	<meta
		name="twitter:image"
		content="https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_Headshot.jpg"
	/>

	<meta property="og:title" content="Juergen Straub - {$_('actor')} Portfolio" />
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="https://www.jjstraub.com" />
	<meta
		property="og:image"
		content="https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_Headshot.jpg"
	/>
	<meta property="og:image:alt" content="Juergen Straub, professional actor" />
	<meta
		property="og:description"
		content={$_('description')}
	/>
	<meta property="og:site_name" content="JJ Straub Portfolio" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:locale:alternate" content="de_DE" />

	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

<main id="page" lang={$locale}>
	<div>
		<StickyContent>
			<img
				class="mr-25 w-auto rounded-lg transition-all duration-300 filter grayscale hover:grayscale-0"
				src={'https://kafo1tfijyjcs03n.public.blob.vercel-storage.com/img/JJStraub_Headshot.jpg'}
				alt="JJ Straub Headshot"
				oncontextmenu="return false"
				draggable="false"
			/>
		</StickyContent>
	</div>
	<section
		class="columns-1 lg:columns-2 xl:columns-3 2xl:columns-4 gap-4 relative bottom-0 left-0 w-full mt-5"
	>
		<div class="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-primary-300"></div>
		{#each images as { src, alt, caption }}
			<figure class="relative">
				<img
					class="rounded-lg mb-4 w-full"
					oncontextmenu="return false"
					draggable="false"
					{src}
					{alt}
				/>
				{#if caption}
					<figcaption
						class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
					>
						{caption}
					</figcaption>
				{/if}
			</figure>
		{/each}
	</section>
</main>
