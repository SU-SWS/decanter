# Spacing

**File**: `/src/plugins/theme/spacing.js`

## What this file controls

This file replaces Tailwind's default `spacing` scale with Decanter's curated set of spacing values. The spacing tokens are used by Tailwind utilities such as `margin`, `padding`, `gap`, `width`, `height`, and `inset` (e.g. `.p-4`, `.m-10`, `.gap-20`, `.w-50`).

Decanter's scale mixes three intent-driven groups:

- Small typographic spacers in `em` units (e.g. `01em` → `1em`) — intended for rhythm and intra-text spacing (headings, paragraphs, lists).
- Fine-grained layout spacers in `rem` units for small sizes (1 → 50, in 0.1rem increments) — convenient for pixel-accurate layout work.
- Larger layout spacers (55 → 1500 and beyond) in `rem` units for wide layout and utility usages (in a combination of 0.5rem, 1rem, 5rem, and 10rem steps as sizes increase).

## Why Decanter's scale differs from Tailwind's default

- Tailwind's default scale (0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64) is opinionated and compact. It uses mostly `rem` units and exponential growth for larger values.
- Decanter expands on that with more granular small steps (0.1rem increments) and additional large values to support complex layout needs across university sites (cards, wide hero spacing, and responsive modular spacing utilities used by `rs-*` classes).

## Quick comparison (examples)

- Tailwind default: `.p-4` → `1rem` (10px using Decanter's root font size), `.p-6` → `1.5rem` (15px)
- Decanter: `.p-10` → `1rem` (10px), `.p-15` → `1.5rem` (15px), `.p-200` → `20rem` (200px)

## Conversion rule (handy)

- For most tokens `1`–`50`: value in `rem` ≈ `N * 0.1rem`. So `20` → `2rem` (20px), `50` → `5rem` (50px).
- Em tokens such as `01em`–`1em` are literal `em` values and are typically used for typographic rhythm, e.g., `.p-01em { padding: 0.1em }`.

## Generated utility classes (examples)

- Spacing utilities: `.p-{value}`, `.px-{value}`, `.py-{value}`, `.m-{value}`, `.mx-{value}`, `.my-{value}`
- Gap: `.gap-{value}`, `.gap-x-{value}`, `.gap-y-{value}`
- Sizing: `.w-{value}`, `.h-{value}`

Values available include (not exhaustive):
- `px`, `0`, `01em`…`1em`
- `1` … `50` (0.1rem increments)
- `55`, `58`, `60`, `61`, `65`, `70`, `72`, `75`, `76`, `80`, `85`, `90`, `95`, `100`, `108`, `110`, `114`, `120`, `126`, `130`, `133`, `140`, `150`, `160`, `170`, `180`, `190`, `200`, `216`, `220`, `228`, `230`, `240`, `250`, `260`, `270`, `280`, `290`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1100`, `1200`, `1300`, `1400`, `1500`

## Usage examples

```html
<!-- Typographic spacing using em values -->
<h2 class="mb-04em">Section heading</h2>
<p class="mb-1em">Leading paragraph with 1em bottom margin</p>

<!-- Layout spacing using Decanter rem tokens -->
<div class="p-10">Content with 1rem padding (equivalent to Tailwind's p-4)</div>
<div class="gap-20 grid grid-cols-3">Three-column layout with 2rem gaps</div>

<!-- Large spacing for hero or wide layout -->
<section class="py-100">Very large vertical padding (10rem)</section>
```

## Recommendations and best practices

- Prefer `em` tokens (`01em`–`1em`) for typographic rhythm (within `.wysiwyg` or text blocks) — they scale with font-size and preserve readable rhythm.
- Use the `1`–`100` numeric tokens for most layout spacing; they map to predictable `0.1rem` (1 to 50) and `0.5rem` (50 to 100) steps and make pixel-accurate spacing easy.
- Use the larger curated tokens (`100+`) for sections, large cards, and site-level spacing.
