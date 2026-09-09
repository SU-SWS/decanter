# Typography

Sources: `src/css/theme/font-family.css`, `theme/font-size.css`, `theme/line-height.css`, `utilities/modular-type.css`, `utilities/fluid-type.css`, `utilities/font-size.css`, `utilities/typography-styles.css`, `base/base.css`.

Pixel values below are the rendered sizes at standard browser settings. Decanter calculates them from `--decanter-px`, so they stay equivalent in both the legacy 10px-root and base16 entry points while still respecting browser font-size preferences.

## Font families

| Class | Stack | Use |
|---|---|---|
| `font-sans` | Source Sans 3, Helvetica Neue, Helvetica, Arial, sans-serif | Default body font |
| `font-serif` | Source Serif 4, Georgia, Times, serif | Display and editorial |
| `font-stanford` | Stanford, Source Serif 4, Georgia, serif | The Stanford wordmark only (see `.logo`) |

> The `font-slab` (Roboto Slab) and `font-mono` (Roboto Mono) families were removed in v8. `font-slab` no longer exists; `font-mono` still works as a core Tailwind utility but resolves to the default system monospace stack. See [UPGRADE.md](../UPGRADE.md).

### Loading the fonts

Decanter references fonts by name but **does not bundle or load them** — font loading is framework-specific, so you choose the method. Load only the families whose classes you actually use; the Stanford wordmark font is only needed if you use `.logo` / `font-stanford`.

