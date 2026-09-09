# Getting Started

Decanter v8 is a CSS-first preset for Tailwind CSS v4. There is no JavaScript config — you import CSS files and Tailwind's engine picks up the theme, components, utilities, and variants.

## Requirements

- **Tailwind CSS v4.1+** (peer dependency — you install and run it in your own project)
- Any Tailwind v4 integration works: `@tailwindcss/cli`, `@tailwindcss/vite`, or `@tailwindcss/postcss`

## Installation

Generally you will install Decanter alongside Tailwind CSS v4:

```bash
npm install decanter@beta tailwindcss
```

The Tailwind v4 integration is framework-specific. See the [Tailwind CSS website](https://tailwindcss.com/docs/installation) for your framework's recommended installation method. For use with Next.js v16, install Tailwind CSS v4, @tailwindcss/postcss and Decanter (beta release) as dev dependencies:

```bash
npm install -D tailwindcss @tailwindcss/postcss decanter@beta
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
| `decanter` | Theme + components + utilities + variants + full base styles; sets the legacy 62.5% root font size | Yes | Default choice for existing Decanter sites |
| `decanter/minimal` | The same root sizing with only border-color compatibility, font smoothing, list markers, and other essentials — no element typography opinions | Yes | Embedding legacy-sized Decanter into a site that has its own base styles |
| `decanter/base16` | The full entry, but does not set `html`'s font size | Yes | Sites whose own CSS or component libraries expect the browser's normal 16px rem basis |
| `decanter/base16/minimal` | The base16 sizing mode with minimal base styles | Yes | Embedding Decanter without changing the root size or adding element typography opinions |
| `decanter/forms` | Form classes (`.input`, `.select`, …) plus the `@tailwindcss/forms` reset they depend on | No — composes with a main entry | Add alongside whichever full or minimal entry your site uses |
| `decanter/colors` | The Stanford color palette only, as `@theme` tokens | No — pair with your own `@import 'tailwindcss'` | Using Stanford colors on an otherwise stock Tailwind setup |
| `decanter/src/*` | Direct access to any source file, e.g. `decanter/src/css/utilities/modular-type.css` | No | À-la-carte composition |

### Composition rules

1. **`decanter/forms` is not standalone.** It relies on theme variables supplied by one of the four main entries. Imported alone, form controls render unstyled.

   ```css
   @import 'decanter';
   @import 'decanter/forms'; /* only if your site has forms */
   ```

2. **`decanter/colors` is standalone tokens.** It is pure `@theme`, adds zero bytes until you use a color, and does not change Tailwind's spacing scale, breakpoints, or element styles. Use it in a project that already has its own `@import 'tailwindcss'`.

3. **The four main entries are mutually exclusive** — import exactly one full or minimal entry in one sizing mode.

4. **Never add your own `@import 'tailwindcss'` next to a main Decanter entry** — all four already include it, and the duplicate is not removed.

## Choose a root font size mode

The original entries (`decanter` and `decanter/minimal`) keep Decanter's long-standing `html { font-size: 62.5% }` rule, which results in `1rem = 10px` for default browser settings. The base16 entries (`decanter/base16` or `decanter/base16/minimal`) leave the HTML font size entirely to the browser. At standard browser settings, the new base16 mode results in `1rem = 16px`.

Decanter-specific lengths use one shared `--decanter-px` unit, so their rendered sizes in pixel remain equivalent in both modes even though the rem unit is used and the root font sizes differ:

| | `decanter` / `decanter/minimal` | `decanter/base16` / `decanter/base16/minimal` |
|---|---|---|
| HTML root rule | `font-size: 62.5%` | No font-size declaration |
| `--decanter-px` | `0.1rem` | `0.0625rem` |
| `text-18` | 18px | 18px |
| `p-16` | 16px | 16px |
| `w-300` | 300px | 300px |

The default base10 mode still has the advantage of simpler math for developers who need custom utilities in rem units, since calculating rem values is easier when dividing by 10 instead of 16. The base16 mode is the better fit for use with third-party libraries such as MUI that use ordinary rem values and assume the browser default. Browser font-size preferences continue to scale both modes proportionally, making it fully accessible.

Decanter still overrides Tailwind's numeric spacing scale in either mode: `p-4` means 4px, not stock Tailwind's 16px (in Tailwind v3). The base16 mode changes the root rem basis; it does not replace Decanter's spacing API.

```css
/* Use one of these, not both. */
@import 'decanter';        /* legacy 62.5% root */
@import 'decanter/base16'; /* no HTML font-size override */
```

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
