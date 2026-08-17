# Writing Mode

**File**: `/src/plugins/utilities/typography/writing-mode.js`

> **Deprecated.** `.text-vertical-lr` will be removed in v8. Use Tailwind's arbitrary
> property syntax instead — `[writing-mode:vertical-lr]` — which works today and
> covers the other writing modes this plugin never provided.

## Overview
Provides `.text-vertical-lr` class to set `writing-mode: vertical-lr`, enabling vertical text flow for multilingual or decorative layouts.

## Generated CSS Classes
- `.text-vertical-lr`

## Usage
```html
<div class="text-vertical-lr">
  Vertical text example
</div>
```

## Customization
No customization; use as provided for vertical text orientation.
