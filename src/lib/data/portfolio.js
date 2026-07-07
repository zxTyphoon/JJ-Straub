// All portfolio credits. Cover images live in the Vercel Blob store; video
// clips are served from static/. `category` is one of: film | commercial |
// game | portrait. The "clips" filter is derived from the `video` field.
const blob = 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com';

export const categories = ['all', 'film', 'commercial', 'game', 'portrait', 'clips'];

export const works = [
	{
		src: `${blob}/JJStraub_empireagency-Sennheiser-Cowboy1.webp`,
		width: 1437,
		height: 1175,
		alt: 'JJ Straub: Sennheiser Cowboy',
		title: 'Sennheiser',
		role: 'Cowboy',
		category: 'commercial'
	},
	{
		src: `${blob}/JJStraub_empireagency-TheWald.webp`,
		width: 1343,
		height: 719,
		alt: 'JJ Straub: The Wald',
		title: 'The Wald',
		role: 'Injured Soldier',
		category: 'film',
		video: '/JJStraub_empireagency-THE-WALD.mp4'
	},
	{
		src: `${blob}/JJStraub_empireagency-Kommissar.webp`,
		width: 1154,
		height: 1280,
		alt: 'JJ Straub: Kommissar',
		title: 'Rapunzels Fluch 2',
		role: 'Oberkommissar Schulz',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-CuttingSur.webp`,
		width: 1250,
		height: 718,
		alt: 'JJ Straub: Cutting Surface',
		title: 'Cutting Surface',
		role: 'Dr. Belial',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-ebay-social-media.webp`,
		width: 485,
		height: 677,
		alt: 'JJ Straub: eBay Social Media Commercial',
		title: 'eBay',
		role: 'Social Media Commercial',
		category: 'commercial',
		video: '/JJStraub_empireagency-eBay-social-media.mp4'
	},
	{
		src: `${blob}/JJStraub_empireagency-JJ-peace.webp`,
		width: 583,
		height: 683,
		alt: 'JJ Straub: Make Me Feel',
		title: 'Make Me Feel',
		role: 'Dr. Buchenwald',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Reinfressen1-2.webp`,
		width: 1676,
		height: 1934,
		alt: 'JJ Straub: Reinfressen',
		title: 'Reinfressen',
		role: 'Bernd',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-SAT1-Notruf.webp`,
		width: 382,
		height: 346,
		alt: 'JJ Straub: SAT1 Notruf',
		title: 'SAT1 Notruf',
		role: '',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-RapunzelsFluch2.webp`,
		width: 1255,
		height: 729,
		alt: "JJ Straub: Rapunzel's Curse",
		title: 'Rapunzels Fluch 2',
		role: 'Oberkommissar Schulz',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-General.webp`,
		width: 1707,
		height: 2220,
		alt: 'JJ Straub: General',
		title: 'Reparation Day',
		role: 'Columbian General',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Sylvia.webp`,
		width: 1495,
		height: 846,
		alt: 'JJ Straub: Sylvia',
		title: 'Sylvia',
		role: 'Upset Customer',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-LastCustomer-Walter.webp`,
		width: 805,
		height: 472,
		alt: 'JJ Straub: Last Customer',
		title: 'Last Customer',
		role: 'Walter',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-LA-Kings.webp`,
		width: 1555,
		height: 833,
		alt: 'JJ Straub: LA Kings',
		title: 'LA Kings',
		role: 'Commercial',
		category: 'commercial',
		video: '/JJStraub_empireagency-LAKings.mp4'
	},
	{
		src: `${blob}/JJStraub_empireagency-L.I.F.E.-KinoLoop.webp`,
		width: 637,
		height: 661,
		alt: 'JJ Straub: L.I.F.E. KinoLoop',
		title: 'L.I.F.E.',
		role: 'Philosophy Teacher',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_Golfing.webp`,
		width: 621,
		height: 923,
		alt: 'JJ Straub: Golfing',
		title: 'Golfing',
		role: '',
		category: 'portrait'
	},
	{
		src: `${blob}/JJStraub_empireagency-Diamanten.webp`,
		width: 1554,
		height: 838,
		alt: 'JJ Straub: Diamanten',
		title: 'Diamanten',
		role: 'Ali',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-TheOffer.webp`,
		width: 699,
		height: 498,
		alt: 'JJ Straub: The Offer',
		title: 'The Offer',
		role: '',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-eBay.webp`,
		width: 1277,
		height: 807,
		alt: 'JJ Straub: eBay',
		title: 'eBay',
		role: 'Commercial',
		category: 'commercial',
		video: '/JJStraub_EmpireAgency-eBay3.MP4'
	},
	{
		src: `${blob}/JJStraub_empireagency-Coinstar.webp`,
		width: 310,
		height: 423,
		alt: 'JJ Straub: Coinstar',
		title: 'Coinstar',
		role: 'Commercial',
		category: 'commercial'
	},
	{
		src: `${blob}/JJStraub_empireagency-Piano-Bar.webp`,
		width: 797,
		height: 1200,
		alt: 'JJ Straub: Piano Bar',
		title: 'Piano Bar',
		role: 'John',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Professor.webp`,
		width: 926,
		height: 677,
		alt: 'JJ Straub: Professor',
		title: 'Professor',
		role: '',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Kingdom-Come-Deliverance-char.webp`,
		width: 480,
		height: 570,
		alt: 'JJ Straub: Kingdom Come Deliverance',
		title: 'Kingdom Come Deliverance 2',
		role: 'Martin Oderin',
		category: 'game'
	},
	{
		src: `${blob}/JJStraub_Smiling.webp`,
		width: 1263,
		height: 1595,
		alt: 'JJ Straub: Smiling',
		title: 'Portrait',
		role: '',
		category: 'portrait'
	},
	{
		src: `${blob}/JJStraub_empireagency-Jawlock-DR-Dentist.webp`,
		width: 444,
		height: 687,
		alt: 'JJ Straub: Jawlock DR Dentist',
		title: 'Jawlock',
		role: 'Dentist',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Kingdom-Come-Deliverance.webp`,
		width: 842,
		height: 1600,
		alt: 'JJ Straub: Kingdom Come Deliverance',
		title: 'Kingdom Come Deliverance 2',
		role: 'Motion Capture',
		category: 'game'
	},
	{
		src: `${blob}/JJStraub_Headshot_Smile-old.webp`,
		width: 1856,
		height: 2000,
		alt: 'JJ Straub',
		title: 'Portrait',
		role: '',
		category: 'portrait'
	},
	{
		src: `${blob}/JJStraub_empireagency-NYPD.webp`,
		width: 434,
		height: 588,
		alt: 'JJ Straub: NYPD',
		title: 'Long Journey',
		role: 'NYPD Officer',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-TheWindow1.webp`,
		width: 1600,
		height: 809,
		alt: 'JJ Straub: The Window',
		title: 'The Window',
		role: 'Frederick',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Farmer.webp`,
		width: 590,
		height: 797,
		alt: 'JJ Straub: Farmer',
		title: 'Farmer',
		role: '',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Life-KinoLoop.webp`,
		width: 1119,
		height: 803,
		alt: 'JJ Straub: L.I.F.E',
		title: 'L.I.F.E.',
		role: 'Philosophy Teacher',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-From Russia with Love-BND-Agent.webp`,
		width: 508,
		height: 588,
		alt: 'JJ Straub: From Russia with Love',
		title: 'From Russia with Love',
		role: 'BND Agent',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Karma.webp`,
		width: 640,
		height: 428,
		alt: 'JJ Straub: Karma',
		title: 'Karma',
		role: 'Father',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-RedBloom-CIA.webp`,
		width: 1933,
		height: 1137,
		alt: 'JJ Straub: RedBloom CIA',
		title: 'RedBloom',
		role: 'CIA',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Feeder.webp`,
		width: 1240,
		height: 718,
		alt: 'JJ Straub: Feeder',
		title: 'Feeder',
		role: 'The Vet',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-DerPate-HeadShot.webp`,
		width: 303,
		height: 361,
		alt: 'JJ Straub: Der Pate',
		title: 'Der Pate',
		role: '',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-VonLoewenberg.webp`,
		width: 1550,
		height: 841,
		alt: 'JJ Straub: Von Loewenberg',
		title: 'Mask of the Schwarzen-Loewenbergs',
		role: 'Hans',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Booth-Game.webp`,
		width: 399,
		height: 545,
		alt: 'JJ Straub: Booth Game',
		title: 'The Booth Game',
		role: '',
		category: 'film',
		video: '/JJStraub_empireagency-Booth-Game.mp4'
	},
	{
		src: `${blob}/JJStraub_empireagency-Reinfressen.webp`,
		width: 1599,
		height: 1066,
		alt: 'JJ Straub: Reinfressen',
		title: 'Reinfressen',
		role: 'Bernd',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-TJ.webp`,
		width: 480,
		height: 639,
		alt: 'JJ Straub: TJ',
		title: 'TJ',
		role: '',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-100Stories.webp`,
		width: 1098,
		height: 1328,
		alt: 'JJ Straub: 100 Stories',
		title: '100 Stories',
		role: 'Kurt',
		category: 'film'
	},
	{
		src: `${blob}/JJStraub_empireagency-Cloud-Lawyer.webp`,
		width: 1024,
		height: 1240,
		alt: 'JJ Straub: Cloud Lawyer',
		title: 'Cloud Lawyer',
		role: 'Larry H. Schitt',
		category: 'film',
		video: '/JJStraub_empireagency-Cloud-Lawyer.mp4'
	},
	{
		src: `${blob}/JJStraub_empireagency-Smoking-kills.webp`,
		width: 762,
		height: 572,
		alt: 'JJ Straub: Smoking Kills',
		title: 'Smoking Kills',
		role: 'American Cancer Society',
		category: 'commercial'
	},
	{
		src: `${blob}/JJStraub_empireagency-Time.webp`,
		width: 434,
		height: 695,
		alt: 'JJ Straub: Kalt graut der Morgen',
		title: 'Kalt graut der Morgen',
		role: 'Grandpa',
		category: 'film'
	}
];
