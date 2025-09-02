# Fluid Typography

Responsive, smoothly-scaling type utilities that interpolate a minimum and a maximum pair of font sizes between breakpoints using `clamp()` and the `vw` unit.

## Purpose
Use these utilities for hero banners, large headings, and places where a smooth font-size transition across viewport widths is desirable, e.g., horizontal cards.

## Provided classes
- `.fluid-type-0` through `.fluid-type-10`

Each class applies a `font-size` using `clamp(min, preferred, max)` tuned to scale between a 360px (XS) and 1500px (2XL) viewport width range.

### Examples
- `.fluid-type-0` — `font-size: clamp(1.8rem, 0.44vw + 1.64rem, 2.3rem)`
- `.fluid-type-3` — `font-size: clamp(2.7rem, 1.58vw + 2.13rem, 4.5rem)`
- `.fluid-type-7` — `font-size: clamp(4.8rem, 5.44vw + 2.84rem, 11rem)`

## When to use
- Titles and hero text that should scale smoothly between small and very large screens.
- Prefer over abrupt breakpoint jumps when visual continuity is important.

## Example
```html
<h1 class="fluid-type-7">Large hero banner title</h1>
<p class="fluid-type-2">Subheading that scales elegantly with viewport</p>
```

## Notes
- Use sparingly for body text; this is intended for display use cases.
