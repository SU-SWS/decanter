# Decanter v8 Documentation

Decanter is Stanford University's design system, delivered as a CSS-first preset for **Tailwind CSS v4**. It provides the Stanford Identity color palette, typography scales, spacing system, components, and utilities as plain CSS you import into your own Tailwind build.

- Repository: https://github.com/SU-SWS/decanter
- Identity guide: https://identity.stanford.edu
- Live test page: `static/index.html` in this repo demonstrates every feature

## Documentation map

| Page | Covers |
|---|---|
| [Getting Started](getting-started.md) | Installation, entry points, composition rules, requirements |
| [Colors](colors.md) | Full Stanford palette: tokens, hex values, usage guidance |
| [Typography](typography.md) | Font families, modular & fluid type scales, font-size utilities, text styles, line heights |
| [Spacing & Layout](spacing-and-layout.md) | Spacing scale, responsive spacing (`rs-*`), gaps, centered container, breakpoints |
| [Components](components.md) | `.button`, `.logo`, `.skiplink`, `.stretched-link`, lists, tables, `.wysiwyg` |
| [Forms](forms.md) | The opt-in `decanter/forms` entry: `.input`, `.select`, `.checkbox`, etc. |
| [Utilities](utilities.md) | Nested link utilities (`link-*`), legacy text shadows |
| [Variants](variants.md) | Custom variants: `hocus:`, `hocus-visible:`, `hocus-within:` and group forms |
| [Development](development.md) | Working on Decanter itself: repo layout, build scripts, test page |

## Quick reference: what Decanter adds to Tailwind

Everything below is *in addition to* core Tailwind CSS v4 utilities. Where Decanter overrides a Tailwind default (spacing scale, breakpoints, line heights, fonts), that is called out in the relevant page.

| Category | Classes / tokens | Doc |
|---|---|---|
| Colors | `cardinal-red`, `digital-red/blue/green`, 14 accent families, grayscale (`black-10`…`black-true`) — usable with any color utility (`bg-*`, `text-*`, `border-*`, …) | [Colors](colors.md) |
| Font families | `font-sans`, `font-serif`, `font-stanford` | [Typography](typography.md) |
| Modular type scale | `type-0` … `type-10` (responsive, em-based) | [Typography](typography.md) |
| Fluid type scale | `fluid-type-0` … `fluid-type-10` (viewport-clamped) | [Typography](typography.md) |
| Font sizes | `text-<integer>` (0.1rem steps: `text-18` = 1.8rem), `text-1em`, `text-09em`, `text-input` | [Typography](typography.md) |
| Base font | `basefont-19` … `basefont-23` (responsive container base size) | [Typography](typography.md) |
| Text styles | `splash-text`, `intro-text`, `big-paragraph`, `card-paragraph`, `subheading`, `quote-text`, `caption`, `types` | [Typography](typography.md) |
| Line heights | `leading-half`, `leading-trim`, `leading-tight`, `leading-display`, `leading-snug`, `leading-cozy`, `leading-normal` | [Typography](typography.md) |
| Spacing scale | `--spacing: 0.1rem` — numeric utilities read as pixels (`p-16` = 1.6rem); em steps `*-01em` … `*-1em`; `prose-wide` (75ch) | [Spacing & Layout](spacing-and-layout.md) |
| Responsive spacing | `rs-p-*`, `rs-px-*`, `rs-py-*`, `rs-pt/pr/pb/pl-*`, `rs-m-*` (+ sides), `rs-gap-*`, `rs-gap-x/y-*` — steps 0–10 | [Spacing & Layout](spacing-and-layout.md) |
| Gaps | `gap-xs`, `gap-lg`, `gap-xl`, `gap-2xl`, and the responsive `grid-gap` shorthand | [Spacing & Layout](spacing-and-layout.md) |
| Container | `centered-container` / `cc` (Stanford screen margins, 1500px cap) | [Spacing & Layout](spacing-and-layout.md) |
| Breakpoints | `sm` 576 / `md` 768 / `lg` 992 / `xl` 1200 / `2xl` 1500 / `3xl` 1700 / `4xl` 2000 (px) | [Spacing & Layout](spacing-and-layout.md) |
| Components | `button`, `logo`, `skiplink`, `stretched-link`, `list-unstyled`, `list-horizontal`, `table-borderless`, `wysiwyg` | [Components](components.md) |
| Form classes | `input`, `textarea`, `select`, `checkbox`, `radio`, `label`, `legend`, `fieldset` — via `decanter/forms` only | [Forms](forms.md) |
| Link utilities | `link-<color>`, `link-hocus-<color>`, `link-underline`, `link-no-underline`, `link-normal`, `link-semibold`, `link-bold` | [Utilities](utilities.md) |
| Text shadows | `text-shadow-legacy`, `text-shadow-legacy-md`, `text-shadow-legacy-lg` | [Utilities](utilities.md) |
| Writing mode | `text-vertical-lr` | [Utilities](utilities.md) |
| Variants | `hocus:`, `hocus-visible:`, `hocus-within:`, `group-hocus:`, `group-hocus-visible:`, `group-hocus-within:` | [Variants](variants.md) |

## Base styles

Importing `decanter` (the full entry) also styles bare HTML elements: headings `h1`–`h6` follow the modular type scale, plus opinionated defaults for `p`, `a`, lists, `table`, `figcaption`, and code elements. Import `decanter/minimal` to skip element opinions and keep only the essentials (root font size, border-color compat, list markers). See [Getting Started](getting-started.md#entry-points).

## Upgrading from v7

See [UPGRADE.md](../UPGRADE.md) for the v7 → v8 migration guide, including renamed and removed classes.
