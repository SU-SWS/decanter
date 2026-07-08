# [Decanter](https://github.com/SU-SWS/decanter)
##### Version: 8 (alpha)

Changelog: [CHANGELOG.md](CHANGELOG.md) &middot; Upgrading from v7? See [UPGRADE.md](UPGRADE.md)

## Description
Decanter is a web design and development system for Stanford University. Version 8 is a **CSS-first preset for [Tailwind CSS v4](https://tailwindcss.com/)**: you import plain CSS and get the Stanford Identity color palette, typography scales, spacing system, components, utilities, and custom variants on top of core Tailwind.

## Demo
The test page in this repository ([static/index.html](static/index.html)) demonstrates every custom Decanter feature. Run it locally with `npm install && npm run dev`.

## Documentation
Full documentation lives in [docs/](docs/README.md):

- [Getting Started](docs/getting-started.md) — installation, entry points, composition rules
- [Colors](docs/colors.md) &middot; [Typography](docs/typography.md) &middot; [Spacing & Layout](docs/spacing-and-layout.md)
- [Components](docs/components.md) &middot; [Forms](docs/forms.md) &middot; [Utilities](docs/utilities.md) &middot; [Variants](docs/variants.md)
- [Development](docs/development.md) — working on Decanter itself

The [docs/README.md](docs/README.md) index includes a quick-reference table of everything Decanter adds to Tailwind. For AI tools and coding agents, [llms.txt](llms.txt) summarizes the system and links the docs — it ships with the npm package, so agents can read it from `node_modules/decanter/`.

## Installation

```bash
npm install decanter tailwindcss
```

In your project's main CSS file:

```css
@import 'tailwindcss';
@import 'decanter';
@import 'decanter/forms'; /* optional — only if your site has forms */
```

Build with any Tailwind v4 integration (`@tailwindcss/cli`, `@tailwindcss/vite`, or `@tailwindcss/postcss`).

### Entry points

| Import | Contents |
|---|---|
| `decanter` | Everything: theme, components, utilities, variants, full base styles |
| `decanter/minimal` | Same, without element-level base opinions |
| `decanter/forms` | Opt-in form classes + the bundled `@tailwindcss/forms` reset (requires `decanter` or `decanter/minimal`) |
| `decanter/colors` | Stanford color palette only — standalone, works on stock Tailwind |
| `decanter/src/*` | Any individual source file, for à-la-carte composition |

See [Getting Started](docs/getting-started.md) for details, including the 62.5% root font size convention (spacing and font-size class numbers read as pixels: `p-16` = 16px, `text-18` = 18px).

## Fonts
- Decanter does not bundle font assets. Load fonts with the method optimized for your framework, importing only what you need.
- Two convenience CSS files are provided at the repo root: `fonts.css` (all Decanter fonts: sans, serif, slab, mono, and the Stanford ligature font for the logo) and `fonts-basic.css` (sans, serif, and the Stanford font only).
- Source Sans 3, Source Serif 4, Roboto Slab, and Roboto Mono are loaded from [Google Fonts](https://fonts.google.com/).
- The Stanford ligature font used by `.logo` is served from the [University Communications media CDN](https://www-media.stanford.edu/assets/fonts/stanford.woff).

## Icons
We recommend the [heroicons](https://github.com/tailwindlabs/heroicons) package — [Hero Icons](https://heroicons.com/) are created by the Tailwind CSS team, open source, and usable as SVG or JSX.

## Accessibility
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)

This project conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information please visit: [https://ucomm.stanford.edu/policies/accessibility-policy.html](https://ucomm.stanford.edu/policies/accessibility-policy.html).
