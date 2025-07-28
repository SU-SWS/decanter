# Grid Gap Component Plugin

**File**: `/src/plugins/components/layout/grid-gap.js`

## Overview

The grid gap plugin provides responsive gap spacing for CSS Grid and Flexbox layouts. It creates a `.grid-gap` class that automatically adjusts gap spacing based on screen size, ensuring consistent spacing across different viewport sizes according to Stanford's design system.

## Generated CSS Classes

### `.grid-gap`

Responsive gap spacing that adapts to screen size.

```css
.grid-gap {
  /* Base gap for mobile */
  grid-gap: 20px;                       /* xs gap value */
  gap: 20px;                           /* Modern gap property */
  
  /* Responsive gap adjustments */
  @screen sm {
    grid-gap: 30px;                     /* sm gap value */
    gap: 30px;
  }
  
  @screen md {
    grid-gap: 50px;                     /* md gap value */  
    gap: 50px;
  }
  
  @screen lg {
    grid-gap: 80px;                     /* lg gap value */
    gap: 80px;
  }
  
  /* Continues for all defined breakpoints */
}
```

## Design System Integration

### Responsive Gap Scale
The plugin uses Stanford's gap scale defined in the theme configuration:
- **xs (mobile)**: 20px - Compact spacing for mobile
- **sm (large mobile)**: 30px - Slightly more breathing room
- **md (tablet)**: 50px - Comfortable tablet spacing
- **lg (desktop)**: 80px - Generous desktop spacing
- **xl and above**: Continues the progression

### Browser Compatibility
- **Modern `gap` property**: For current browsers
- **Legacy `grid-gap`**: Fallback for older browsers
- **Dual declaration**: Ensures maximum compatibility

## Usage Examples

### CSS Grid Layouts
```html
<!-- Basic grid with responsive gaps -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap">
  <div class="bg-white p-6 rounded shadow">Card 1</div>
  <div class="bg-white p-6 rounded shadow">Card 2</div>
  <div class="bg-white p-6 rounded shadow">Card 3</div>
  <div class="bg-white p-6 rounded shadow">Card 4</div>
  <div class="bg-white p-6 rounded shadow">Card 5</div>
  <div class="bg-white p-6 rounded shadow">Card 6</div>
</div>
```

### Flexbox Layouts
```html
<!-- Navigation with responsive gaps -->
<nav class="flex flex-wrap grid-gap justify-center">
  <a href="#" class="button">Academics</a>
  <a href="#" class="button">Research</a>
  <a href="#" class="button">Campus Life</a>
  <a href="#" class="button">Admissions</a>
  <a href="#" class="button">Alumni</a>
</nav>
```

## Customization Options

### Creating Custom Gap Sizes
```javascript
// Add to your Tailwind configuration
module.exports = {
  presets: [require('decanter')],
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.grid-gap-sm': {
          gap: theme('spacing.4'),
          '@screen md': {
            gap: theme('spacing.6'),
          },
          '@screen lg': {
            gap: theme('spacing.8'),
          }
        },
        '.grid-gap-lg': {
          gap: theme('spacing.8'),
          '@screen md': {
            gap: theme('spacing.12'),
          },
          '@screen lg': {
            gap: theme('spacing.16'),
          }
        },
        '.grid-gap-xl': {
          gap: theme('spacing.12'),
          '@screen md': {
            gap: theme('spacing.20'),
          },
          '@screen lg': {
            gap: theme('spacing.24'),
          }
        }
      })
    }
  ]
}
```

### Fixed Gap Utilities
```html
<!-- Small fixed gap -->
<div class="grid grid-cols-3 gap-4">
  <!-- Content -->
</div>

<!-- Medium fixed gap -->
<div class="grid grid-cols-2 gap-8">
  <!-- Content -->
</div>

<!-- Large fixed gap -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
  <!-- Content -->
</div>

<!-- Responsive gap override -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
  <!-- Content -->
</div>
```