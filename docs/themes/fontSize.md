# Font Size

**File**: `/src/plugins/theme/fontSize.js`

> **Deprecated.** The em-based scale — `.text-m0` through `.text-m9`, `.text-09em`, `.-text-m1`
> — will be removed in v8. Use the modular type classes `.type-0`
> through `.type-9` instead: they are responsive and carry the proportional letter
> spacing these plain font sizes lack. For a one-off size, use an arbitrary value
> such as `text-[1.25em]`. The pixel-based `.text-11` – `.text-30` sizes are not
> deprecated.

## Overview
Provides a comprehensive font size system with pixel-based sizes, modular typography scales, and em-based sizes for use in different scenarios.

## Generated CSS Classes

- **Pixel-based sizes**: `.text-11` through `.text-30` (11px to 30px in rem units)
- **Modular scale**: `.text-m0` through `.text-m9` (1em to 7.45em using 1.25 ratio) _(deprecated — use `.type-0` – `.type-9`, or the square bracket notation, e.g. `text-[1.25em]`)_
- **Em-based sizes**: `.text-09em` (0.9em) _(deprecated — use `text-[.9em]`)_
  - The `-m1` theme key generates `.-text-m1`, not `.text--m1` — Tailwind reads the
    leading `-` as a negative modifier. It is the same 0.9em as `.text-09em`.
    _(deprecated — use `text-[.9em]`)_

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        // Add custom sizes
        '32': '3.2rem',
        '36': '3.6rem',
      },
    },
  },
}
```

**Usage Examples:**
```html
<!-- Academic article structure -->
<article class="prose">
  <header>
    <h1 class="text-30 font-bold text-cardinal-red mb-4">
      Artificial Intelligence in Climate Research
    </h1>
    <div class="text-20 text-black-60 mb-8">
      <span>Published March 15, 2024</span> •
      <span>Dr. Sarah Chen, Environmental Science</span>
    </div>
  </header>
</article>
```

## Line Height Integration

#### Small Text
- **Line height**: 1.3 - 1.4 (comfortable for reading small text)
- **Use cases**: Card text, captions, footnotes

#### Body Text
- **Line height**: 1.4-1.5 (optimal for reading comfort)
- **Use cases**: Paragraphs, articles, content blocks

#### Large Body Text
- **Line height**: 1.4 - 1.5
- **Use cases**: Subheadings, intros

#### Headings
- **Line height**: 1.1-1.2 (tight for visual impact)
- **Use cases**: Page titles, hero text, display headings
