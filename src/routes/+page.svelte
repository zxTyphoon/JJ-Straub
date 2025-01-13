<script>
	import Ali from '$lib/img/JJStraub_agenturspotlight-Ali-LA.jpg';
	import Cutting from '$lib/img/JJStraub_agenturspotlight-CuttingSur.jpg';
	import EBay from '$lib/img/JJStraub_agenturspotlight-eBay.jpg';
	import Feeder from '$lib/img/JJStraub_agenturspotlight-Feeder.jpg';
	import General from '$lib/img/JJStraub_agenturspotlight-General.jpg';
	import LAKings from '$lib/img/JJStraub_agenturspotlight-LA-Kings.jpg';
	import Rapunzel from '$lib/img/JJStraub_agenturspotlight-RapunzelsFluch2.jpg';
	import Sylvia from '$lib/img/JJStraub_agenturspotlight-Sylvia.jpg';
	import Offer from '$lib/img/JJStraub_agenturspotlight-TheOffer.jpg';
	import Wald from '$lib/img/JJStraub_agenturspotlight-TheWald.jpg';
	import Window from '$lib/img/JJStraub_agenturspotlight-TheWindow1.jpg';
	import Loewe from '$lib/img/JJStraub_agenturspotlight-VonLoewenberg.jpg';
	import Pate from '$lib/img/JJStraub_empireagency-DerPate-HeadShot.jpg';
	import Farmer from '$lib/img/JJStraub_empireagency-Farmer.jpg';
	import FBI from '$lib/img/JJStraub_empireagency-FBI-Karma.jpg';
	import Jawlock from '$lib/img/JJStraub_empireagency-Jawlock-DR-Dentist.jpg';
	import Peace from '$lib/img/JJStraub_empireagency-JJ-peace.jpg';
	import Karma from '$lib/img/JJStraub_empireagency-Karma-PI.jpg';
	import KinoLoop from '$lib/img/JJStraub_empireagency-L.I.F.E.-KinoLoop.jpg';
	import Life from '$lib/img/JJStraub_empireagency-Life-KinoLoop.jpg';
	import NYPD from '$lib/img/JJStraub_empireagency-NYPD.jpg';
	import Piano from '$lib/img/JJStraub_empireagency-Piano-Bar.jpg';
	import Professor from '$lib/img/JJStraub_empireagency-Professor.jpg';
	import RedBloom from '$lib/img/JJStraub_empireagency-RedBloom-CIA.jpg';
	import Reinfressen1 from '$lib/img/JJStraub_empireagency-Reinfressen1.jpg';
	import Notruf from '$lib/img/JJStraub_empireagency-SAT1-Notruf.jpg';
	import TJ from '$lib/img/JJStraub_empireagency-TJ.jpg';
	import Face from '$lib/img/JJStraub_empireagency-Face.jpg';

	import Headshot from '$lib/img/JJStraub_Headshot.jpg';

	import StickyContent from '$lib/components/StickyContent.svelte';
</script>

<main>
	<div>
		<StickyContent>
			<img
				class="mr-25 w-auto rounded-lg mb-5 transition-all duration-300 filter grayscale hover:grayscale-0"
				src={Headshot}
				alt="JJ Straub Headshot"
			/>
		</StickyContent>
	</div>

	<section
		class="columns-1 lg:columns-2 xl:columns-3 gap-4 relative bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-800"
	>
		<!-- <div class="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black"></div> !-->
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={LAKings} alt="LA Kings" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				LA Kings - Commercial - Producer
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Peace} alt="JJ Peace" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Make me feel - Dr. Buchenwald
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Cutting} alt="Cutting Sur" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Cutting Surface - Dr. Belial
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={EBay} alt="EBay" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				eBay - Commercial
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={General} alt="General" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Reparation Day - Columbian General
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Reinfressen1} alt="Reinfressen 1" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Reinfressen - Bernd
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Sylvia} alt="Sylvia" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Sylvia - upset customer
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Piano} alt="Piano Bar" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Piano Bar - John
			</figcaption>
		</figure>
		<figure class="relative cursor-pointer">
			<img class="rounded-lg mb-4 w-full" src={Offer} alt="The Offer" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				The Offer
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Rapunzel} alt="Rapunzel's Curse" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Rapunzels Fluch 2 - Oberkommisar Schulz
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Window} alt="The Window" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				The Window - Frederick
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Notruf} alt="SAT1 Notruf" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				SAT1 Notruf
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={NYPD} alt="NYPD" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				(ADD MOVIE) - NYPD Officer
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Farmer} alt="Farmer" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				(ADD MOVIE) - Farmer
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Life} alt="L.I.F.E" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				L.I.F.E - Philosophy Teacher
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={FBI} alt="FBI Karma" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				FBI Karma
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={RedBloom} alt="RedBloom CIA" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				RedBloom CIA
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Face} alt="JJ Straub" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				JJ Straub
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Jawlock} alt="Jawlock DR Dentist" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Jawlock DR Dentist
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Feeder} alt="Feeder" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Feeder - The Vet
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={KinoLoop} alt="L.I.F.E. KinoLoop" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				L.I.F.E.
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Karma} alt="Karma PI" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Karma - Father
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Pate} alt="Der Pate HeadShot" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Der Pate
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Loewe} alt="Von Loewenberg" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Mask of the Schwarzen-Loewenbergs
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Ali} alt="Ali" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Diamanten - Alis Boss about to fire him
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Professor} alt="Professor" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				Professor
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={TJ} alt="TJ" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				TJ
			</figcaption>
		</figure>
		<figure class="relative">
			<img class="rounded-lg mb-4 w-full" src={Wald} alt="The Wald" />
			<figcaption
				class="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 mt-[-10px]"
			>
				The Wald - Injured Soldier begging to be shot
			</figcaption>
		</figure>
	</section>
	<div class="color-gray-300 h-full text-center">Design by S</div>
</main>
