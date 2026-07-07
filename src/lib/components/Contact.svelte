<script>
	import { _ } from 'svelte-i18n';
	import { reveal } from '$lib/actions/reveal.js';
	import { socials, contact } from '$lib/data/links.js';
</script>

<section id="contact" class="relative scroll-mt-20 px-6 md:px-10 lg:px-16 py-24 md:py-36">
	<!-- Section label -->
	<div class="flex items-center gap-4 mb-12 md:mb-16" use:reveal>
		<span class="text-[0.65rem] uppercase tracking-[0.3em] text-brass">03</span>
		<span class="h-px w-10 bg-brass/50"></span>
		<span class="text-[0.65rem] uppercase tracking-[0.3em] text-bone-muted">
			{$_('contactSection.label')}
		</span>
	</div>

	<!-- Big call to action -->
	<h2
		class="font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] text-bone mb-12 md:mb-20 max-w-5xl"
		use:reveal={{ delay: 100 }}
	>
		{$_('contactSection.titleA')}
		<em class="italic text-brass">{$_('contactSection.titleB')}</em>
	</h2>

	<div class="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl">
		<!-- Direct -->
		<div use:reveal={{ delay: 200 }}>
			<p class="text-[0.65rem] uppercase tracking-[0.3em] text-bone-faint mb-5">
				{$_('contactSection.direct')}
			</p>
			<a
				href="mailto:{contact.email}"
				class="group inline-block font-display italic text-2xl md:text-3xl text-bone hover:text-brass transition-colors duration-300 break-all"
			>
				{contact.email}
				<span
					class="block mt-2 h-px w-full bg-bone-faint/50 group-hover:bg-brass transition-colors duration-300"
				></span>
			</a>
		</div>

		<!-- Agency -->
		<div use:reveal={{ delay: 300 }}>
			<p class="text-[0.65rem] uppercase tracking-[0.3em] text-bone-faint mb-5">
				{$_('agentur')}
			</p>
			<p class="font-display text-2xl md:text-3xl text-bone mb-1">{contact.agency.name}</p>
			<p class="text-sm text-bone-muted mb-6">{contact.agency.agent}</p>
			<div class="flex flex-col gap-2 text-sm">
				<a
					href={contact.agency.phoneHref}
					class="text-bone-muted hover:text-brass transition-colors duration-300 w-fit"
				>
					{contact.agency.phone}
				</a>
				<a
					href="mailto:{contact.agency.email}"
					class="text-bone-muted hover:text-brass transition-colors duration-300 w-fit break-all"
				>
					{contact.agency.email}
				</a>
			</div>
		</div>
	</div>

	<!-- Elsewhere -->
	<div class="mt-20 md:mt-28 pt-10 border-t border-white/10" use:reveal={{ delay: 200 }}>
		<p class="text-[0.65rem] uppercase tracking-[0.3em] text-bone-faint mb-6">
			{$_('connect')}
		</p>
		<div class="flex flex-wrap gap-x-8 gap-y-4">
			{#each socials as { label, href }}
				<a
					{href}
					target="_blank"
					rel="noreferrer"
					class="group text-sm text-bone-muted hover:text-bone transition-colors duration-300"
				>
					{label}
					<span
						class="inline-block text-brass/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
						>↗</span
					>
				</a>
			{/each}
		</div>
	</div>
</section>
