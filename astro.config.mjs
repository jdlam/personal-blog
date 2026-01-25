// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'github-light',
			wrap: true,
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	image: {
		// Image optimization settings
		domains: [],
		remotePatterns: [{ protocol: 'https' }],
	},
});
