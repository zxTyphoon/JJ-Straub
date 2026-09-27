// Svelte action: fades/raises an element in when it enters the viewport.
// Pairs with the [data-reveal] styles in app.postcss.
// Usage: <div use:reveal> or <div use:reveal={{ delay: 150 }}>
// Pass `enabled: false` to render the element immediately (no reveal).
export function reveal(node, { delay = 0, threshold = 0.15, enabled = true } = {}) {
	if (!enabled) return {};

	node.dataset.reveal = '';
	node.style.setProperty('--reveal-delay', `${delay}ms`);

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-revealed');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-revealed');
					observer.disconnect();
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -5% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
