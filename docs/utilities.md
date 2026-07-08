# Utilities

Custom utilities beyond the theme-driven ones covered in [Typography](typography.md) and [Spacing & Layout](spacing-and-layout.md). All are generated on demand — they cost nothing until used.

Source: `src/css/utilities/`.

## Nested link utilities — `link-*`

These style `<a>` tags **nested inside** the element they're applied to. Use them on containers whose inner markup you don't control: WYSIWYG output, CMS open fields, component slots.

| Class | Effect on nested links |
|---|---|
| `link-<color>` | Sets link color — accepts any palette token, e.g. `link-white`, `link-digital-green`, `link-plum-dark` |
| `link-hocus-<color>` | Sets link color on hover/focus, e.g. `link-hocus-illuminating` |
| `link-underline` | Underlines links |
| `link-no-underline` | Removes underlines |
| `link-normal` | Normal (400) link weight |
| `link-semibold` | Semibold (600) link weight |
| `link-bold` | Bold (700) link weight |

```html
<!-- White links that glow gold on hover, e.g. in a cardinal footer -->
<nav class="bg-cardinal-red link-white link-hocus-illuminating link-no-underline">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<!-- Restyle links inside CMS output -->
<div class="wysiwyg link-lagunita-dark link-semibold">…</div>
```

To style a link element directly, use core utilities on the `<a>` itself (`text-digital-blue hocus:text-black`). The base layer already styles bare links: `digital-blue`, semibold, underlined, black on hover/focus.

## Text shadows (legacy) — `text-shadow-legacy*`

Decanter v7's text shadows, kept for backward compatibility. Prefer Tailwind v4.1's native `text-shadow-*` scale for new work.

| Class | Value |
|---|---|
| `text-shadow-legacy` | `rgba(0,0,0,40%) 0 0 6px, rgba(0,0,0,60%) 0 0 2px` |
| `text-shadow-legacy-md` | `rgba(0,0,0,40%) 0 0 8px, rgba(0,0,0,60%) 0 0 3px` |
| `text-shadow-legacy-lg` | `rgba(0,0,0,30%) 0 0 12px` |

Typical use: white text over photography.

```html
<h1 class="text-white text-shadow-legacy-md">Readable over an image</h1>
```

## Writing mode — `text-vertical-lr`

Sets `writing-mode: vertical-lr` for vertical left-to-right text.

```html
<p class="text-vertical-lr">Vertical label</p>
```

## Removed in v8

`break-words`, `a11y-hidden`/`accessibility-hidden`, `backface-hidden`, and `embed-container` have core Tailwind replacements — see [UPGRADE.md](../UPGRADE.md).
