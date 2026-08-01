<script>
	import { _ } from 'svelte-i18n';
	import { reveal } from '$lib/actions/reveal.js';

	const portrait = 'https://iet4nqumkcygt4t7.public.blob.vercel-storage.com/JJStraub_Smiling.webp';

	const stats = [
		{ value: '40+', key: 'statRoles' },
		{ value: 'DE · EN', key: 'statLanguages' },
		{ value: 'NY · LA', key: 'statTrained' }
	];
</script>

<section id="about" class="relative scroll-mt-24 border-t border-bone/5 py-24 md:py-32">
	<div class="mx-auto grid max-w-container gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-16">
		<!-- Portrait -->
		<div class="lg:col-span-5">
			<div class="reveal relative" use:reveal>
				<div class="absolute -inset-3 -z-10 rounded-[2rem] border border-accent/20"></div>
				<figure class="relative overflow-hidden rounded-3xl bg-ink-800">
					<img
						src={portrait}
						alt="JJ Straub portrait"
						loading="lazy"
						decoding="async"
						class="aspect-[4/5] w-full object-cover object-top grayscale contrast-[1.04] transition-all duration-700 hover:grayscale-0"
						oncontextmenu={(e) => e.preventDefault()}
						draggable="false"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent"
					></div>
					<figcaption
						class="absolute bottom-5 left-5 text-xs uppercase tracking-kicker text-bone/80"
					>
						Jürgen J. Straub
					</figcaption>
				</figure>
			</div>
		</div>

		<!-- Text -->
		<div class="lg:col-span-7 lg:pt-6">
			<p class="kicker mb-8 reveal" use:reveal>
				<span class="h-px w-10 bg-accent"></span>
				{$_('statementKicker')}
			</p>

			<blockquote
				class="reveal font-display text-3xl font-light leading-tight text-balance text-bone sm:text-4xl md:text-5xl"
				use:reveal={{ delay: 80 }}
				style="font-variation-settings:'opsz' 100"
			>
				<span class="text-accent">“</span>{$_('statementQuote')}<span class="text-accent">”</span>
			</blockquote>

			<div
				class="reveal mt-9 max-w-2xl space-y-5 text-pretty text-bone-muted md:text-lg"
				use:reveal={{ delay: 160 }}
			>
				<p>{$_('about')}</p>
				<p>{$_('living')}</p>
			</div>

			<!-- Stats -->
			<dl
				class="reveal mt-11 grid grid-cols-3 gap-6 border-t border-bone/10 pt-8"
				use:reveal={{ delay: 240 }}
			>
				{#each stats as stat}
					<div>
						<dt
							class="font-display text-3xl font-light text-accent md:text-4xl"
							style="font-variation-settings:'opsz' 90"
						>
							{stat.value}
						</dt>
						<dd class="mt-1 text-xs uppercase tracking-[0.18em] text-bone-dim">{$_(stat.key)}</dd>
					</div>
				{/each}
			</dl>

			<a
				href="https://www.imdb.com/name/nm0833707/"
				target="_blank"
				rel="noreferrer"
				class="reveal mt-9 inline-flex items-center gap-2 text-sm font-medium text-bone transition-colors hover:text-accent"
				use:reveal={{ delay: 300 }}
			>
				{$_('imdbProfile')}
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
					><path
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M7 17L17 7M9 7h8v8"
					/></svg
				>
			</a>
		</div>
	</div>
</section>