| Family | Source | Weights Decanter uses |
|---|---|---|
| Source Sans 3 | Google Fonts | 400, 600, 700 (+ italics) |
| Source Serif 4 | Google Fonts | 400, 600, 700 (+ italics) |
| Stanford (wordmark) | [Stanford media CDN](https://www-media.stanford.edu/assets/fonts/stanford.woff2) | 300 |

**Option A — `<link>` in your HTML `<head>`** (good default; `preconnect` speeds up the CDN handshake):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap">
```

**Option B — CSS `@import`** (simplest; render-blocking, so prefer Option A or C for production):

```css
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');
```

**Option C — self-host or framework tooling** (best performance): download the woff2 files and declare your own `@font-face`, or use your framework's font system — e.g. Next.js [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts), a Vite font plugin, or Astro. This avoids the CDN round-trip and reduces layout shift.

**Stanford wordmark font** — only needed for `.logo`. Declare it once (self-host the file for production rather than hotlinking the CDN):

```css
@font-face {
  font-family: Stanford;
  src: url('https://www-media.stanford.edu/assets/fonts/stanford.woff2') format('woff2');
  font-weight: 300;
  font-display: swap;
}
```

If a family isn't loaded, its class falls back to the next font in the stack (e.g. `font-stanford` → Source Serif 4) — nothing breaks, so you can ship only the fonts you need.

## Base body and heading behavior

The full `decanter` and `decanter/base16` entries set a responsive body font size and heading sizes that follow the modular scale:

| Element | Behavior |
|---|---|
| `body` | 18px → 19px at `md` → 21px at `2xl` |
| `h1` | `type-5` styles (see scale below) |
| `h2` | `type-4` |
| `h3` | `type-3` |
| `h4` | `type-2` |
| `h5` | `type-1` |
| `h6` | `type-0` |

All headings get `leading-display`, bold weight, `margin-bottom: 0.6em`, `clear: both`, and undecorated bold links. Because heading sizes are em-based and the body font is responsive, headings scale twice: with the modular step at `md`/`lg`, and with the body size at `md`/`2xl`.

## Modular type scale — `type-0` … `type-10`

Em-based steps that scale up at the `md` (768px) and `lg` (992px) breakpoints, with letter-spacing tightening proportionally to size. `type-0` = 1em (the container's base size).

| Class | Base | ≥ md | ≥ lg | Letter spacing |
|---|---|---|---|---|
| `type-0` | 1em | — | — | — |
| `type-1` | 1.15em | 1.2em | 1.25em | -0.01em |
| `type-2` | 1.32em | 1.44em | 1.56em | -0.012em |
| `type-3` | 1.52em | 1.73em | 1.95em | -0.014em |
| `type-4` | 1.75em | 2.07em | 2.44em | -0.016em |
| `type-5` | 2.01em | 2.49em | 3.05em | -0.018em |
| `type-6` | 2.31em | 2.99em | 3.81em | -0.02em |
| `type-7` | 2.66em | 3.58em | 4.77em | -0.022em |
| `type-8` | 3.06em | 4.3em | 5.96em | -0.024em |
| `type-9` | 3.52em | 5.16em | 7.45em | -0.026em |
| `type-10` | 4.05em | 6.19em | 9.31em | -0.028em |

```html
<h2 class="type-5">A heading promoted to the h1 size</h2>
<p class="type-2">Card headline sized text</p>
```

## Fluid type scale — `fluid-type-0` … `fluid-type-10`

Font sizes that scale smoothly and linearly with the viewport between 360px and 1500px using `clamp()`. Min/max match the modular scale at the XS and 2XL breakpoints, and letter-spacing tightens proportionally to size, matching the same steps as `type-1`…`type-10`. Good for hero banners and horizontal cards where stepped sizes look jumpy.

| Class | Size from 360px → 1500px viewport | Letter spacing |
|---|---|---|
| `fluid-type-0` | 18px → 23px | — |
| `fluid-type-1` | 21px → 29px | -0.01em |
| `fluid-type-2` | 24px → 36px | -0.012em |
| `fluid-type-3` | 27px → 45px | -0.014em |
| `fluid-type-4` | 31px → 56px | -0.016em |
| `fluid-type-5` | 36px → 70px | -0.018em |
| `fluid-type-6` | 42px → 88px | -0.02em |
| `fluid-type-7` | 48px → 110px | -0.022em |
| `fluid-type-8` | 55px → 137px | -0.024em |
| `fluid-type-9` | 63px → 171px | -0.026em |
| `fluid-type-10` | 73px → 214px | -0.028em |

Unlike `type-*` (em-based, relative to its container), `fluid-type-*` uses `--decanter-px` plus a viewport-relative term, so it ignores the container's font size.

## Font size utilities

| Class | Value | Notes |
|---|---|---|
| `text-<integer>` | integer × `--decanter-px` | Reads as pixels at standard browser settings: `text-18` = 18px. Any integer works. |
| `text-input` | 18px | The form-field font size |

Core Tailwind named sizes (`text-sm`, `text-lg`, …) remain available.

## Base font containers — `basefont-19` … `basefont-23`

Set a responsive base font size on a container so all em-based typography inside (modular type, headings, text styles) scales together. The default body behaves like `basefont-21`.

| Class | Base | ≥ md | ≥ 2xl |
|---|---|---|---|
| `basefont-19` | 16px | 18px | 19px |
| `basefont-20` | 18px | 19px | 20px |
| `basefont-21` | 18px | 19px | 21px |
| `basefont-22` | 18px | 20px | 22px |
| `basefont-23` | 18px | 21px | 23px |

## Text styles

| Class | Purpose | Key styles |
|---|---|---|
| `splash-text` | Hero banner display text | `type-6` sizing + heading styles |
| `intro-text` | Opening paragraph | `type-2` sizing, `leading-normal`, max-width 65ch |
| `big-paragraph` | Copy slight larger than body text | 1.15em, cozy → normal leading |
| `card-paragraph` | Card teaser text slightly smaller than body text | `max(16px, 0.93em)`, snug → cozy leading — never shrinks below the scale's 16px floor |
| `subheading` | Supporting text under a heading | `type-1` sizing |
| `quote-text` | Pull quotes | 1.25em italic |
| `caption` | Caption styling for any element | `max(16px, 0.9em)`, snug leading — same look the base layer gives `figcaption` without the Cool Grey color, never shrinks below the scale's 16px floor |
| `types` | Heading styles without a size | `leading-display`, bold, 0.6em bottom margin, undecorated bold links — combine with `type-*` |

```html
<p class="types type-3">Styled like a heading, on a paragraph</p>
```

## Line heights

Decanter overrides Tailwind's leading scale:

| Class | Value | Use |
|---|---|---|
| `leading-half` | 0.5 | Tightly cropped display text |
| `leading-trim` | 0.75 | Wordmark-style cropping (used by `.logo`) |
| `leading-tight` | 1.1 | Very large display text |
| `leading-display` | 1.2 | Headings (base default) |
| `leading-snug` | 1.3 | Captions, card text |
| `leading-cozy` | 1.4 | Smaller body text |
| `leading-normal` | 1.5 | Body text |
