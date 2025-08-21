# Screens (Breakpoints)

**File**: `/src/plugins/theme/screens.js`

## Overview
Defines custom responsive breakpoints for Stanford’s design system.

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
