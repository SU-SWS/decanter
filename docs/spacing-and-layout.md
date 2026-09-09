# Spacing & Layout

Sources: `src/css/theme/spacing.css`, `theme/responsive-spacing.css`, `theme/gap.css`, `theme/screen-margins.css`, `theme/breakpoint.css`, `utilities/responsive-spacing.css`, `utilities/grid-gap.css`, `components/centered-container.css`.

## Spacing scale: numbers read as pixels

Decanter sets `--spacing: var(--decanter-px)`, so every numeric spacing utility is the class number multiplied by one pixel-equivalent unit. `--decanter-px` is `0.1rem` in the default 10px-root entries and `0.0625rem` in the base16 entries. At standard browser settings, **the class number equals pixels in either mode**:

| Class | Default rendered size |
|---|---|---|
| `p-42` | 42px |
| `mb-24` | 24px |
| `w-321` | 321px |
| `max-w-630` | 630px |
| `gap-12` | 12px |

This applies to padding, margin, width, height, gap, inset, and every other spacing-driven utility. **This differs from stock Tailwind**, where `p-4` = 1rem. Browser font-size preferences still scale these rem-based values proportionally.

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
| 0 | 15px | 18px | 19px |
| 1 | 20px | 26px | 27px |
| 2 | 30px | 36px | 38px |
| 3 | 32px | 45px | 48px |
| 4 | 34px | 58px | 61px |
| 5 | 38px | 72px | 76px |
| 6 | 45px | 90px | 95px |
| 7 | 50px | 108px | 114px |
| 8 | 60px | 126px | 133px |
| 9 | 70px | 162px | 171px |
| 10 | 80px | 216px | 228px |

```html
<section class="rs-py-4">Vertical padding: 34px → 58px → 61px</section>
<div class="grid grid-cols-3 rs-gap-2">Responsive gutters</div>
```

The v7 negative steps (`rs-*-neg1`, `rs-*-neg2`) were removed — see [UPGRADE.md](../UPGRADE.md).

## Grid gaps

Gap tokens sized for grids, plus a shorthand that applies them responsively. Note: for simplicity we show the values in pixel in the below table, but the actual CSS uses the rem unit for gaps, so they scale with browser font-size preferences:

| Token | Value |
|---|---|
| `gap-xs` | 20px |
| `gap-sm` | 20px |
| `gap-md` | 20px |
| `gap-lg` | 36px |
| `gap-xl` | 40px |
| `gap-2xl` | 48px |

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
