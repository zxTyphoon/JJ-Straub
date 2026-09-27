// All portfolio credits. Cover images live in the Vercel Blob store; video
// clips are served from static/. `category` is character | portrait; the
// "clips" filter is derived from the `video` field.
const blob = 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com';

export const categories = ['character', 'portrait', 'clips'];

export const works = [
	{
		src: `${blob}/JJStraub_empireagency-Sennheiser-Cowboy1.webp`,
		width: 1437,
		height: 1175,
		alt: 'JJ Straub: Sennheiser Cowboy',
		title: 'Sennheiser',
		role: 'Cowboy',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-TheWald.webp`,
		width: 1343,
		height: 719,
		alt: 'JJ Straub: The Wald',
		title: 'The Wald',
		role: 'Injured Soldier',
		category: 'character',
		video: '/JJStraub_empireagency-THE-WALD.mp4'
	},
	{
		src: `${blob}/JJStraub_empireagency-CuttingSur.webp`,
		width: 1250,
		height: 718,
		alt: 'JJ Straub: Cutting Surface',
		title: 'Cutting Surface',
		role: 'Dr. Belial',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-ebay-social-media.webp`,
		width: 485,
		height: 677,
		alt: 'JJ Straub: eBay Social Media Commercial',
		title: 'eBay',
		role: 'Social Media Commercial',
		category: 'character',
		video: '/JJStraub_empireagency-eBay-social-media.mp4'
	},
	{
		src: `${blob}/JJStraub_empireagency-Reinfressen1-2.webp`,
		width: 1676,
		height: 1934,
		alt: 'JJ Straub: Reinfressen',
		title: 'Reinfressen',
		role: 'Bernd',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-RapunzelsFluch2.webp`,
		width: 1255,
		height: 729,
		alt: "JJ Straub: Rapunzel's Curse",
		title: 'Rapunzels Fluch 2',
		role: 'Oberkommissar Schulz',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-General.webp`,
		width: 1707,
		height: 2220,
		alt: 'JJ Straub: General',
		title: 'Reparation Day',
		role: 'Columbian General',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-LastCustomer-Walter.webp`,
		width: 805,
		height: 472,
		alt: 'JJ Straub: Last Customer',
		title: 'Last Customer',
		role: 'Walter',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-LA-Kings.webp`,
		width: 1555,
		height: 833,
		alt: 'JJ Straub: LA Kings',
		title: 'LA Kings',
		role: 'Commercial',
		category: 'character',
		video: '/JJStraub_empireagency-LAKings.mp4'
	},
	{
		src: `${blob}/JJStraub_empireagency-L.I.F.E.-KinoLoop.webp`,
		width: 637,
		height: 661,
		alt: 'JJ Straub: L.I.F.E. KinoLoop',
		title: 'L.I.F.E.',
		role: 'Philosophy Teacher',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_Golfing.webp`,
		width: 621,
		height: 923,
		alt: 'JJ Straub: Portrait',
		title: 'JJ Straub',
		category: 'portrait'
	},
	{
		src: `${blob}/JJStraub_empireagency-eBay.webp`,
		width: 1277,
		height: 807,
		alt: 'JJ Straub: eBay',
		title: 'eBay',
		role: 'Commercial',
		category: 'character',
		video: '/JJStraub_EmpireAgency-eBay3.MP4'
	},
	{
		src: `${blob}/JJStraub_empireagency-Coinstar.webp`,
		width: 310,
		height: 423,
		alt: 'JJ Straub: Coinstar',
		title: 'Coinstar',
		role: 'Commercial',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-Piano-Bar.webp`,
		width: 797,
		height: 1200,
		alt: 'JJ Straub: Piano Bar',
		title: 'Piano Bar',
		role: 'John',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-Kingdom-Come-Deliverance-char.webp`,
		width: 480,
		height: 570,
		alt: 'JJ Straub: Kingdom Come Deliverance',
		title: 'Kingdom Come Deliverance 2',
		role: 'Martin Oderin',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-Jawlock-DR-Dentist.webp`,
		width: 444,
		height: 687,
		alt: 'JJ Straub: Jawlock DR Dentist',
		title: 'Jawlock',
		role: 'Dentist',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-Kingdom-Come-Deliverance.webp`,
		width: 842,
		height: 1600,
		alt: 'JJ Straub: Kingdom Come Deliverance',
		title: 'Kingdom Come Deliverance 2',
		role: 'Motion Capture',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-NYPD.webp`,
		width: 434,
		height: 588,
		alt: 'JJ Straub: NYPD',
		title: 'Long Journey',
		role: 'NYPD Officer',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-TheWindow1.webp`,
		width: 1600,
		height: 809,
		alt: 'JJ Straub: The Window',
		title: 'The Window',
		role: 'Frederick',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-From Russia with Love-BND-Agent.webp`,
		width: 508,
		height: 588,
		alt: 'JJ Straub: From Russia with Love',
		title: 'From Russia with Love',
		role: 'BND Agent',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-Karma.webp`,
		width: 640,
		height: 428,
		alt: 'JJ Straub: Karma',
		title: 'Karma',
		role: 'Father',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-Feeder.webp`,
		width: 1240,
		height: 718,
		alt: 'JJ Straub: Feeder',
		title: 'Feeder',
		role: 'The Vet',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-VonLoewenberg.webp`,
		width: 1550,
		height: 841,
		alt: 'JJ Straub: Von Loewenberg',
		title: 'Mask of the Schwarzen-Loewenbergs',
		role: 'Hans',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-Reinfressen.webp`,
		width: 1599,
		height: 1066,
		alt: 'JJ Straub: Reinfressen',
		title: 'Reinfressen',
		role: 'Bernd',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-TJ.webp`,
		width: 480,
		height: 639,
		alt: 'JJ Straub: Portrait',
		title: 'JJ Straub',
		category: 'portrait'
	},
	{
		src: `${blob}/JJStraub_empireagency-100Stories.webp`,
		width: 1098,
		height: 1328,
		alt: 'JJ Straub: 100 Stories',
		title: '100 Stories',
		role: 'Kurt',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-Cloud-Lawyer.webp`,
		width: 1024,
		height: 1240,
		alt: 'JJ Straub: Cloud Lawyer',
		title: 'Cloud Lawyer',
		role: 'Larry H. Schitt',
		category: 'character',
		video: '/JJStraub_empireagency-Cloud-Lawyer.mp4'
	},
	{
		src: `${blob}/JJStraub_empireagency-Smoking-kills.webp`,
		width: 762,
		height: 572,
		alt: 'JJ Straub: Smoking Kills',
		title: 'Smoking Kills',
		role: 'American Cancer Society',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_empireagency-Time.webp`,
		width: 434,
		height: 695,
		alt: 'JJ Straub: Kalt graut der Morgen',
		title: 'Kalt graut der Morgen',
		role: 'Grandpa',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub-Oberkommissar-Schulz-RapunzelsFluch2.webp`,
		width: 1690,
		height: 2535,
		alt: 'JJ Straub: Kommissar',
		title: 'Rapunzels Fluch 2',
		role: 'Oberkommissar Schulz',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub-Pfarrer.webp`,
		width: 2262,
		height: 2775,
		alt: 'JJ Straub: Pfarrer',
		title: 'Pfarrer',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub-ZAV-Rick1A.webp`,
		width: 2667,
		height: 3333,
		alt: 'JJ Straub: Rick',
		title: 'Rick',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub_TJ2.webp`,
		width: 341,
		height: 475,
		alt: 'JJ Straub: Portrait',
		title: 'JJ Straub',
		category: 'portrait'
	},
	{
		src: `${blob}/Black-Kernel.webp`,
		width: 2987,
		height: 3000,
		alt: 'JJ Straub: Black 9',
		title: 'Black 9',
		role: 'Kernel',
		category: 'character'
	},
	{
		src: `${blob}/JJStraub-Pavlo-head1.webp`,
		width: 2425,
		height: 3600,
		alt: 'JJ Straub: Portrait',
		title: 'JJ Straub',
		category: 'portrait'
	}
];
