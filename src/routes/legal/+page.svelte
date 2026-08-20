<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Legal Information - JJ Straub Portfolio</title>
	<meta name="description" content="Legal and privacy information for Juergen Straub's website." />
	<link rel="canonical" href="https://www.jjstraub.com/legal" />
</svelte:head>

<div class="min-h-screen pt-28 md:pt-36 pb-24 px-6 md:px-10 lg:px-16">
	<div class="max-w-3xl">
		<!-- Header -->
		<a
			href="/"
			class="group inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-bone-muted hover:text-brass transition-colors duration-300 mb-10"
		>
			<span class="group-hover:-translate-x-1 transition-transform duration-300">←</span>
			{$_('backToPortfolio')}
		</a>

		<h1 class="font-display text-5xl md:text-7xl text-bone mb-4">
			{$_('legalNotice')}
		</h1>
		<div class="h-px w-24 bg-brass mb-16"></div>

		<div class="space-y-14">
			<section>
				<h2 class="font-display italic text-2xl md:text-3xl text-brass mb-5">
					Contact Information
				</h2>
				<div class="space-y-2 text-sm md:text-base text-bone-muted leading-relaxed">
					<p><span class="text-bone-faint">Name:</span> Juergen Straub</p>
					<p>
						<span class="text-bone-faint">Address:</span> Ernst-Bumm-Weg 5, 14059 Berlin, Germany
					</p>
					<p><span class="text-bone-faint">Phone:</span> +49 (0) 151 72187675</p>
					<p>
						<span class="text-bone-faint">Email:</span>
						<a
							href="mailto:jj@jjstraub.com"
							class="text-bone hover:text-brass transition-colors duration-300"
						>
							jj@jjstraub.com
						</a>
					</p>
				</div>
			</section>

			<section class="pt-10 border-t border-white/10">
				<h2 class="font-display italic text-2xl md:text-3xl text-brass mb-5">
					Responsible for Website
				</h2>
				<div class="space-y-2 text-sm md:text-base text-bone-muted leading-relaxed">
					<p><span class="text-bone-faint">Name:</span> Sean Tyler Straub</p>
					<p>
						<span class="text-bone-faint">Address:</span> Edith-Stein-Straße 66, 68766 Hockenheim, Germany
					</p>
				</div>
			</section>

			<section class="pt-10 border-t border-white/10">
				<h2 class="font-display italic text-2xl md:text-3xl text-brass mb-5">Disclaimer</h2>
				<p class="text-sm md:text-base text-bone-muted leading-relaxed">
					The information contained on this website is for general information purposes only. The
					information is provided by Sean Tyler Straub and while we endeavour to keep the
					information up to date and correct, we make no representations or warranties of any kind,
					express or implied, about the completeness, accuracy, reliability, suitability or
					availability with respect to the website or the information, products, services, or
					related graphics contained on the website for any purpose. Any reliance you place on such
					information is therefore strictly at your own risk. We do not take responsibility for the
					content of external websites that may be linked to from this website.
				</p>
			</section>

			<section class="pt-10 border-t border-white/10">
				<h2 class="font-display italic text-2xl md:text-3xl text-brass mb-5">Copyright</h2>
				<p class="text-sm md:text-base text-bone-muted leading-relaxed">
					All content included on this site, such as text, graphics, logos, images, and software, is
					the property of the respective copyright holders, and protected by international copyright
					laws. The use of images featuring Juergen Straub is done with the permission of the
					photographers. The structure, design, and compilation of the website are the exclusive
					property of Sean Tyler Straub and are also protected by international copyright laws.
				</p>
			</section>

			<section class="pt-10 border-t border-white/10">
				<h2 class="font-display italic text-2xl md:text-3xl text-brass mb-5">Privacy Policy</h2>
				<div class="space-y-4 text-sm md:text-base text-bone-muted leading-relaxed">
					<p>
						Our website collects only anonymous data to help us understand usage patterns and
						improve our services. We do not track, store, or share any personal information.
					</p>
					<p>
						Our website may link to external sites that are not operated by us. Please be aware that
						we have no control over the content and practices of these sites and cannot accept
						responsibility or liability for their respective privacy policies.
					</p>
					<p>If you have any questions about this privacy policy, feel free to contact us.</p>
				</div>
			</section>

			<section class="pt-10 border-t border-white/10">
				<h2 class="font-display italic text-2xl md:text-3xl text-brass mb-5">Representation</h2>
				<p class="text-sm md:text-base text-bone-muted leading-relaxed">
					Juergen Straub is represented by ZAV-Berlin, which handles all professional inquiries and
					bookings. For further information, please contact his Agent Sonja Sommer at
					<a
						href="mailto:sonja.sommer@arbeitsagentur.de"
						class="text-bone hover:text-brass transition-colors duration-300"
					>
						sonja.sommer@arbeitsagentur.de
					</a>.
				</p>
			</section>
		</div>
	</div>
</div>
