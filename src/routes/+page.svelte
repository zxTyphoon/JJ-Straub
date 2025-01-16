<script>
	import StickyContent from '$lib/components/StickyContent.svelte';
</script>

<main id="page">
	<div>
		<StickyContent>
			<img
				class="mr-25 w-auto rounded-lg mb-5 transition-all duration-300 filter grayscale hover:grayscale-0"
				src={'/img/JJStraub_Headshot.jpg'}
				alt="JJ Straub Headshot"
			/>
		</StickyContent>
	</div>

	<section class="columns-1 lg:columns-2 xl:columns-3 gap-4 relative bottom-0 left-0 w-full">
		<div class="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-primary-300"></div>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-LA-Kings.jpg'}
				alt="LA Kings"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				LA Kings - Commercial - Producer
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-JJ-peace.jpg'}
				alt="Make me feel"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Make me feel - Dr. Buchenwald
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-CuttingSur.jpg'}
				alt="Cutting Sur"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Cutting Surface - Dr. Belial
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={'/img/JJStraub_empireagency-eBay.jpg'} alt="EBay" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				eBay - Commercial
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-General.jpg'}
				alt="General"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Reparation Day - Columbian General
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-Reinfressen1.jpg'}
				alt="Reinfressen 1"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Reinfressen - Bernd
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-Sylvia.jpg'}
				alt="Sylvia"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Sylvia - upset customer
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-Piano-Bar.jpg'}
				alt="Piano Bar"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Piano Bar - John
			</figcaption>
		</figure>
		<figure class="relative cursor-pointer">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-TheOffer.jpg'}
				alt="The Offer"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				The Offer
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-RapunzelsFluch2.jpg'}
				alt="Rapunzel's Curse"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Rapunzels Fluch 2 - Oberkommisar Schulz
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-TheWindow1.jpg'}
				alt="The Window"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				The Window - Frederick
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-SAT1-Notruf.jpg'}
				alt="SAT1 Notruf"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				SAT1 Notruf
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={'/img/JJStraub_Headshot2.jpg'} alt="JJ Straub" />
			<!-- 	<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				JJ Straub
			</figcaption> -->
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={'/img/JJStraub_empireagency-NYPD.jpg'} alt="NYPD" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				(ADD MOVIE) - NYPD Officer
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-Farmer.jpg'}
				alt="Farmer"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				(ADD MOVIE) - Farmer
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-Life-KinoLoop.jpg'}
				alt="L.I.F.E"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				L.I.F.E - Philosophy Teacher
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-FBI-Karma.jpg'}
				alt="FBI Karma"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				FBI Karma
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-Jawlock-DR-Dentist.jpg'}
				alt="Jawlock DR Dentist"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Jawlock DR Dentist
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-Feeder.jpg'}
				alt="Feeder"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Feeder - The Vet
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-RedBloom-CIA.jpg'}
				alt="RedBloom CIA"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				RedBloom CIA
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-L.I.F.E.-KinoLoop.jpg'}
				alt="L.I.F.E. KinoLoop"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				L.I.F.E.
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-Karma-PI.jpg'}
				alt="Karma PI"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Karma - Father
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-DerPate-HeadShot.jpg'}
				alt="Der Pate HeadShot"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Der Pate
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-VonLoewenberg.jpg'}
				alt="Von Loewenberg"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Mask of the Schwarzen-Loewenbergs
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={'/img/JJStraub_empireagency-Ali-LA.jpg'} alt="Ali" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Diamanten - Alis Boss about to fire him
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-Professor.jpg'}
				alt="Professor"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Professor
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={'/img/JJStraub_empireagency-TJ.jpg'} alt="TJ" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				TJ
			</figcaption>
		</figure>
		<figure class="relative">
			<img
				class="rounded-lg mb-4 w-full"
				src={'/img/JJStraub_empireagency-TheWald.jpg'}
				alt="The Wald"
			/>
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				The Wald - Injured Soldier begging to be shot
			</figcaption>
		</figure>
	</section>
</main>
