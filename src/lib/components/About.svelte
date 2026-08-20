<script>
	import { _ } from 'svelte-i18n';
	import { reveal } from '$lib/actions/reveal.js';
	import { contact } from '$lib/data/links.js';

	$: facts = [
		{
			label: $_('aboutSection.training'),
			value: 'Lee Strasberg · Stella Adler · Uta Hagen'
		},
		{
			label: $_('aboutSection.languages'),
			value: $_('aboutSection.languagesValue')
		},
		{
			label: $_('aboutSection.basedIn'),
			value: 'Berlin · Los Angeles'
		},
		{
			label: $_('aboutSection.representation'),
			value: `${contact.agency.name} — ${contact.agency.agent}`
		}
	];
</script>

<section id="about" class="relative scroll-mt-20 bg-night-950 border-y border-white/5">
	<div class="px-6 md:px-10 lg:px-16 py-24 md:py-36">
		<!-- Section label -->
		<div class="flex items-center gap-4 mb-12 md:mb-16" use:reveal>
			<span class="text-[0.65rem] uppercase tracking-[0.3em] text-brass">02</span>
			<span class="h-px w-10 bg-brass/50"></span>
			<span class="text-[0.65rem] uppercase tracking-[0.3em] text-bone-muted">
				{$_('aboutSection.label')}
			</span>
		</div>

		<div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
			<!-- Portrait -->
			<div class="lg:col-span-5" use:reveal={{ delay: 100 }}>
				<div class="relative max-w-md mx-auto lg:mx-0">
					<div class="absolute -top-4 -left-4 w-full h-full border border-brass/40"></div>
					<img
						src="https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_Smiling.webp"
						alt="JJ Straub portrait"
						class="relative w-full grayscale-[20%] contrast-105"
						loading="lazy"
						on:contextmenu|preventDefault
						draggable="false"
					/>
					<p
						class="absolute bottom-4 left-4 text-[0.6rem] uppercase tracking-[0.3em] text-bone/80 bg-night-950/60 backdrop-blur-sm px-3 py-1.5"
					>
						Juergen J. Straub
					</p>
				</div>
			</div>

			<!-- Bio + facts -->
			<div class="lg:col-span-7">
				<p
					class="font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-bone mb-8"
					use:reveal={{ delay: 150 }}
				>
					{$_('about')}
				</p>
				<p
					class="text-sm md:text-base text-bone-muted leading-relaxed max-w-xl mb-14"
					use:reveal={{ delay: 250 }}
				>
					{$_('living')}
				</p>

				<div use:reveal={{ delay: 300 }}>
					{#each facts as fact}
						<div
							class="grid sm:grid-cols-3 gap-1 sm:gap-6 py-4 border-t border-white/10 last:border-b"
						>
							<span class="text-[0.65rem] uppercase tracking-[0.25em] text-bone-faint pt-1">
								{fact.label}
							</span>
							<span class="sm:col-span-2 text-sm md:text-base text-bone">
								{fact.value}
							</span>
						</div>
					{/each}
				</div>

				<a
					href="https://www.imdb.com/name/nm0833707/"
					target="_blank"
					rel="noreferrer"
					class="group inline-flex items-center gap-3 mt-12 px-6 py-3 border border-bone/25 text-xs uppercase tracking-[0.25em] text-bone hover:border-brass hover:text-brass transition-colors duration-300"
					use:reveal={{ delay: 350 }}
				>
					{$_('aboutSection.imdb')}
					<span
						class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
						>↗</span
					>
				</a>
			</div>
		</div>
	</div>
</section>
