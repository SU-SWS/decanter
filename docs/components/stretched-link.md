# Stretched Link

**File**: `/src/plugins/components/link/stretched-link.js`

## Overview
Adds `.stretched-link` class to expand a nested link’s clickable area to cover its relatively positioned parent, improving usability without extra markup.

## Generated CSS Classes
- `.stretched-link`

## Usage
```html
<div class="relative">
  <h3><a href="/page" class="stretched-link">Card Title</a></h3>
  <p>Additional content, all clickable.</p>
</div>
```

## Customization
No customization; ensure parent has `position: relative`.
