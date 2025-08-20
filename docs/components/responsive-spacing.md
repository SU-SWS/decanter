# Responsive Spacing

**File**: `/src/plugins/components/responsive-spacing/responsive-spacing.js`

## Overview
Generates `.rs-{m|p}{t|r|b|l|x|y}-{0–10}` classes for responsive margin and padding scales at `xs`, `md`, and `2xl` breakpoints.

## Generated CSS Classes
Format: `.rs-{m|p}{side}-{scale}`
- Prefix: `rs-`
- Properties: `m` (margin), `p` (padding)
- Sides: `t` (top), `r` (right), `b` (bottom), `l` (left), `x` (horizontal), `y` (vertical), or none (all sides)
- Scales: `neg2`, `neg1`, `0`, `1` … `10`

## Usage
```html
<div class="rs-ml-2">
  Container with responsive left margin
</div>

<section class="rs-px-4 rs-py-9">
  Content with responsive horizontal and vertical padding
</section>
```
