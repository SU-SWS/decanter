# Decanter Documentation

Welcome to the Decanter design system documentation. Decanter is Stanford University's design system built on Tailwind CSS.

## Getting Started

1. **[Installation & Configuration Guide](installation.md)** - Complete guide on how to install and use Decanter in your projects
   - Installation instructions
   - Basic configuration examples
   - Stanford colors and typography
   - Framework-specific setups (Next.js, Vite, SvelteKit)
   - Advanced configuration options

2. **[Development Guide](development.md)** - Guide for developers working on the Decanter package itself
   - Architecture overview
   - Configuration factory pattern
   - Making changes and testing

3. **Component Plugins**: [components/README.md](components/README.md) - Documentation for UI components
   - Form controls: buttons, inputs, form elements
   - Layout components: centered-container, grid-gap, embed-container
   - Navigation helpers: lists, stretched-link, skiplink
   - Typography components: modular-typography, fluid-typography, wysiwyg, text-shadow

4. **Theme Plugins**: [themes/README.md](themes/README.md) - Documentation for design tokens and theme extensions
   - Colors: Stanford palette with light/dark variants
   - Typography: fontFamily, fontSize, fontWeight, lineHeight, lineClamp
   - Spacing: spacing scale, gap utilities, maxWidth
   - Borders: borderRadius, borderWidth
   - Breakpoints: screens, transitionDuration

5. **Utility Plugins**: [utilities/README.md](utilities/README.md) - Documentation for utility classes
   - Accessibility: `.accessibility-hidden`, `.a11y-hidden`
   - Visual Effects: `.backface-hidden`
   - Link styling: `.link-{color}`, `.link-underline`, `.link-no-underline`, `.link-regular`, `.link-bold`
   - Typography helpers: `.break-words`, `.text-vertical-lr`

6. **Base Plugins**: [base-plugins.md](base-plugins.md) - Documentation for foundational styles
   - Preflight reset and base layer
   - Core typography resets
   - Base component styling and utility layers

7. **CSS Reference**: [css-files.md](css-files.md) - Overview of generated CSS files
   - `index.css`: compiled CSS entry point
   - `decanter.js`: JavaScript entry for custom properties
   - Layer outputs: base, components, utilities

8. **CSS Class Index**: Comprehensive list of all custom CSS classes provided by Decanter. (see [index.md](index.md))


## Quick Start

```bash
npm install decanter
```

```javascript
// tailwind.config.js (CommonJS)
module.exports = {
  presets: [require('decanter')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
}
```

```javascript
// tailwind.config.mjs (ES Module)
import decanter from 'decanter';

export default {
  presets: [decanter],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

## Links

- **Demo Site**: [decanter-v7.netlify.app](https://decanter-v7.netlify.app/)
- **Main Documentation**: [decanter.stanford.edu](https://decanter.stanford.edu)
- **GitHub Repository**: [github.com/SU-SWS/decanter](https://github.com/SU-SWS/decanter)
- **NPM Package**: [npmjs.com/package/decanter](https://www.npmjs.com/package/decanter)
