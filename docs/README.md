# Decanter Documentation

Welcome to the Decanter design system documentation. Decanter is Stanford University's design system built on Tailwind CSS.

## Getting Started

1. **[Usage Guide](usage.md)** - Complete guide on how to install and use Decanter in your projects
   - Installation instructions
   - Basic configuration examples
   - Stanford colors and typography
   - Framework-specific setups (Next.js, Vite, SvelteKit)
   - Advanced configuration options

2. **[Development Guide](development.md)** - Guide for developers working on the Decanter package itself
   - Architecture overview
   - Configuration factory pattern
   - Making changes and testing

## Key Features

- **Stanford Brand Colors** - Official Stanford University color palette
- **Typography System** - Stanford-approved fonts and typographic scales
- **Modular & Fluid Typography** - Responsive typography that scales with viewport
- **Modern Bundle Support** - Works with Webpack, Turbopack, Vite, and all modern bundlers
- **Dual Module Support** - Supports both CommonJS and ES modules
- **TypeScript Ready** - Full TypeScript support with type definitions

## Quick Start

```bash
npm install decanter
```

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('decanter')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
}
```

## Links

- **Demo Site**: [decanter-v7.netlify.app](https://decanter-v7.netlify.app/)
- **Main Documentation**: [decanter.stanford.edu](https://decanter.stanford.edu)
- **GitHub Repository**: [github.com/SU-SWS/decanter](https://github.com/SU-SWS/decanter)
- **NPM Package**: [npmjs.com/package/decanter](https://www.npmjs.com/package/decanter)
