# Responsive Spacing

**File**: `/src/plugins/components/responsive-spacing/responsive-spacing.js`

## Overview
Generates `.rs-{m|p}{t|r|b|l|x|y}-{0–10}` classes for responsive margin and padding scales at `xs`, `md`, and `2xl` breakpoints.

## Generated CSS Classes
Format: `.rs-{m|p}{side}-{scale}`
- Prefix: `rs-`
- Properties: `m` (margin), `p` (padding)
- Sides: `t`, `r`, `b`, `l`, `x`, `y`, or none (all)
- Scales: `neg2`, `neg1`, `0`, `1` … `10`

## Usage
```html
<div class="rs-m-2 rs-pt-3">
  Responsive spaced container
</div>

<section class="rs-px-4 md:rs-px-7">
  Content with responsive horizontal padding
</section>
```

## Customization
Add or override scales in `tailwind.config.js` by extending `theme.extend.spacing`.
