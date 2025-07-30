# Gap

**File**: `/src/plugins/theme/gap.js`

## Overview
Provides responsive gap utilities for CSS Grid and Flexbox layouts with Stanford's breakpoint-specific values (xs: 20px, lg: 36px, xl: 40px, 2xl: 48px) plus all spacing values.

## Generated CSS Classes

- **Responsive gaps**: `.gap-xs`, `.gap-lg`, `.gap-xl`, `.gap-2xl` (20px, 36px, 40px, 48px)
- **All spacing gaps**: `.gap-1` through `.gap-1500` (inherits all spacing values)
- **Directional gaps**: `.gap-x-*`, `.gap-y-*` for row/column specific spacing
- **Special utility**: `.grid-gap` (responsive combination: xs→lg→xl→2xl)

## Usage

```html
<!-- Responsive gap utility -->
<div class="grid grid-cols-3 grid-gap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Breakpoint-specific gaps -->
<div class="flex flex-wrap gap-xs lg:gap-lg xl:gap-xl">
  <div>Flexible item</div>
  <div>Flexible item</div>
  <div>Flexible item</div>
</div>

<!-- Directional gaps -->
<div class="grid grid-cols-2 gap-x-lg gap-y-xs">
  <div>Different horizontal and vertical gaps</div>
  <div>Between grid items</div>
</div>

<!-- Flexbox spacing -->
<div class="flex gap-xl">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gap: {
        // Add custom gap values
        '3xl': '56px',
        '4xl': '64px',
        // Add semantic gaps
        'card': '24px',
        'section': '48px',
        'component': '16px',
      },
    },
  },
}

#### 2X Large (2xl) - 48px
```javascript
'2xl': '48px'  // Ultra-wide screen gap
```

## Complete Gap System

When combined with Tailwind's default gap values and Stanford's spacing system, the complete gap scale includes:

### Tailwind Defaults + Stanford Spacing
```css
gap-0           /* 0px */
gap-px          /* 1px */
gap-0.5         /* 0.125rem (2px) */
gap-1           /* 0.25rem (4px) */
gap-1.5         /* 0.375rem (6px) */
gap-2           /* 0.5rem (8px) */
gap-2.5         /* 0.625rem (10px) */
gap-3           /* 0.75rem (12px) */
gap-3.5         /* 0.875rem (14px) */
gap-4           /* 1rem (16px) */
gap-5           /* 1.25rem (20px) */
gap-6           /* 1.5rem (24px) */
gap-7           /* 1.75rem (28px) */
gap-8           /* 2rem (32px) */
gap-9           /* 2.25rem (36px) */
gap-10          /* 2.5rem (40px) */
gap-11          /* 2.75rem (44px) */
gap-12          /* 3rem (48px) */
/* ... and all Stanford spacing values */
```

### Stanford Responsive Gaps
```css
gap-xs          /* 20px */
gap-lg          /* 36px */
gap-xl          /* 40px */
gap-2xl         /* 48px */
```

## Special Responsive Utility

### Automatic Responsive Gap (.grid-gap)
The plugin provides a special utility class that automatically applies appropriate gaps:

```css
.grid-gap       /* Responsive: gap-xs lg:gap-lg xl:gap-xl 2xl:gap-2xl */
```

This utility automatically applies:
- `gap-xs` (20px) on mobile and small screens
- `gap-lg` (36px) on large screens (lg breakpoint: 992px+)
- `gap-xl` (40px) on extra large screens (xl breakpoint: 1200px+)
- `gap-2xl` (48px) on 2xl screens (2xl breakpoint: 1500px+)


## Flexbox Applications

### Navigation with Responsive Gaps
```html
<!-- Navigation with adaptive spacing -->
<nav class="flex flex-wrap gap-xs lg:gap-lg items-center">
  <div class="font-stanford text-m4 text-cardinal-red">Stanford</div>
  <ul class="flex gap-xs lg:gap-lg text-m2">
    <li><a href="#" class="hover:text-cardinal-red">Academics</a></li>
    <li><a href="#" class="hover:text-cardinal-red">Research</a></li>
    <li><a href="#" class="hover:text-cardinal-red">Campus Life</a></li>
    <li><a href="#" class="hover:text-cardinal-red">Admissions</a></li>
  </ul>
</nav>
```

## Gap Direction Control

### Row and Column Specific Gaps
```html
<!-- Different gaps for rows and columns -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-y-xs gap-x-lg xl:gap-y-lg xl:gap-x-xl">
  <!-- Tighter vertical spacing, wider horizontal spacing -->
  <div>Grid item 1</div>
  <div>Grid item 2</div>
  <div>Grid item 3</div>
  <div>Grid item 4</div>
  <div>Grid item 5</div>
  <div>Grid item 6</div>
</div>
```

This comprehensive gap system ensures Stanford's grid and flexbox layouts maintain optimal spacing across all device sizes while providing both automated responsive behavior and fine-grained control when needed.
