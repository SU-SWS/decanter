# Getting Started

Decanter v8 is a CSS-first preset for Tailwind CSS v4. There is no JavaScript config — you import CSS files and Tailwind's engine picks up the theme, components, utilities, and variants.

## Requirements

- **Tailwind CSS v4.1+** (peer dependency — you install and run it in your own project)
- Any Tailwind v4 integration works: `@tailwindcss/cli`, `@tailwindcss/vite`, or `@tailwindcss/postcss`

## Installation

```bash
npm install decanter tailwindcss
```

## Basic usage

In your project's main CSS file:

```css
@import 'decanter';
```

That's the only import you need — Decanter's main entries include `@import 'tailwindcss'` internally. **Do not also import `tailwindcss` yourself**: it isn't deduplicated, and your output CSS will contain Tailwind's preflight reset twice.

Build with your Tailwind integration as usual. Tailwind v4 detects the classes you use in your templates automatically; Decanter's utilities are generated on demand just like core utilities.

## Entry points

| Import | What you get | Includes Tailwind? | When to use |
|---|---|---|---|
| `decanter` | Theme + components + utilities + variants + full base styles (element defaults for headings, paragraphs, links, lists, tables) | Yes | Default choice for Stanford sites |
| `decanter/minimal` | Same, but with minimal base styles: root font size, border-color compatibility, and list markers only — no element typography opinions | Yes | Embedding Decanter into a site that has its own base styles |
| `decanter/forms` | Form classes (`.input`, `.select`, …) plus the `@tailwindcss/forms` reset they depend on | No — composes with a main entry | Add alongside `decanter` or `decanter/minimal` when your site has forms |
| `decanter/colors` | The Stanford color palette only, as `@theme` tokens | No — pair with your own `@import 'tailwindcss'` | Using Stanford colors on an otherwise stock Tailwind setup |
| `decanter/src/*` | Direct access to any source file, e.g. `decanter/src/css/utilities/modular-type.css` | No | À-la-carte composition |

### Composition rules

1. **`decanter/forms` is not standalone.** It relies on theme variables and the root font size supplied by `decanter` or `decanter/minimal`. Imported alone, form controls render unstyled and oversized.

   ```css
   @import 'decanter';
   @import 'decanter/forms'; /* only if your site has forms */
   ```

2. **`decanter/colors` is standalone tokens.** It is pure `@theme`, adds zero bytes until you use a color, and does not change Tailwind's spacing scale, breakpoints, or element styles. Use it in a project that already has its own `@import 'tailwindcss'`.

3. **`decanter` and `decanter/minimal` are mutually exclusive** — import one, not both.

4. **Never add your own `@import 'tailwindcss'` next to `decanter` or `decanter/minimal`** — they already include it, and the duplicate is not removed.

## The 62.5% root font size

Decanter sets `html { font-size: 62.5% }`, making `1rem` = 10px at default browser settings. Every rem-based token is chosen so the number reads as pixels:

- `text-18` → 1.8rem → **18px**
- `p-16` → 1.6rem → **16px** (spacing unit is `--spacing: 0.1rem`)
- `w-300` → 30rem → **300px**

This differs from stock Tailwind (where `p-4` = 1rem = 16px). If you mix Decanter with existing Tailwind markup, re-check numeric spacing classes — the same class name produces a much smaller size under Decanter.

## What gets emitted to your CSS

Tailwind v4 generates utilities on demand, so unused Decanter utilities and theme tokens cost nothing. Two things are always emitted once imported:

- **Base styles** (`decanter`: ~2.6KB of element defaults; `decanter/minimal`: essentials only)
- **Component classes** (`.button`, `.logo`, `.cc`, etc. — a few KB)

## Minimal working example

```html
<!doctype html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/dist/styles.css">
</head>
<body>
  <div class="cc rs-py-4">
    <h1>Hello Stanford</h1>
    <p class="intro-text">Styled by Decanter's base layer and text styles.</p>
    <a class="button" href="#">Cardinal button</a>
  </div>
</body>
</html>
```

```css
/* src/styles.css */
@import 'decanter';
```

```bash
npx @tailwindcss/cli -i src/styles.css -o dist/styles.css
```
