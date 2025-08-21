# Line Height

**File**: `/src/plugins/theme/lineHeight.js`

## Overview
Provides Stanford-optimized line height values that override Tailwind defaults with carefully tuned spacing for buttons, headings, and body text readability.

## Generated CSS Classes

- **Button text**: `.leading-tight` (1.1 - overrides Tailwind's 1.25)
- **Display/headings**: `.leading-display` (1.2)
- **Card text**: `.leading-snug` (1.3 - overrides Tailwind's 1.375)
- **Small paragraphs**: `.leading-cozy` (1.4)
- **Body text**: `.leading-normal` (1.5 - default override)
- **Logo layouts**: `.leading-half` (0.5)
- **Source Sans trim**: `.leading-trim` (0.75)

## Usage

```html
<!-- Button text -->
<button class="leading-tight bg-cardinal-red text-white px-6 py-3">
  Tight line height for buttons
</button>

<!-- Headings and display text -->
<h1 class="leading-display text-4xl font-bold">
  Display Line Height
</h1>

<!-- Card content -->
<div class="leading-snug p-4 bg-white rounded">
  <p>Card content with snug line height for compact layouts</p>
</div>

<!-- Body paragraphs -->
<article class="leading-normal">
  <p>Regular paragraph text with optimal readability spacing</p>
</article>

<!-- Logo lockups -->
<div class="leading-half">
  <div>Stanford</div>
  <div>University</div>
</div>

<!-- Source Sans Pro trimmed -->
<p class="font-sans leading-trim">
  Trimmed leading for Source Sans Pro typography
</p>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      lineHeight: {
        // Add custom line heights
        'extra-tight': '1.05',
        'extra-loose': '2',
        'paragraph': '1.6',
        'heading': '1.25',
      },
    },
  },
}
```
