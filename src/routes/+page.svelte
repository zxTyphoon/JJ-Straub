<script>
	import StickyContent from '$lib/components/StickyContent.svelte';
	import VideoModal from '$lib/components/VideoModal.svelte';
	import { locale, _ } from 'svelte-i18n';

	import Playbutton from '$lib/img/play-button.svg';

	const title = `Juergen Straub - ${$_('actor')} Portfolio`;
	const description = `${$_('description')}`;

	let selectedVideo = null;

	function openVideo(videoUrl) {
		selectedVideo = videoUrl;
	}

	function closeVideo() {
		selectedVideo = null;
	}

	let images = [
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-LA-Kings.webp',
			alt: 'LA Kings',
			caption: 'LA Kings - Commercial',
			video: '/JJStraub_empireagency-LAKings.mp4'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Feeder.webp',
			alt: 'Feeder',
			caption: 'Feeder - The Vet'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Sennheiser-Cowboy1.webp',
			alt: 'Sennheiser Cowboy',
			caption: 'Sennheiser - Commercial'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Kommissar.webp',
			alt: 'Kommissar',
			caption: 'Rapunzels Fluch 2 - Oberkommisar Schulz'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-CuttingSur.webp',
			alt: 'Cutting Sur',
			caption: 'Cutting Surface - Dr. Belial'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-ebay-social-media.webp',
			alt: 'Ebay Social Media Commercial',
			caption: 'Ebay - Social Media Commercial',
			video: '/JJStraub_empireagency-eBay-social-media.mp4'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-JJ-peace.webp',
			alt: 'Make me feel',
			caption: 'Make me feel - Dr. Buchenwald'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Professor.webp',
			alt: 'Professor',
			caption: 'Professor'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-From Russia with Love-BND-Agent.webp',
			alt: 'From Russia with Love',
			caption: 'From Russia with Love - BND Agent'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-RapunzelsFluch2.webp',
			alt: "Rapunzel's Curse",
			caption: 'Rapunzels Fluch 2 - Oberkommisar Schulz'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-General.webp',
			alt: 'General',
			caption: 'Reparation Day - Columbian General'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Sylvia.webp',
			alt: 'Sylvia',
			caption: 'Sylvia - upset customer'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_Smiling.webp',
			alt: 'Smiling',
			caption: ''
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Karma.webp',
			alt: 'Karma - Father',
			caption: 'Karma - Father'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Boss-ChrisBoston.webp',
			alt: 'Boss Chris Boston',
			caption: 'Chris Boston'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-L.I.F.E.-KinoLoop.webp',
			alt: 'L.I.F.E. KinoLoop',
			caption: 'L.I.F.E. - Philosophy Teacher'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_Golfing.webp',
			alt: 'Golfing',
			caption: 'Golfing'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-eBay.webp',
			alt: 'eBay',
			caption: 'eBay - Commercial',
			video: '/JJStraub_EmpireAgency-eBay3.MP4'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Coinstar.webp',
			alt: 'Coinstar',
			caption: 'Coinstar - Commercial'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-TheOffer.webp',
			alt: 'The Offer',
			caption: 'The Offer'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Piano-Bar.webp',
			alt: 'Piano Bar',
			caption: 'Piano Bar - John'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-SAT1-Notruf.webp',
			alt: 'SAT1 Notruf',
			caption: 'SAT1 Notruf'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Kingdom-Come-Deliverance-char.webp',
			alt: 'Kingdom Come Deliverance',
			caption: 'Kingdom Come Deliverance 2 - Martin Oderin'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Kingdom-Come-Deliverance.webp',
			alt: 'Kingdom Come Deliverance',
			caption: 'Kingdom Come Deliverance 2 - Motion Capture'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_Headshot2.webp',
			alt: 'JJ Straub',
			caption: ''
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-NYPD.webp',
			alt: 'NYPD',
			caption: 'Long Journey - NYPD Officer'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-TheWindow1.webp',
			alt: 'The Window',
			caption: 'The Window - Frederick'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Farmer.webp',
			alt: 'Farmer',
			caption: 'Farmer'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Life-KinoLoop.webp',
			alt: 'L.I.F.E',
			caption: 'L.I.F.E - Philosophy Teacher'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Jawlock-DR-Dentist.webp',
			alt: 'Jawlock DR Dentist',
			caption: 'Jawlock - Dentist'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-TheWald.webp',
			alt: 'The Wald',
			caption: 'The Wald - Injured Soldier',
			video: '/JJStraub_empireagency-THE-WALD.mp4'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Karma-PI.webp',
			alt: 'Karma PI',
			caption: 'Karma - Father'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Reinfressen1-2.webp',
			alt: 'Reinfressen 1',
			caption: 'Reinfressen - Bernd'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-RedBloom-CIA.webp',
			alt: 'RedBloom CIA',
			caption: 'RedBloom - CIA'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-DerPate-HeadShot.webp',
			alt: 'Der Pate HeadShot',
			caption: 'Der Pate'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-VonLoewenberg.webp',
			alt: 'Von Loewenberg',
			caption: 'Mask of the Schwarzen-Loewenbergs - Hans'
		},

		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Booth-Game.webp',
			alt: 'Booth Game',
			caption: 'The Booth Game',
			video: '/JJStraub_empireagency-Booth-Game.mp4'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Reinfressen.webp',
			alt: 'Reinfressen',
			caption: 'Reinfressen - Bernd'
		},

		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-TJ.webp',
			alt: 'TJ',
			caption: 'TJ'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-LastCustomer-Walter.webp',
			alt: 'Last Customer',
			caption: 'Last Customer - Walter'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-100Stories.webp',
			alt: '100 Stories',
			caption: '100 Stories - Kurt'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Cloud-Lawyer.webp',
			alt: 'Cloud Lawyer',
			caption: 'Cloud Lawyer - Larry H. Schitt',
			video: '/JJStraub_empireagency-Cloud-Lawyer.mp4'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Smoking-kills.webp',
			alt: 'smoking kills',
			caption: 'Smoking kills - American Cancer Society'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Time.webp',
			alt: 'Time',
			caption: 'Time'
		},
		{
			src: 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_empireagency-Diamanten.webp',
			alt: 'Diamanten',
			caption: 'Diamanten - Ali'
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="actor, portfolio, Juergen Straub, JJ, JJ Straub" />
	<meta name="author" content="Juergen Straub" />
	<meta name="image" content="https://www.jjstraub.com/JJStraub_Headshot-og.webp" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.jjstraub.com" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://iet4nqumkcygt4t7.public.blob.vercel-storage.com" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://www.jjstraub.com/JJStraub_Headshot-og.webp" />

	<meta property="og:title" content={title} />
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="https://www.jjstraub.com" />
	<meta property="og:image" content="https://www.jjstraub.com/JJStraub_Headshot-og.webp" />
	<meta property="og:image:alt" content="Juergen Straub, professional actor" />
	<meta property="og:description" content={description} />
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
				class="transition-all duration-300 rounded-bl-lg filter md:grayscale hover:grayscale-0"
				src={'/JJStraub_Headshot.webp'}
				alt="JJ Straub Headshot"
				on:contextmenu|preventDefault
				draggable="false"
			/>
		</StickyContent>
	</div>
	<section
		class="columns-1 lg:columns-2 xl:columns-3 2xl:columns-4 gap-4 relative bottom-0 left-0 w-full mt-5"
	>
		<div class="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-primary-300"></div>
		{#each images as { src, alt, caption, video }}
			<button
				class="relative rounded-lg w-full mb-4 {video ? 'cursor-pointer' : 'cursor-default'}"
				on:click={() => {
					if (video) {
						openVideo(video);
					}
				}}
			>
				<figure class="relative group">
					<img
						class="rounded-lg w-full"
						on:contextmenu|preventDefault
						draggable="false"
						{src}
						{alt}
					/>
					{#if video}
						<div
							class="w-16 absolute bg-slate-200 rounded-full top-1/2 left-1/2 group-hover:opacity-15 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
						>
							<img class="w-16" src={Playbutton} alt="Play Button" />
						</div>
					{/if}
					{#if caption}
						<figcaption
							class="rounded-lg absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
						>
							{caption}
						</figcaption>
					{/if}
				</figure>
			</button>
		{/each}
	</section>
	{#if selectedVideo}
		<VideoModal videoUrl={selectedVideo} onClose={closeVideo} />
	{/if}
</main>
