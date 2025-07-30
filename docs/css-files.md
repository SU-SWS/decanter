# CSS Files Documentation

This document covers the CSS files in the `/src/css/` directory and related entry points.

## File Overview

### `src/decanter.js`
**Purpose**: Main entry point for CSS imports when using Decanter as a bundled package.

```javascript
import './css/index.css';
```

**Usage**: This file is used when you want to import Decanter's CSS directly into your JavaScript bundle, typically in frameworks like React, Vue, or when using bundlers like Webpack or Vite.

**Example**:
```javascript
// In your main application file
import 'decanter/src/decanter.js';
// or
import 'decanter/dist/decanter.css'; // if using built version
```

### `src/css/index.css`
**Purpose**: Core CSS file containing font imports and Tailwind CSS directives.

#### Font Imports
The file imports Stanford-approved web fonts from Google Fonts and Stanford's servers:

```css
/* Google Fonts - Stanford approved typography */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Slab:wght@300;400;700&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');

/* Stanford brand font */
@font-face {
  font-family: "Stanford";
  src: url("https://www-media.stanford.edu/assets/fonts/stanford.woff") format("woff"), 
       url("https://www-media.stanford.edu/assets/fonts/stanford.ttf") format("truetype");
  font-weight: 300;
  font-display: swap;
}
```

#### Font Families Included

1. **Source Sans 3** (`font-sans`)
   - Weights: 400, 600, 700
   - Styles: normal, italic
   - Purpose: Primary sans-serif font for body text and UI elements

2. **Source Serif 4** (`font-serif`)
   - Weights: 400, 600, 700
   - Styles: normal, italic
   - Purpose: Serif font for headings and formal content

3. **Roboto Slab** (`font-slab`)
   - Weights: 300, 400, 700
   - Purpose: Slab serif font for distinctive headings

4. **Roboto Mono** (`font-mono`)
   - Weight: 400 (regular)
   - Purpose: Monospace font for code and technical content

5. **Stanford** (`font-stanford`)
   - Weight: 300
   - Purpose: Official Stanford brand font for logos and special uses

#### Tailwind Directives

```css
/**
 * This injects Tailwind's base styles and any base styles registered by
 * plugins.
 */
@tailwind base;

/**
 * This injects Tailwind's component classes and any component classes
 * registered by plugins.
 */
@tailwind components;

/**
 * This injects Tailwind's utility classes and any utility classes registered
 * by plugins.
 */
@tailwind utilities;
```

These directives tell Tailwind CSS where to inject the generated styles from all plugins.

## Font Loading Strategy

### Performance Optimizations
- **`font-display: swap`**: Ensures text remains visible during font swap period
- **Preconnect hints**: Consider adding these to your HTML for better performance:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://www-media.stanford.edu">
```

### Font Stack Configuration
The font families are configured in the theme system and can be accessed via Tailwind classes:

```html
<div class="font-sans">Source Sans 3 text</div>
<div class="font-serif">Source Serif 4 text</div>
<div class="font-slab">Roboto Slab text</div>
<div class="font-mono">Roboto Mono text</div>
<div class="font-stanford">Stanford brand font</div>
```

## Usage Patterns

### Direct CSS Import
When you need the CSS without using Tailwind configuration:

```javascript
// Import the CSS directly
import 'decanter/src/css/index.css';
```

### With Tailwind Configuration
Most common usage - let Tailwind process the CSS through the plugin system:

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('decanter')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Tailwind will process the CSS through Decanter's plugins
}
```

### Custom Font Loading
If you need to customize font loading, you can override the CSS:

```css
/* Custom font configuration */
@import 'decanter/src/css/index.css';

/* Override with your own font loading strategy */
@font-face {
  font-family: "Stanford";
  src: local('Stanford'), url('./fonts/stanford.woff2') format('woff2');
  font-display: optional; /* More aggressive caching */
}
```