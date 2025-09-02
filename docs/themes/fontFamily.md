# Font Family

**File**: `/src/plugins/theme/fontFamily.js`

## Overview
Provides Stanford's official typography stack with carefully curated font families including the Stanford ligature font used for the logo wordmark, Source Sans 3, Source Serif 4 with appropriate fallbacks.

## Generated CSS Classes

- **Stanford ligature**: `.font-stanford` - Stanford ligature font for the logo with serif fallback
- **Sans serif**: `.font-sans` - Source Sans 3 with sans serif fallback
- **Serif**: `.font-serif` - Source Serif 4 with serif fallback
- **Monospace**: `.font-mono` - Roboto Mono with monospace fallback
- **Slab**: `.font-slab` - Roboto Slab with serif fallback

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
