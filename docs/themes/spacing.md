# Spacing

**File**: `/src/plugins/theme/spacing.js`

## Overview
Defines Tailwind spacing scale from 1px to 1500px for margin, padding, gap, width, and height utilities.

## Generated CSS Classes
- `.p-{value}`, `.m-{value}`, `.gap-{value}`, `.w-{value}`, `.h-{value}`, where `value` can be:
  - `px`
  - `01em` … `1em`
  - `1` … `50`
  - `55`, `58`, `60`, …, `1500`

## Usage
```html
<div class="p-4 m-6">Spacing utilities</div>
<div class="gap-8">Grid gap</div>
```

## Customization
```js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '128': '12.8rem',
        // add custom values here
      },
    },
  },
};
```
