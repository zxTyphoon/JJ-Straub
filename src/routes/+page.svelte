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
	import Life from '$lib/img/Life-Film-KinoLoop.jpg';

	import Headshot from '$lib/img/JJStraub_Headshot.avif';

	
	import StickyContent from '$lib/components/StickyContent.svelte';
</script>

<main>
	<div>
		<StickyContent>
			<img
				class="h-auto w-full object-cover rounded-lg mb-5"
				src={Headshot}
				alt="JJ Straub Headshot"
			/>
		</StickyContent>
	</div>

	<section class="grid grid-cols-3 md:grid-cols-4 gap-4">
		<div class="grid gap-5">
			<div>
				<img class="h-auto max-w-full rounded-lg" src={Ali} alt="Ali" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={Cutting} alt="Cutting Sur" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={EBay} alt="EBay" />
			</div>
		</div>
		<div class="grid gap-5">
			<div>
				<img class="h-auto max-w-full rounded-lg" src={Rapunzel} alt="Rapunzel's Curse" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={Life} alt="Life Film KinoLoop" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={LAKings} alt="LA Kings" />
			</div>
		</div>
		<div class="grid gap-5">
			<div>
				<img class="h-auto max-w-full rounded-lg" src={Feeder} alt="Feeder" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={Offer} alt="The Offer" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={Wald} alt="The Wald" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={Window} alt="The Window" />
			</div>
		</div>
		<div class="grid gap-5">
			<div>
				<img class="h-auto max-w-full rounded-lg" src={Loewe} alt="Von Loewenberg" />
			</div>
			<div>
				<img class="h-auto max-w-full rounded-lg" src={General} alt="General" />
			</div>
		</div>
	</section>
</main>
