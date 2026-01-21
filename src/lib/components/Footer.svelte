<script>
	import { _ } from 'svelte-i18n';
	
	import Instagram from '$lib/img/Instagram.svg';
	import IMDB from '$lib/img/imdb.svg';
	import YouTube from '$lib/img/YouTube.svg';
	import LinkedIn from '$lib/img/linkedin.svg';

	const socialLinks = [
		{ href: 'https://www.instagram.com/jjstraub1', icon: Instagram, label: 'Instagram' },
		{ href: 'https://www.imdb.com/name/nm0833707/', icon: IMDB, label: 'IMDB' },
		{ href: 'https://www.youtube.com/user/JJatUtube', icon: YouTube, label: 'YouTube' },
		{ href: 'https://www.linkedin.com/in/jj-straub/', icon: LinkedIn, label: 'LinkedIn' }
	];
</script>

<footer class="relative bg-surface-950 border-t border-white/5">
	<!-- Gradient accent -->
	<div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
	
	<div class="px-6 md:px-12 lg:px-20 py-12 md:py-16">
		<div class="flex flex-col md:flex-row items-center justify-between gap-8">
			<!-- Left side - Logo and tagline -->
			<div class="text-center md:text-left">
				<h3 class="text-2xl font-bold text-white mb-2">
					JJ <span class="text-primary-400">Straub</span>
				</h3>
				<p class="text-white/50 text-sm">{$_('actor')} • Berlin / Los Angeles</p>
			</div>

			<!-- Center - Social links -->
			<div class="flex items-center gap-3">
				{#each socialLinks as { href, icon, label }}
					<a
						{href}
						target="_blank"
						rel="noreferrer"
						class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-primary-500/20 hover:scale-110"
						aria-label={label}
					>
						<img
							class="h-5 w-auto"
							src={icon}
							alt={label}
						/>
					</a>
				{/each}
			</div>

			<!-- Right side - Legal -->
			<div class="flex items-center gap-6 text-sm">
				<a
					href="/legal"
					class="text-white/50 hover:text-primary-400 transition-colors duration-300"
				>
					{$_('legalNotice')}
				</a>
				<span class="text-white/20">|</span>
				<span class="text-white/40">© {new Date().getFullYear()} JJ Straub</span>
			</div>
		</div>
	</div>
</footer>
