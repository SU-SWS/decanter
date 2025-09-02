# Max Width

**File**: `/src/plugins/theme/maxWidth.js`

## Overview
Extended max-width utilities for responsive layout and content constraints.

## Generated CSS Classes
- `.max-w-{size}`, where `size` includes:
  - `10` … `100` (1rem to 10rem)
  - `120` … `200` (12rem to 20rem)
  - `300` … `1500` (30rem to 150rem)
  - `prose-wide` (75ch)

## Usage
```html
<div class="max-w-600 mx-auto">Centered content</div>
```

## Customization
```js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'sidebar': '18rem',
        // custom sizes
      },
    },
  },
};
```
