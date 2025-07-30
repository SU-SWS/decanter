# Modular Typography

**File**: `/src/plugins/components/typography/modular-typography.js`

## Overview
Provides responsive typography scale utilities `.type-0` through `.type-9` for consistent, scalable font sizes across mobile, tablet, and desktop.

## Generated CSS Classes
- `.type-0` … `.type-9` (ten scale steps)

## Usage
```html
<h1 class="type-8">Page Title</h1>
<p class="type-2">Section heading</p>
<p class="type-0">Body text with optimal readability.</p>
```

## Customization
Extend in `tailwind.config.js` by adding custom steps to `decanter.typography` or via additional `addComponents` plugins.