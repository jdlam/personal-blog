// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { CollectionEntry } from 'astro:content';

export const SITE_TITLE = 'jlam.dev';
export const SITE_DESCRIPTION = 'Thoughts on software, technology, and other things.';
export const SITE_AUTHOR = 'J. Lam';

export function getBlogPostUrl(post: CollectionEntry<'blog'>): string {
	const d = post.data.pubDate;
	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const day = String(d.getDate()).padStart(2, '0');
	return `/blog/${year}/${month}/${day}/${post.id}/`;
}
