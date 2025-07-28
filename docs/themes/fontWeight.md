# Font Weight Theme Plugin

**File**: `/src/plugins/theme/fontWeight.js`

## Overview

The font weight theme plugin extends Tailwind's default font weight system with Stanford-specific weight mappings, most notably adding the `font-regular` class as an alias for normal (400) weight. This provides compatibility with Decanter v6 conventions while maintaining Tailwind's standard font weight system.

## Purpose

Ensures backward compatibility for Stanford projects migrating from Decanter v6, where `font-regular` was the standard class name for normal weight text. This plugin allows teams to continue using familiar class names while transitioning to the updated Tailwind-based system.

## Font Weight Configuration

### Stanford-Specific Weights

#### Regular Weight (400)
```javascript
regular: '400'  // Alias for font-normal (400 weight)
```

**Purpose**: Provides the `font-regular` class as an alternative to Tailwind's `font-normal`.

**Usage Guidelines:**
- **Legacy compatibility**: Use in projects migrating from Decanter v6
- **Team preference**: When teams prefer "regular" terminology over "normal"
- **Consistency**: Maintains existing code patterns during transitions

## Complete Font Weight System

When combined with Tailwind's default weights, Stanford projects have access to:

### Tailwind Default Weights
```css
font-thin        /* 100 */
font-extralight  /* 200 */
font-light       /* 300 */
font-normal      /* 400 */
font-medium      /* 500 */
font-semibold    /* 600 */
font-bold        /* 700 */
font-extrabold   /* 800 */
font-black       /* 900 */
```

### Stanford Extension
```css
font-regular     /* 400 - Same as font-normal */
```

## Usage Examples

### Legacy Compatibility
```html
<!-- Decanter v6 style (still supported) -->
<p class="font-regular text-m2">
  Body text using legacy font-regular class
</p>

<!-- Modern Tailwind style (recommended) -->
<p class="font-normal text-m2">
  Body text using standard font-normal class
</p>
```

### Stanford Typography Hierarchy
```html
<!-- Complete weight hierarchy using both systems -->
<article class="font-source-sans-3">
  <!-- Hero heading -->
  <h1 class="text-m8 font-bold text-cardinal-red">
    Major Heading - Bold (700)
  </h1>
  
  <!-- Section headings -->
  <h2 class="text-m6 font-semibold text-black mt-[2em] mb-[0.75em]">
    Section Heading - Semibold (600)
  </h2>
  
  <!-- Subheadings -->
  <h3 class="text-m5 font-medium text-black mt-[1.5em] mb-[0.5em]">
    Subheading - Medium (500)
  </h3>
  
  <!-- Body text with both options -->
  <p class="text-m2 font-regular leading-relaxed mb-[1.5em]">
    Body text using legacy font-regular class (400 weight)
  </p>
  
  <p class="text-m2 font-normal leading-relaxed mb-[1.5em]">
    Body text using standard font-normal class (400 weight)
  </p>
  
  <!-- Light emphasis -->
  <p class="text-m2 font-light text-black-70">
    Supporting text with light weight (300)
  </p>
</article>
```

This simple but important extension ensures Stanford teams can transition smoothly to the modern Tailwind-based system while maintaining familiar conventions and existing codebases.
