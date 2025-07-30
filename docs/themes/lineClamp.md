# Line Clamp

**File**: `/src/plugins/theme/lineClamp.js`

## Overview
Extends Tailwind's line-clamp utilities with additional values (7-12 lines) for better control over text truncation in cards, previews, and content layouts.

## Generated CSS Classes

- **Extended clamps**: `.line-clamp-7`, `.line-clamp-8`, `.line-clamp-9`, `.line-clamp-10`, `.line-clamp-11`, `.line-clamp-12`
- **Standard Tailwind clamps**: `.line-clamp-1`, `.line-clamp-2`, `.line-clamp-3`, `.line-clamp-4`, `.line-clamp-5`, `.line-clamp-6`, `.line-clamp-none`

## Usage

```html
<!-- Article previews -->
<div class="line-clamp-3 text-black-70">
  <p>Long article excerpt that will be truncated to exactly 3 lines with an ellipsis at the end when the content exceeds the available space...</p>
</div>

<!-- Card descriptions with more content -->
<div class="bg-white p-6 rounded-lg">
  <h3 class="font-semibold mb-3">Research Project</h3>
  <p class="line-clamp-8 text-sm text-black-70 mb-4">
    Extended description of research project that can display up to 8 lines before truncating. This is useful for detailed content previews in cards or listings where you want to show more context than the standard 3-4 lines...
  </p>
  <a href="#" class="text-digital-blue">Read More</a>
</div>

<!-- Course descriptions -->
<div class="line-clamp-10">
  <p>Comprehensive course description that provides detailed information about learning objectives, prerequisites, and course structure while maintaining consistent card heights...</p>
</div>

<!-- Responsive line clamping -->
<p class="line-clamp-3 md:line-clamp-6 lg:line-clamp-none">
  Text that shows 3 lines on mobile, 6 lines on tablet, and full content on desktop
</p>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      lineClamp: {
        // Add more line clamp options
        13: '13',
        14: '14',
        15: '15',
        20: '20',
        // Add semantic clamps
        'preview': '4',
        'summary': '6',
        'detailed': '10',
      },
    },
  },
}

#### 8-Line Clamp
```javascript
8: '8'  // Truncates text to 8 lines with ellipsis
```

#### 9-Line Clamp
```javascript
9: '9'  // Truncates text to 9 lines with ellipsis
```

#### 10-Line Clamp
```javascript
10: '10'  // Truncates text to 10 lines with ellipsis
```

#### 11-Line Clamp
```javascript
11: '11'  // Truncates text to 11 lines with ellipsis
```

#### 12-Line Clamp
```javascript
12: '12'  // Truncates text to 12 lines with ellipsis
```

## Complete Line Clamp System

When combined with Tailwind's default line clamp values, Stanford projects have access to:

### Tailwind Default Values
```css
line-clamp-1        /* 1 line */
line-clamp-2        /* 2 lines */
line-clamp-3        /* 3 lines */
line-clamp-4        /* 4 lines */
line-clamp-5        /* 5 lines */
line-clamp-6        /* 6 lines */
line-clamp-none     /* No clamping */
```

### Stanford Extensions
```css
line-clamp-7        /* 7 lines */
line-clamp-8        /* 8 lines */
line-clamp-9        /* 9 lines */
line-clamp-10       /* 10 lines */
line-clamp-11       /* 11 lines */
line-clamp-12       /* 12 lines */
```

This extended line clamp system provides Stanford's design system with the granular control needed to create consistent, readable content previews across all types of academic and administrative content while maintaining optimal user experience and visual hierarchy.
