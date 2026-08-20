# Font Family

**File**: `/src/plugins/theme/fontFamily.js`

> **Deprecated in v8: `font-slab` and `font-mono`.** Neither is part of the Stanford
> Identity type system. Both still work in v7 and are unchanged. The two behave
> differently when they go:
>
> - **`font-slab`** is Decanter-only, so the class disappears entirely in v8. If you need
>   Roboto Slab, add `slab` to your own project config.
> - **`font-mono`** is a core Tailwind class that Decanter currently overrides. The
>   class stays; only Decanter's Roboto Mono stack goes, and `font-mono` falls back to
>   Tailwind's default system monospace stack. Add `mono` to your own config if you
>   need Roboto Mono specifically.

> **Deprecated in v8: the Source Sans Pro and Source Serif Pro fallbacks.** `font-sans`
> and `font-serif` keep their leading families — Source Sans 3 and Source Serif 4 — but
> drop the superseded Pro entry behind each in v8:
>
> - `font-sans`: `Source Sans 3`, ~~`Source Sans Pro`~~, `Helvetica Neue`, …
> - `font-serif`: `Source Serif 4`, ~~`Source Serif Pro`~~, `Georgia`, …
>
> **Most projects are unaffected.** Decanter's `fonts.css` and `fonts-basic.css` only
> load Source Sans 3 and Source Serif 4, so the Pro entries never match unless you load
> those families yourself. If you do — or you rely on them being installed locally —
> make sure Source Sans 3 and Source Serif 4 are available before upgrading, or the
> next fallback (Helvetica Neue / Georgia) will be used instead.

## Overview
Provides Stanford's official typography stack with carefully curated font families including the Stanford ligature font used for the logo wordmark, Source Sans 3, Source Serif 4 with appropriate fallbacks.

## Generated CSS Classes

- **Stanford ligature**: `.font-stanford` - Stanford ligature font for the logo with serif fallback
- **Sans serif**: `.font-sans` - Source Sans 3 with sans serif fallback _(the Source Sans Pro fallback is deprecated — removed in v8)_
- **Serif**: `.font-serif` - Source Serif 4 with serif fallback _(the Source Serif Pro fallback is deprecated — removed in v8)_
- **Monospace**: `.font-mono` - Roboto Mono with monospace fallback _(deprecated — Decanter's stack is removed in v8; the class remains with Tailwind's default stack)_
- **Slab**: `.font-slab` - Roboto Slab with serif fallback _(deprecated — removed in v8)_

## Usage

```html
<!-- Primary typography -->
<div class="font-stanford">Stanford University</div>
<h2 class="font-serif">Serif section heading</h2>
<p class="font-sans">Body text content</p>

<!-- Specialized typography -->
<code class="font-mono">console.log('Hello World')</code>
<h2 class="font-slab">Bold section heading</h2>

<!-- Responsive typography -->
<h1 class="font-sans md:font-serif">
  Changing font familly on larger screens
</h1>
```

## Customization

```javascript
// In your Tailwind configuration
module.exports = {
  presets: [require('decanter')],
  theme: {
    extend: {
      fontFamily: {
        // School-specific fonts
        'business-school': [
          'Custom Business Font',
          'Source Sans 3',
          'sans-serif'
        ],

        'law-school': [
          'Custom Legal Font',
          'Source Serif 4',
          'serif'
        ],

        // Department branding
        'engineering': [
          'Technical Display Font',
          'Roboto Mono',
          'monospace'
        ]
      }
    }
  }
}
```
