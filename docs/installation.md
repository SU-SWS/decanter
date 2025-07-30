# Decanter Usage Guide

This guide shows how to use the Decanter design system with Tailwind CSS in your projects.

## Installation

```bash
npm install decanter
# or
yarn add decanter
# or
pnpm add decanter
```

## Basic Usage

### CommonJS (Most Common)
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('decanter')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Your custom extensions here
    },
  },
  plugins: [
    // Your additional plugins here
  ],
}
```

### ES Module
```javascript
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
import decanter from 'decanter';

export default {
  presets: [decanter],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Your custom extensions here
    },
  },
  plugins: [
    // Your additional plugins here
  ],
}
```

## Real-World Example with Extensions

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('decanter')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Extend Stanford colors with your own
      colors: {
        'custom-blue': '#1e40af',
        'brand-primary': '#dc2626',
      },
      // Add custom font sizes
      fontSize: {
        'xxs': '0.625rem',
        '4xl': '2.5rem',
      },
      // Custom spacing
      spacing: {
        '72': '18rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    // Add additional plugins
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}
```

## Using Stanford Colors

With Decanter imported, you have access to all Stanford brand colors:

```html
<!-- Cardinal Red (Primary Brand Color) -->
<div class="bg-cardinal-red text-white">Stanford Cardinal Red</div>

<!-- Digital Blue (Web Interactive) -->
<div class="bg-digital-blue text-white">Digital Blue for Links</div>

<!-- Palo Alto Green -->
<div class="bg-palo-alto text-white">Palo Alto Green</div>

<!-- Stanford Black (Default Text) -->
<div class="text-black">Stanford Black Text</div>
```

## Using Stanford Typography

```html
<!-- Stanford Font Families -->
<h1 class="font-sans">Source Sans 3 (Default Sans)</h1>
<h2 class="font-serif">Source Serif 4 (Default Serif)</h2>
<h3 class="font-slab">Roboto Slab (Slab Serif)</h3>
<code class="font-mono">Roboto Mono (Monospace)</code>
<div class="font-stanford">Stanford Font (Logo)</div>

<!-- Modular Typography Scale -->
<h1 class="text-modular-5xl">Modular 5XL Heading</h1>
<h2 class="text-modular-4xl">Modular 4XL Heading</h2>
<p class="text-modular-base">Modular Base Text</p>

<!-- Fluid Typography (Responsive) -->
<h1 class="text-fluid-5xl">Fluid 5XL (Scales with viewport)</h1>
<p class="text-fluid-base">Fluid Base Text</p>
```

## Framework-Specific Examples

### Next.js with App Router
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('decanter')],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ... rest of config
}
```

### Vite + React
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('decanter')],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of config
}
```

### SvelteKit
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('decanter')],
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  // ... rest of config
}
```

## Advanced Configuration

### Explicit File Import

If you need to explicitly import specific config files:

```javascript
// CommonJS - explicit file import
module.exports = {
  presets: [require('decanter/tailwind.config.js')],
  // additional config...
}

// ES Module - explicit file import
import decanterConfig from 'decanter/tailwind.config.mjs';
export default {
  presets: [decanterConfig],
  // additional config...
}
```

## Bundle Compatibility

Decanter v7.4+ supports both CommonJS and ES modules out of the box:

- **Webpack**: Full support for both module systems
- **Turbopack**: Full support with automatic module resolution
- **Vite**: Full support with both CommonJS and ES modules
- **Rollup**: Full support
- **esbuild**: Full support

The package automatically resolves to the correct module format based on your build system and configuration.
