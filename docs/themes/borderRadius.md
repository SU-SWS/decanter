# Border Radius

**File**: `/src/plugins/theme/borderRadius.js`

## Overview
Customizes the default border radius to 0.3rem (3px) instead of Tailwind's default 0.25rem, optimized for Stanford's form inputs and design system.

## Generated CSS Classes

- **Default radius for form elements**: `.rounded` (0.3rem instead of 0.25rem)
- All of the Tailwind out of the box border radius classes are preserved

## Usage

```html
<!-- Round image avatar -->
<img class="rounded-full size-200" src="profile.jpg" alt="Profile">

<!-- Form elements -->
<div class="space-y-4">
  <input class="rounded border border-cool-grey p-3 w-full">
  <select class="rounded border border-cool-grey p-3 w-full">
    <option>Choose option</option>
  </select>
  <textarea class="rounded border border-cool-grey p-3 w-full"></textarea>
</div>

<!-- Responsive radius adjustments -->
<div class="rounded-md lg:rounded-lg xl:rounded-xl">
  Container with responsive border radius
</div>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        // Add custom radius values
        'xs': '0.2rem',
        'stanford': '0.3rem', // Alias for default
        '4xl': '2rem',
        // Override default if needed
        'DEFAULT': '0.4rem',
      },
    },
  },
}
