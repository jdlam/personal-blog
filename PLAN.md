# Blog Customization Plan

## Goals

- **Modern but minimal** - Clean aesthetic, focused on readability
- **Static content first** - Optimized for text, graphs, and charts
- **Future-proof for photos** - Image support ready when needed

## Design Principles

1. Typography-focused - Let the content breathe
2. Fast loading - No unnecessary JS
3. Accessible - Proper contrast, semantic HTML
4. Responsive - Works on all devices

## Features

### Phase 1: Foundation
- [x] Update site metadata (title, description, author)
- [x] Customize color palette (minimal, neutral tones)
- [x] Improve typography (system fonts, adjusted line height)
- [x] Simplify header/navigation
- [x] Clean up footer

### Phase 2: Content Support
- [x] Add syntax highlighting for code blocks
- [x] Integrate chart library (Chart.js or similar) via MDX
- [x] Add support for math/equations if needed
- [x] Image optimization settings

### Phase 3: Polish
- [x] Dark mode toggle
- [ ] RSS feed styling
- [ ] SEO improvements (Open Graph, etc.)
- [ ] 404 page

## Technical Decisions

| Feature | Choice | Rationale |
|---------|--------|-----------|
| Charts | MDX + Chart.js | Works with static builds, familiar JS library |
| Fonts | System font stack | Fast, no external requests |
| Styling | Vanilla CSS | Already in template, keeps it simple |
| Dark mode | CSS variables + JS toggle | Respects user preference |

## Content Structure

```
src/content/blog/
├── posts with frontmatter
├── supports .md and .mdx
└── heroImage optional
```

## Domain

- Production: jlam.dev
