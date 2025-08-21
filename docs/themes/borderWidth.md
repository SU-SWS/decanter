# Border Width

**File**: `/src/plugins/theme/borderWidth.js`

## Overview
Extends Tailwind's default border widths (1px, 2px, 4px, 8px) with additional 3px, 5px, 6px, and 7px options for more precise border control.

## Generated CSS Classes

- **Extended widths**: `.border-3`, `.border-5`, `.border-6`, `.border-7` (3px, 5px, 6px, 7px)
- **Standard Tailwind widths**: `.border`, `.border-2`, `.border-4`, `.border-8`, `.border-0`
- **Directional borders**: Available for all sides (top, right, bottom, left)

## Usage

```html
<!-- Extended border widths -->
<div class="border-3 border-cardinal-red p-4">3px border</div>
<div class="border-5 border-digital-blue p-4">5px border</div>
<div class="border-6 border-cool-grey p-4">6px border</div>
<div class="border-7 border-black p-4">7px border</div>

<!-- Directional borders -->
<div class="border-t-3 border-cardinal-red">3px top border</div>
<div class="border-l-5 border-digital-blue pl-4">5px left border</div>

<!-- Combined with other utilities -->
<div class="border-6 border-cardinal-red rounded-lg p-6 bg-white shadow">
  Card with 6px Stanford red border
</div>

<!-- Emphasis elements -->
<blockquote class="border-l-5 border-poppy pl-6 py-4 bg-illuminating-yellow/10">
  <p class="italic">Important quote with 5px accent border</p>
</blockquote>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderWidth: {
        // Add more widths
        '9': '9px',
        '10': '10px',
        '12': '12px',
        // Add semantic widths
        'thin': '1px',
        'medium': '3px',
        'thick': '6px',
        'heavy': '8px',
      },
    },
  },
}
