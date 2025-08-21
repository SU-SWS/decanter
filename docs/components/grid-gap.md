# Grid Gap Component Plugin

**File**: `/src/plugins/components/layout/grid-gap.js`

## Overview

The grid gap plugin provides responsive gap spacing for CSS Grid and Flexbox layouts. It creates a `.grid-gap` class that automatically adjusts gap spacing based on screen size, ensuring consistent spacing across different viewport sizes according to Stanford's design system.

## Generated CSS Classes

### `.grid-gap`

Responsive gap spacing that adapts to screen size.

```css
.grid-gap {
  /* Base gap for mobile/tablet */       /* xs to md gap value */
  gap: 20px;

  /* Responsive gap adjustments */
  @screen lg {                           /* lg gap value */
    gap: 36px;
  }

  @screen xl {                           /* xl gap value */
    gap: 40px;
  }

  @screen 2xl {                         /* 2xl gap value */
    gap: 48px;
  }

  /* Continues for all defined breakpoints */
}
```

## Design System Integration

### Responsive Gap Scale
The plugin uses Stanford's gap scale defined in the theme configuration:
- **xs to md (mobile to tablet)**: 20px - Compact spacing for mobile/tablet
- **lg (large tablet/small desktop)**: 30px - Slightly more breathing room
- **xl (small desktop)**: 40px - Comfortable spacing
- **2xl (desktop) and above**: 48px - Generous desktop spacing

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

## Grid Gap Customization Options

### Use Customized Responsive Grid Gaps
```html

<!-- Customized responsive grid gap -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-30 lg:gap-60">
  <!-- Content -->
</div>

<!-- Responsive vertical gap override -->
<div class="grid grid-cols-1 md:grid-cols-3 grid-gap gap-y-30 md:gap-y-60 xl:gap-y-80">
  <!-- Content -->
</div>
```

### Fixed Gap Utilities
```html
<!-- Small fixed gap -->
<div class="grid grid-cols-3 gap-4">
  <!-- Content -->
</div>

<!-- Medium fixed gap -->
<div class="grid grid-cols-2 gap-30">
  <!-- Content -->
</div>

<!-- Large fixed gap -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-50">
  <!-- Content -->
</div>
```
