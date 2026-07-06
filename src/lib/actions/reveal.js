// Svelte action: fade/slide an element in when it scrolls into view.
// Pairs with the `.reveal` / `.reveal.is-visible` classes in app.postcss.
//
// Usage:  <div class="reveal" use:reveal={{ delay: 120 }}> … </div>
// Respects prefers-reduced-motion (the CSS already neutralises the transform).

export function reveal(node, options = {}) {
	const { delay = 0, threshold = 0.15, once = true, rootMargin = '0px 0px -10% 0px' } = options;

	node.classList.add('reveal');
	if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);

	// No IntersectionObserver (SSR / very old browser): show immediately.
	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.classList.remove('is-visible');
				}
			}
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
