<script>
	import { _ } from 'svelte-i18n';

	import Instagram from '$lib/img/Instagram.svg';
	import IMDB from '$lib/img/imdb.svg';
	import YouTube from '$lib/img/YouTube.svg';
	import LinkedIn from '$lib/img/linkedin.svg';

	const socials = [
		{ href: 'https://www.imdb.com/name/nm0833707/', icon: IMDB, label: 'IMDb' },
		{ href: 'https://www.instagram.com/jjstraub1', icon: Instagram, label: 'Instagram' },
		{ href: 'https://www.youtube.com/user/JJatUtube', icon: YouTube, label: 'YouTube' },
		{ href: 'https://www.linkedin.com/in/jj-straub/', icon: LinkedIn, label: 'LinkedIn' }
	];
</script>

<footer class="relative border-t border-bone/10 bg-ink-950">
	<div
		class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
	></div>

	<div class="mx-auto max-w-container px-5 py-12 md:px-10 md:py-14 lg:px-16">
		<div class="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
			<div class="text-center md:text-left">
				<p class="font-display text-2xl text-bone" style="font-variation-settings:'opsz' 100">
					JJ<span class="text-accent">.</span>Straub
				</p>
				<p class="mt-1 text-sm text-bone-dim">{$_('actor')} · Berlin · Los Angeles</p>
			</div>

			<div class="flex items-center gap-2">
				{#each socials as { href, icon, label }}
					<a
						{href}
						target="_blank"
						rel="noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-bone/5 transition-all duration-300 hover:bg-accent/15"
						aria-label={label}
					>
						<img class="h-5 w-5" src={icon} alt={label} />
					</a>
				{/each}
			</div>

			<div class="flex items-center gap-5 text-sm text-bone-dim">
				<a href="/legal" class="transition-colors hover:text-accent">{$_('legalNotice')}</a>
				<span class="opacity-30">·</span>
				<span>© {new Date().getFullYear()} JJ Straub</span>
			</div>
		</div>
	</div>
</footer>
