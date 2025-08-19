# Font Family

**File**: `/src/plugins/theme/fontFamily.js`

## Overview
Provides Stanford's official typography stack with carefully curated font families including Source Sans 3, Source Serif 4, and Stanford's custom fonts with appropriate fallbacks.

## Generated CSS Classes

- **Stanford ligature**: `.font-stanford` - Stanford, Source Serif Pro, Georgia
- **Sans serif**: `.font-sans` - Source Sans 3, Source Sans Pro, Helvetica Neue, Arial
- **Serif**: `.font-serif` - Source Serif 4, Source Serif Pro, Georgia, Times
- **Monospace**: `.font-mono` - Roboto Mono, Menlo, Courier New
- **Slab**: `.font-slab` - Roboto Slab, Georgia, Times

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
  Responsive font family
</h1>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Add custom font families
        'custom-sans': ['Custom Sans', 'Arial', 'sans-serif'],
        'department': ['Department Font', 'Georgia', 'serif'],
        // Override existing families
        'serif': ['Custom Serif', 'Georgia', 'serif'],
      },
    },
  },
}

## Purpose

Establishes a comprehensive font system that aligns with Stanford's visual identity guidelines while maintaining web performance and cross-platform compatibility. The plugin provides semantic font family names that correspond to specific usage contexts within Stanford's design system.

## Stanford Font Families

### Stanford Ligature Font - Logo Wordmark Font
```javascript
stanford: [
  'Stanford',
  'Source Sans 3',
  'Source Sans Pro',
  '"Helvetica Neue"',
  'Helvetica',
  'Arial',
  'sans-serif'
]
```

### Source Sans 3 - Primary Sans Serif Font
```javascript
sans: [
  'Source Sans 3',
  'Source Sans Pro',    // Backward compatibility
  '"Helvetica Neue"',
  'Helvetica',
  'Arial',
  'sans-serif'
]
```

### Source Serif 4 - Primary Serif Font
```javascript
serif: [
  'Source Serif 4',
  'Source Serif Pro',   // Backward compatibility
  'Georgia',
  'Times',
  '"Times New Roman"',
  'serif'
]
```

### Monospace Font

#### Roboto Mono - Code and Technical Content
```javascript
mono: [
  'Roboto Mono',
  '"SF Mono"',          // macOS system font
  'Monaco',             // macOS fallback
  '"Cascadia Code"',    // Windows terminal font
  '"Roboto Mono"',      // Android font
  'Consolas',           // Windows fallback
  '"Liberation Mono"',  // Linux font
  'Menlo',              // older macOS
  'monospace'           // System fallback
]
```

### Bundle Size Considerations
- **Selective loading**: Only load font weights and styles actually used
- **Format optimization**: Prefer WOFF2 format for 30% smaller file sizes
- **System fallbacks**: Robust fallback stacks ensure immediate text rendering

## Customization and Extension

### Adding Institution-Specific Fonts
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

This comprehensive font system ensures Stanford brand consistency while providing the flexibility and performance needed for diverse digital applications across all Stanford properties.
