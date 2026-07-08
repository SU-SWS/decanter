# Typography

Sources: `src/css/theme/font-family.css`, `theme/font-size.css`, `theme/line-height.css`, `utilities/modular-type.css`, `utilities/fluid-type.css`, `utilities/font-size.css`, `utilities/typography-styles.css`, `base/base.css`.

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

The full `decanter` entry sets a responsive body font size and heading sizes that follow the modular scale:

| Element | Behavior |
|---|---|
| `body` | 1.8rem (18px) → 1.9rem at `md` → 2.1rem at `2xl` |
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

Font sizes that scale smoothly and linearly with the viewport between 360px and 1500px using `clamp()`. Min/max match the modular scale at the XS and 2XL breakpoints. Good for hero banners and horizontal cards where stepped sizes look jumpy.

| Class | Value |
|---|---|
| `fluid-type-0` | `clamp(1.8rem, 0.44vw + 1.64rem, 2.3rem)` |
| `fluid-type-1` | `clamp(2.1rem, 0.7vw + 1.85rem, 2.9rem)` |
| `fluid-type-2` | `clamp(2.4rem, 1.05vw + 2.02rem, 3.6rem)` |
| `fluid-type-3` | `clamp(2.7rem, 1.58vw + 2.13rem, 4.5rem)` |
| `fluid-type-4` | `clamp(3.1rem, 2.19vw + 2.31rem, 5.6rem)` |
| `fluid-type-5` | `clamp(3.6rem, 2.98vw + 2.53rem, 7rem)` |
| `fluid-type-6` | `clamp(4.2rem, 4.04vw + 2.75rem, 8.8rem)` |
| `fluid-type-7` | `clamp(4.8rem, 5.44vw + 2.84rem, 11rem)` |
| `fluid-type-8` | `clamp(5.5rem, 7.19vw + 2.91rem, 13.7rem)` |
| `fluid-type-9` | `clamp(6.3rem, 9.47vw + 2.89rem, 17.1rem)` |
| `fluid-type-10` | `clamp(7.3rem, 12.37vw + 2.85rem, 21.4rem)` |

Unlike `type-*` (em-based, relative to container), `fluid-type-*` is rem-based — it ignores the container's font size.

## Font size utilities

| Class | Value | Notes |
|---|---|---|
| `text-<integer>` | integer × 0.1rem | Reads as pixels: `text-18` = 1.8rem = 18px. Any integer works. |
| `text-1em` | 1em | Matches parent font size |
| `text-09em` | 0.9em | Slightly smaller than parent |
| `text-input` | 1.8rem | The form-field font size |

Core Tailwind named sizes (`text-sm`, `text-lg`, …) remain available.

## Base font containers — `basefont-19` … `basefont-23`

Set a responsive base font size on a container so all em-based typography inside (modular type, headings, text styles) scales together. The default body behaves like `basefont-21`.

| Class | Base | ≥ md | ≥ 2xl |
|---|---|---|---|
| `basefont-19` | 1.6rem | 1.8rem | 1.9rem |
| `basefont-20` | 1.8rem | 1.9rem | 2rem |
| `basefont-21` | 1.8rem | 1.9rem | 2.1rem |
| `basefont-22` | 1.8rem | 2rem | 2.2rem |
| `basefont-23` | 1.8rem | 2.1rem | 2.3rem |

## Text styles

| Class | Purpose | Key styles |
|---|---|---|
| `splash-text` | Hero banner display text | `type-6` sizing + heading styles |
| `intro-text` | Opening paragraph | `type-2` sizing, `leading-normal`, max-width 65ch |
| `big-paragraph` | Emphasized body text | 1.15em, cozy → normal leading |
| `card-paragraph` | Card teaser text | `max(1.6rem, 0.93em)`, snug → cozy leading — never shrinks below 16px |
| `subheading` | Supporting line under a heading | `type-1` sizing |
| `quote-text` | Pull quotes | 1.25em italic |
| `caption` | Caption styling for any element | `max(1.6rem, 0.9em)`, snug leading — same look the base layer gives `figcaption` |
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
| `leading-cozy` | 1.4 | Body text at small viewports |
| `leading-normal` | 1.5 | Body text at `md` and up |
