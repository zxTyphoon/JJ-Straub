<script>
	import { _ } from 'svelte-i18n';
</script>

<footer class="relative bg-night-950 border-t border-white/5">
	<div
		class="px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
	>
		<p class="font-display text-lg text-bone">
			JJ <em class="italic text-brass">Straub</em>
			<span class="font-sans text-xs text-bone-faint ml-3 tracking-[0.15em] uppercase">
				{$_('actor')} · Berlin / Los Angeles
			</span>
		</p>

		<div class="flex items-center gap-6 text-xs tracking-[0.1em]">
			<a href="/legal" class="text-bone-muted hover:text-brass transition-colors duration-300">
				{$_('legalNotice')}
			</a>
			<span class="text-bone-faint">—</span>
			<span class="text-bone-faint">© {new Date().getFullYear()} JJ Straub</span>
		</div>
	</div>
</footer>
