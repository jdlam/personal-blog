# Personal Blog - Agent Instructions

A minimal, typography-focused blog built with Astro.

## Stack

- **Framework**: Astro with MDX support
- **Styling**: Vanilla CSS with CSS variables for theming
- **Syntax highlighting**: Shiki (via Astro) with dual themes
- **Math**: KaTeX via remark-math and rehype-katex
- **Charts**: Chart.js via MDX components

## Key Files

- `astro.config.mjs` - Shiki config, markdown plugins
- `src/styles/global.css` - Theme variables, syntax highlighting overrides
- `src/components/ThemeToggle.astro` - Dark/light mode toggle
- `src/content/blog/` - Blog posts (`.md` and `.mdx`)

## Theme System

Uses `data-theme` attribute on `<html>` element (not CSS media queries):

```css
[data-theme="dark"] { /* dark styles */ }
[data-theme="light"] { /* light styles */ }
```

### CSS Variables

- `--bg`, `--bg-secondary` - Backgrounds
- `--text`, `--text-muted` - Text colors (RGB values for opacity)
- `--accent`, `--accent-hover` - Links and interactive elements
- `--border`, `--box-shadow` - UI elements

### Syntax Highlighting

- Astro outputs `.astro-code` class (NOT `.shiki`)
- Shiki provides `--shiki-dark` and `--shiki-light` CSS variables per token
- Override colors by targeting `[data-theme] .astro-code span[style*="--shiki-light:..."]`

### Light Mode Design

Light mode uses low-contrast, warm tones for eye comfort:
- Background: `#fafaf9` (warm off-white, not pure white)
- Text: soft slate grays, not harsh black
- Syntax colors: muted versions for readability

## Blog Content

### Frontmatter

```yaml
---
title: "Post Title"
description: "Brief description for SEO"
pubDate: "Jan 25 2026"
heroImage: "/optional-image.jpg"  # optional
---
```

### MDX Features

- Code blocks: Fenced with language identifier, highlighted by Shiki
- Math: KaTeX syntax (`$inline$` and `$$block$$`)
- Charts: Import `Chart.astro` component

## Design Principles

1. Typography-focused - Let content breathe
2. Fast loading - Minimal JS
3. Accessible - Proper contrast, semantic HTML
4. Low-contrast light mode - Warm tones, easy on eyes
