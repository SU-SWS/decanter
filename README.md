# [Decanter](https://github.com/SU-SWS/decanter)
##### Version: 8 (alpha)

Changelog: [CHANGELOG.md](CHANGELOG.md) &middot; Upgrading from v7? See [UPGRADE.md](UPGRADE.md)

## Description
Decanter is a web design and development system for Stanford University. Version 8 is a **CSS-first preset for [Tailwind CSS v4](https://tailwindcss.com/)**: you import plain CSS and get the Stanford Identity color palette, typography scales, spacing system, components, utilities, and custom variants on top of core Tailwind.

## Demo
The test page in this repository ([static/index.html](static/index.html)) demonstrates the custom Decanter features. Run it locally with `npm install && npm run dev`.

## Documentation
- [docs/README.md](docs/README.md) - index includes a quick-reference table of everything Decanter adds to Tailwind
- [Getting Started](docs/getting-started.md) — installation, entry points, composition rules
- [Colors](docs/colors.md) &middot; [Typography](docs/typography.md) &middot; [Spacing & Layout](docs/spacing-and-layout.md)
- [Components](docs/components.md) &middot; [Forms](docs/forms.md) &middot; [Utilities](docs/utilities.md) &middot; [Variants](docs/variants.md)
- [Development](docs/development.md) — working on Decanter itself

## Installation
You first need to install Tailwind CSS v4. See the [Tailwind CSS website](https://tailwindcss.com/docs/installation) for your framework's recommended installation method.

For example, for use with Next.js v16, install Tailwind CSS v4, @tailwindcss/postcss and Decanter (alpha release) as dev dependencies:

```bash
npm install -D tailwindcss @tailwindcss/postcss decanter@alpha
```

In your project's main CSS file:

```css
@import 'decanter';
@import 'decanter/forms'; /* optional — only if your site has forms elements that use the Decanter styles */
```

There is no need to add a separate `@import 'tailwindcss'`, or your output will contain the preflight reset twice. Build with any Tailwind v4 integration (`@tailwindcss/cli`, `@tailwindcss/vite`, or `@tailwindcss/postcss`).

### Entry points

| Import | Contents |
|---|---|
| `decanter` | Everything: theme, components, utilities, variants, full base styles |
| `decanter/minimal` | Same, without element-level base opinions such as link colors |
| `decanter/forms` | Opt-in form classes + the bundled `@tailwindcss/forms` reset (requires `decanter` or `decanter/minimal`) |
| `decanter/colors` | Stanford color palette only — standalone, works on stock Tailwind |
| `decanter/src/*` | Any individual source file, for à-la-carte composition |

See [Getting Started](docs/getting-started.md) for details, including the 62.5% root font size convention (spacing and font-size class numbers read as pixels: `p-16` = 16px, `text-18` = 18px).

## Fonts
Decanter provides font-family **utilities** (`font-sans`, `font-serif`, `font-stanford`) but does not bundle or load the font files — how fonts are loaded is framework-specific, so that's left to you. Load only the families you use; if one isn't loaded, its class falls back gracefully down the stack.

See [Loading the fonts](docs/typography.md#loading-the-fonts) for which families and weights to load and copy-paste examples (`<link>`, `@import`, self-hosting, and framework tooling), plus the `@font-face` snippet for the Stanford wordmark font used by `.logo`.

## Icons
Decanter does not include any icon assets. We recommend the [heroicons](https://github.com/tailwindlabs/heroicons) package — [Hero Icons](https://heroicons.com/) are created by the Tailwind CSS team, open source, and usable as SVG or JSX.

## Accessibility
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)

This project conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: [https://www.stanford.edu/accessibility](https://www.stanford.edu/accessibility).
