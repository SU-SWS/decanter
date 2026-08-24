# Spacing & Layout

Sources: `src/css/theme/spacing.css`, `theme/responsive-spacing.css`, `theme/gap.css`, `theme/screen-margins.css`, `theme/breakpoint.css`, `utilities/responsive-spacing.css`, `utilities/grid-gap.css`, `components/centered-container.css`.

## Spacing scale: numbers read as pixels

Decanter sets `--spacing: 0.1rem`, so every numeric spacing utility is the number × 0.1rem. Combined with the 62.5% root font size, **the class number equals pixels**:

| Class | Computed | Pixels |
|---|---|---|
| `p-16` | 1.6rem | 16px |
| `mb-24` | 2.4rem | 24px |
| `w-300` | 30rem | 300px |
| `max-w-600` | 60rem | 600px |
| `gap-10` | 1rem | 10px |

This applies to padding, margin, width, height, gap, inset, and every other spacing-driven utility. **This differs from stock Tailwind**, where `p-4` = 1rem.

### Em-based spacing

For typography rhythm that scales with the font size:

| Classes | Values |
|---|---|
| `*-01em` … `*-09em` | 0.1em … 0.9em (e.g. `mb-05em`) |
| `*-1em` | 1em |

### Named widths

| Token | Value | Use |
|---|---|---|
| `prose` (Tailwind core) | 65ch | Comfortable reading measure |
| `prose-wide` | 75ch | Wider reading measure (e.g. `max-w-prose-wide`) |

## Responsive spacing — `rs-*`

Spacing that steps up at the `md` (768px) and `2xl` (1500px) breakpoints in one class. Available for padding, margin, and gap:

- Padding: `rs-p-*`, `rs-px-*`, `rs-py-*`, `rs-pt-*`, `rs-pr-*`, `rs-pb-*`, `rs-pl-*`
- Margin: `rs-m-*`, `rs-mx-*`, `rs-my-*`, `rs-mt-*`, `rs-mr-*`, `rs-mb-*`, `rs-ml-*`
- Gap: `rs-gap-*`, `rs-gap-x-*`, `rs-gap-y-*`

Steps and values:

| Step | Base (XS) | ≥ md | ≥ 2xl |
|---|---|---|---|
| 0 | 1.5rem | 1.8rem | 1.9rem |
| 1 | 2rem | 2.6rem | 2.7rem |
| 2 | 3rem | 3.6rem | 3.8rem |
| 3 | 3.2rem | 4.5rem | 4.8rem |
| 4 | 3.4rem | 5.8rem | 6.1rem |
| 5 | 3.8rem | 7.2rem | 7.6rem |
| 6 | 4.5rem | 9rem | 9.5rem |
| 7 | 5rem | 10.8rem | 11.4rem |
| 8 | 6rem | 12.6rem | 13.3rem |
| 9 | 7rem | 16.2rem | 17.1rem |
| 10 | 8rem | 21.6rem | 22.8rem |

```html
<section class="rs-py-4">Vertical padding: 34px → 58px → 61px</section>
<div class="grid grid-cols-3 rs-gap-2">Responsive gutters</div>
```

The v7 negative steps (`rs-*-neg1`, `rs-*-neg2`) were removed — see [UPGRADE.md](../UPGRADE.md).

## Grid gaps

Four gap tokens sized for page-level grids, plus a shorthand that applies them responsively:

| Token | Value |
|---|---|
| `gap-xs` | 2rem (20px) |
| `gap-lg` | 3.6rem (36px) |
| `gap-xl` | 4rem (40px) |
| `gap-2xl` | 4.8rem (48px) |

| Class | Behavior |
|---|---|
| `grid-gap` | `gap-xs` → `gap-lg` at `lg` → `gap-xl` at `xl` → `gap-2xl` at `2xl` |

```html
<div class="grid grid-cols-3 grid-gap">…</div>
<!-- equivalent to: gap-xs lg:gap-lg xl:gap-xl 2xl:gap-2xl -->
```

## Centered container — `.centered-container` / `.cc`

The standard Stanford page container: responsive screen margins on both sides, content capped at 1500px and centered above the `3xl` breakpoint.

| Viewport | Side margin |
|---|---|
| < 576px | 20px |
| ≥ 576px (sm) | 30px |
| ≥ 768px (md) | 50px |
| ≥ 992px (lg) | 80px |
| ≥ 1200px (xl) | 100px |
| ≥ 1700px (3xl) | content centered at 1500px |

Nested containers get no extra padding, so components that include their own `.cc` can be dropped inside a page-level one safely.

```html
<section class="bg-fog-light rs-py-4">
  <div class="cc">Full-bleed background, aligned content</div>
</section>
```

## Breakpoints

Decanter replaces Tailwind's default screens and adds two extra-large ones:

| Prefix | Min width | Tailwind default (for comparison) |
|---|---|---|
| `sm` | 576px | 640px |
| `md` | 768px | 768px |
| `lg` | 992px | 1024px |
| `xl` | 1200px | 1280px |
| `2xl` | 1500px | 1536px |
| `3xl` | 1700px | — |
| `4xl` | 2000px | — |

All variants work as usual: `md:grid-cols-2`, `3xl:text-21`, `max-lg:hidden`, etc.

## Aspect ratios

Nothing custom — use Tailwind core: `aspect-video` (16/9, replaces v7's `.embed-container`), `aspect-square`, or any bare ratio like `aspect-4/3`, `aspect-3/2` (no brackets needed in v4).
