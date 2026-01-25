# Personal Blog

A minimal, typography-focused blog built with Astro.

## Features

- Minimal, clean design focused on readability
- Dark/light mode with user preference detection
- Syntax highlighting with Shiki (dual theme support)
- Math/equations with KaTeX
- Charts via MDX + Chart.js
- RSS feed and sitemap
- Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Theme System

The site uses a `data-theme` attribute on `<html>` for theme switching:
- Dark mode: warm dark grays, high readability
- Light mode: low-contrast warm tones, easy on the eyes

Syntax highlighting automatically switches between `github-dark` and `github-light` themes.

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Shiki Syntax Highlighter](https://shiki.style)

## Credit

Based on the [Astro Blog template](https://github.com/withastro/astro/tree/main/examples/blog), inspired by [Bear Blog](https://github.com/HermanMartinus/bearblog/).
