# Screens (Breakpoints)

**File**: `/src/plugins/theme/screens.js`

## Overview
Defines custom responsive breakpoints for Stanford’s design system.

## Generated CSS Classes
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
```js
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
    },
  },
};
```

This streamlined documentation provides a concise reference for the breakpoint system used in Stanford's digital properties, facilitating efficient responsive design implementation.
