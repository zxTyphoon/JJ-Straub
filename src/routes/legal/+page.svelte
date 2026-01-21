<script>
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Legal Information - JJ Straub Portfolio</title>
	<meta name="description" content="Legal and privacy information for Juergen Straub's website." />
	<link rel="canonical" href="https://www.jjstraub.com/legal" />
</svelte:head>

<div class="min-h-screen bg-surface-900 pt-24 pb-16">
	<div class="max-w-4xl mx-auto px-6 md:px-12">
		<!-- Header -->
		<div class="mb-12">
			<a 
				href="/" 
				class="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 mb-6 group"
			>
				<svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
				</svg>
				{$_('backToPortfolio')}
			</a>
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{$_('legalNotice')}</h1>
			<div class="h-1 w-24 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"></div>
		</div>

		<!-- Content -->
		<div class="space-y-10">
			<section class="bg-surface-800/50 rounded-2xl p-6 md:p-8 border border-white/5">
				<h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
					<span class="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
						<svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
						</svg>
					</span>
					Contact Information
				</h2>
				<div class="space-y-2 text-white/70">
					<p><span class="text-white/50">Name:</span> Juergen Straub</p>
					<p><span class="text-white/50">Address:</span> Ernst-Bumm-Weg 5, 140059 Berlin, Germany</p>
					<p><span class="text-white/50">Phone:</span> +49 (0) 151 72187675</p>
					<p><span class="text-white/50">Email:</span> <a href="mailto:jj@jjstraub.com" class="text-primary-400 hover:text-primary-300 transition-colors">jj@jjstraub.com</a></p>
				</div>
			</section>

			<section class="bg-surface-800/50 rounded-2xl p-6 md:p-8 border border-white/5">
				<h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
					<span class="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
						<svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
						</svg>
					</span>
					Responsible for Website
				</h2>
				<div class="space-y-2 text-white/70">
					<p><span class="text-white/50">Name:</span> Sean Tyler Straub</p>
					<p><span class="text-white/50">Address:</span> Edith-Stein-Straße 66, 68766 Hockenheim, Germany</p>
				</div>
			</section>

			<section class="bg-surface-800/50 rounded-2xl p-6 md:p-8 border border-white/5">
				<h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
					<span class="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
						<svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
						</svg>
					</span>
					Disclaimer
				</h2>
				<p class="text-white/70 leading-relaxed">
					The information contained on this website is for general information purposes only. The
					information is provided by Sean Tyler Straub and while we endeavour to keep the information up
					to date and correct, we make no representations or warranties of any kind, express or implied,
					about the completeness, accuracy, reliability, suitability or availability with respect to the
					website or the information, products, services, or related graphics contained on the website
					for any purpose. Any reliance you place on such information is therefore strictly at your own
					risk. We do not take responsibility for the content of external websites that may be linked to
					from this website.
				</p>
			</section>

			<section class="bg-surface-800/50 rounded-2xl p-6 md:p-8 border border-white/5">
				<h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
					<span class="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
						<svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
						</svg>
					</span>
					Copyright
				</h2>
				<p class="text-white/70 leading-relaxed">
					All content included on this site, such as text, graphics, logos, images, and software, is the
					property of the respective copyright holders, and protected by international copyright laws.
					The use of images featuring Juergen Straub is done with the permission of the photographers.
					The structure, design, and compilation of the website are the exclusive property of Sean Tyler
					Straub and are also protected by international copyright laws.
				</p>
			</section>

			<section class="bg-surface-800/50 rounded-2xl p-6 md:p-8 border border-white/5">
				<h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
					<span class="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
						<svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
						</svg>
					</span>
					Privacy Policy
				</h2>
				<div class="space-y-4 text-white/70 leading-relaxed">
					<p>
						Our website collects only anonymous data to help us understand usage patterns and improve our
						services. We do not track, store, or share any personal information.
					</p>
					<p>
						Our website may link to external sites that are not operated by us. Please be aware that we
						have no control over the content and practices of these sites and cannot accept responsibility
						or liability for their respective privacy policies.
					</p>
					<p>If you have any questions about this privacy policy, feel free to contact us.</p>
				</div>
			</section>

			<section class="bg-surface-800/50 rounded-2xl p-6 md:p-8 border border-white/5">
				<h2 class="text-xl font-semibold text-white mb-4 flex items-center gap-3">
					<span class="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
						<svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
						</svg>
					</span>
					Representation
				</h2>
				<p class="text-white/70 leading-relaxed">
					Juergen Straub is represented by ZAV-Berlin, which handles all professional inquiries and
					bookings. For further information, please contact his Agent Sonja Sommer at
					<a href="mailto:sonja.sommer@arbeitsagentur.de" class="text-primary-400 hover:text-primary-300 transition-colors">sonja.sommer@arbeitsagentur.de</a>.
				</p>
			</section>
		</div>
	</div>
</div>
