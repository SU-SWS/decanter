# Screens (Breakpoints)

**File**: `/src/css/theme.css`

## Overview
Defines custom responsive breakpoints for Stanford’s design system.

## Using px units for breakpoints
Tailwind CSS v4 now uses `rem` units for breakpoints by default. However, we have decided to continue to use `px` units for breakpoints for stability and predictability.

A breakpoint's purpose is to change the layout of a page when the viewport (the visible area of the browser window) reaches a certain width. The viewport's width is measured in pixels, an absolute unit. A breakpoint is meant to respond to this absolute measurement, not to the user's font size preference.

## Generated Tailwind utilities
- Prefix utilities with `sm:`, `md:`, `lg:`, `xl:`, `2xl:`, `3xl:`, `4xl:`, corresponding to:
  - `sm` (576px)
  - `md` (768px)
  - `lg` (992px)
  - `xl` (1200px)
  - `2xl` (1500px)
  - `3xl` (1700px)
  - `4xl` (2000px)

## Usage
```html
<div class="p-4 md:p-8 lg:p-12">Responsive padding</div>
```

## Customization
Note: For adding a breakpoint smaller than `4xl`, it's better to override rather than extend to preserve proper ordering. To add a larger breakpoint, you can extend the theme as follows:

```js
module.exports = {
  theme: {
    extend: {
      screens: {
        '5xl': '2500px',
      },
    },
  },
};
```
