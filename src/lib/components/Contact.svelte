<script>
	import { _ } from 'svelte-i18n';
	import { reveal } from '$lib/actions/reveal.js';

	import Instagram from '$lib/img/Instagram.svg';
	import IMDB from '$lib/img/imdb.svg';
	import YouTube from '$lib/img/YouTube.svg';
	import LinkedIn from '$lib/img/linkedin.svg';
	import Facebook from '$lib/img/Facebook.svg';
	import X from '$lib/img/X.svg';
	import XING from '$lib/img/XING.svg';
	import Filmmakers from '$lib/img/Filmmakers.svg';

	const socials = [
		{ href: 'https://www.imdb.com/name/nm0833707/', icon: IMDB, label: 'IMDb' },
		{
			href: 'https://www.filmmakers.eu/de/actors/j-j-straub',
			icon: Filmmakers,
			label: 'Filmmakers'
		},
		{ href: 'https://www.instagram.com/jjstraub1', icon: Instagram, label: 'Instagram' },
		{ href: 'https://www.youtube.com/user/JJatUtube', icon: YouTube, label: 'YouTube' },
		{ href: 'https://www.linkedin.com/in/jj-straub/', icon: LinkedIn, label: 'LinkedIn' },
		{ href: 'https://www.facebook.com/JJStraub/', icon: Facebook, label: 'Facebook' },
		{ href: 'https://x.com/JJStraub4real', icon: X, label: 'X' },
		{ href: 'https://www.xing.com/profile/Juergen_Straub23', icon: XING, label: 'XING' }
	];
</script>

<section
	id="contact"
	class="relative scroll-mt-24 overflow-hidden border-t border-bone/5 py-24 md:py-32"
>
	<!-- Accent wash -->
	<div
		class="pointer-events-none absolute inset-0 -z-10"
		style="background: radial-gradient(70% 80% at 50% 0%, rgb(var(--accent) / 0.10), transparent 70%)"
	></div>

	<div class="mx-auto max-w-container px-5 md:px-10 lg:px-16">
		<div class="grid gap-14 lg:grid-cols-12 lg:gap-10">
			<!-- CTA -->
			<div class="lg:col-span-7">
				<p class="kicker mb-6 reveal" use:reveal>
					<span class="h-px w-10 bg-accent"></span>{$_('contactKicker')}
				</p>
				<h2
					class="reveal font-display text-5xl font-light leading-[0.95] text-balance text-bone sm:text-6xl md:text-7xl"
					use:reveal={{ delay: 60 }}
					style="font-variation-settings:'opsz' 144"
				>
					{$_('contactTitle')}
				</h2>
				<p
					class="reveal mt-7 max-w-lg text-pretty text-bone-muted md:text-lg"
					use:reveal={{ delay: 140 }}
				>
					{$_('contactSubtitle')}
				</p>

				<a
					href="mailto:jj@jjstraub.com"
					class="reveal group mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-base font-medium text-ink-950 transition-all duration-300 hover:bg-accent-soft hover:shadow-glow"
					use:reveal={{ delay: 200 }}
				>
					jj@jjstraub.com
					<svg
						class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						><path
							stroke-width="1.8"
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5 12h14M13 6l6 6-6 6"
						/></svg
					>
				</a>
			</div>

			<!-- Details -->
			<div class="space-y-6 lg:col-span-5">
				<div
					class="reveal rounded-2xl border border-bone/10 bg-ink-850/60 p-6 backdrop-blur"
					use:reveal={{ delay: 120 }}
				>
					<p class="mb-3 text-xs uppercase tracking-kicker text-accent">{$_('agencyLabel')}</p>
					<p class="font-display text-xl text-bone">ZAV-Künstlervermittlung · Berlin</p>
					<p class="mt-1 text-sm text-bone-muted">Sonja Sommer</p>
					<div class="mt-4 flex flex-col gap-2 text-sm">
						<a
							href="tel:+49228502088025"
							class="inline-flex items-center gap-2 text-bone-muted transition-colors hover:text-accent"
						>
							<svg class="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								><path
									stroke-width="1.6"
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.5 1.2l-1.6.8a11 11 0 005 5l.8-1.6a1 1 0 011.2-.5l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2A16 16 0 013 5z"
								/></svg
							>
							+49 228 50208-8025
						</a>
						<a
							href="mailto:sonja.sommer@arbeitsagentur.de"
							class="inline-flex items-center gap-2 break-all text-bone-muted transition-colors hover:text-accent"
						>
							<svg
								class="h-4 w-4 flex-shrink-0 text-accent"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								><path
									stroke-width="1.6"
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
								/></svg
							>
							sonja.sommer@arbeitsagentur.de
						</a>
					</div>
				</div>

				<div class="reveal" use:reveal={{ delay: 200 }}>
					<p class="mb-3 text-xs uppercase tracking-kicker text-bone-dim">{$_('profilesLabel')}</p>
					<div class="flex flex-wrap gap-2">
						{#each socials as { href, icon, label }}
							<a
								{href}
								target="_blank"
								rel="noreferrer"
								class="flex h-11 w-11 items-center justify-center rounded-full border border-bone/10 bg-ink-800/50 transition-all duration-300 hover:border-accent/60 hover:bg-bone/5"
								aria-label={label}
								title={label}
							>
								<img class="h-5 w-5" src={icon} alt={label} />
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
