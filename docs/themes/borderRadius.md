# Border Radius Theme Plugin

**File**: `/src/plugins/theme/borderRadius.js`

## Overview

The border radius theme plugin customizes Tailwind's default border radius scale to match Stanford's design system preferences. It specifically modifies the default border radius value to provide a slightly more pronounced rounding that aligns with Stanford's interface design standards.

## Purpose

Establishes Stanford's preferred border radius for form inputs and interface elements, providing a subtle but distinctive rounded corner treatment that enhances usability while maintaining visual consistency across all Stanford digital properties.

# Border Radius

**File**: `/src/plugins/theme/borderRadius.js`

## Overview
Customizes the default border radius to 0.3rem (3px) instead of Tailwind's default 0.25rem, optimized for Stanford's form inputs and design system.

## Generated CSS Classes

- **Default radius**: `.rounded` (0.3rem instead of 0.25rem)
- **Standard Tailwind radii**: `.rounded-none`, `.rounded-sm`, `.rounded-md`, `.rounded-lg`, `.rounded-xl`, `.rounded-2xl`, `.rounded-3xl`, `.rounded-full`

## Usage

```html
<!-- Stanford's optimized default radius -->
<input class="rounded border p-3">Form input with 0.3rem radius</input>
<button class="rounded bg-cardinal-red text-white px-4 py-2">
  Button with Stanford radius
</button>

<!-- Other radius options -->
<div class="rounded-lg p-4 bg-fog">Card with large radius</div>
<img class="rounded-full w-16 h-16" src="profile.jpg" alt="Profile">

<!-- Form elements -->
<div class="space-y-4">
  <input class="rounded border border-cool-grey p-3 w-full">
  <select class="rounded border border-cool-grey p-3 w-full">
    <option>Choose option</option>
  </select>
  <textarea class="rounded border border-cool-grey p-3 w-full"></textarea>
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

**Purpose**: Stanford's preferred border radius for form inputs and standard interface elements.

**Comparison with Tailwind Default:**
- **Tailwind default**: `0.25rem` (4px at base font size)
- **Stanford override**: `0.3rem` (4.8px at base font size)
- **Visual difference**: 20% more pronounced rounding for improved visual softness

## Complete Border Radius System

When combined with Tailwind's default radius values, Stanford projects have access to:

### Tailwind Preserved Values
```css
rounded-none     /* 0px */
rounded-sm       /* 0.125rem (2px) */
rounded          /* 0.3rem (4.8px) - Stanford override */
rounded-md       /* 0.375rem (6px) */
rounded-lg       /* 0.5rem (8px) */
rounded-xl       /* 0.75rem (12px) */
rounded-2xl      /* 1rem (16px) */
rounded-3xl      /* 1.5rem (24px) */
rounded-full     /* 9999px - perfect circles */
```

### Stanford Enhancement
```css
rounded          /* 0.3rem (4.8px) - Enhanced from Tailwind's 0.25rem */
```

## Border Radius Hierarchy

### Component-Specific Usage Guidelines

#### Subtle Rounding (rounded-sm - 0.125rem)
```html
<!-- Fine interface elements -->
<div class="inline-block bg-cardinal-red text-white px-[8px] py-[2px] rounded-sm text-11">
  New
</div>
```

#### Standard Rounding (rounded - 0.3rem)
```html
<!-- Primary interface elements -->
<button class="bg-cardinal-red text-white px-[24px] py-[12px] rounded">
  Standard Button
</button>
<input type="text" class="border border-black-30 p-[12px] rounded">
```

#### Medium Rounding (rounded-md - 0.375rem)
```html
<!-- Secondary components -->
<div class="bg-white border border-black-20 rounded-md p-[20px]">
  Secondary content container
</div>
```

#### Large Rounding (rounded-lg - 0.5rem)
```html
<!-- Card components -->
<div class="bg-white border border-black-20 rounded-lg p-[24px]">
  Content card with larger radius
</div>
```

#### Extra Large Rounding (rounded-xl, rounded-2xl)
```html
<!-- Modal and overlay components -->
<div class="bg-white rounded-xl p-[40px] shadow-2xl">
  Modal content with prominent rounding
</div>

<!-- Hero sections or special components -->
<div class="bg-cardinal-red text-white rounded-2xl p-[60px]">
  Special promotional content
</div>
```

#### Perfect Circles (rounded-full)
```html
<!-- Avatar images and icon containers -->
<div class="w-[60px] h-[60px] bg-cardinal-red rounded-full flex items-center justify-center">
  <span class="text-white font-bold">SC</span>
</div>

<!-- Profile images -->
<img src="profile.jpg" alt="Dr. Smith" class="w-[80px] h-[80px] rounded-full">
```

## Responsive Border Radius
```html
<!-- Responsive radius adjustments -->
<div class="rounded-md lg:rounded-lg xl:rounded-xl">
  Container with responsive border radius
</div>

<!-- Mobile-specific radius -->
<div class="rounded-none sm:rounded md:rounded-lg">
  Progressive radius enhancement
</div>
```

This enhanced border radius system ensures Stanford's interface elements have a distinctive, user-friendly appearance that aligns with the university's design standards while maintaining excellent usability and accessibility.
