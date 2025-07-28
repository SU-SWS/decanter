# Source Code Architecture Overview

This document provides a comprehensive overview of the `/src` directory structure and the purpose of each component in the Decanter design system.

## Directory Structure

```
src/
├── decanter.js           # Main CSS import file for bundled usage
├── css/
│   └── index.css         # Base CSS file with fonts and Tailwind directives
└── plugins/
    ├── base/             # Base HTML element styles
    ├── theme/            # Theme configuration (colors, typography, spacing)
    ├── components/       # Component-specific utilities and styles
    └── utilities/        # Custom utility classes
```

## File Categories

### Core Files
- **`decanter.js`**: Entry point for importing CSS when using Decanter as a bundled package
- **`css/index.css`**: Core CSS file containing font imports and Tailwind directives

### Plugin System
Decanter extends Tailwind CSS through a comprehensive plugin system organized into four main categories:

#### 1. Base Plugins (`plugins/base/`)
Define fundamental HTML element styles that serve as the foundation for all content.

#### 2. Theme Plugins (`plugins/theme/`)
Configure Tailwind's theme system with Stanford-specific design tokens including:
- Colors (Stanford brand palette)
- Typography (font families, sizes, weights)
- Spacing and layout values
- Border and transition properties

#### 3. Component Plugins (`plugins/components/`)
Provide ready-to-use component classes for common UI patterns:
- Form elements and buttons
- Layout containers and grids
- Typography systems
- Media handling
- Navigation elements

#### 4. Utility Plugins (`plugins/utilities/`)
Add specialized utility classes for specific use cases:
- Accessibility helpers
- Advanced typography controls
- Link styling utilities
- Visual effects

## Plugin Architecture

Each plugin follows a consistent pattern:

```javascript
/**
 * Plugin description and usage documentation
 */
module.exports = function () {
  return function ({ addBase, addComponents, addUtilities, theme }) {
    // Plugin implementation using Tailwind CSS plugin API
  };
};
```

### Key Features:
- **Modular Design**: Each plugin is self-contained and can be used independently
- **Stanford Branding**: All plugins follow Stanford's design system guidelines
- **Responsive**: Most plugins include responsive breakpoint considerations
- **Accessible**: Accessibility best practices are built into component designs
- **Configurable**: Plugins use Tailwind's theme system for customization

## Integration Points

### Tailwind Configuration
All plugins are imported and registered in the main Tailwind configuration files:
- `tw.config.js` (factory function)
- `tailwind.config.js` (CommonJS)
- `tailwind.config.mjs` (ES Module)

### CSS Output
When Tailwind processes the configuration, these plugins generate:
- **Base styles**: Fundamental HTML element styling
- **Component classes**: Named utility classes for common patterns
- **Utility classes**: Single-purpose classes for specific styling needs

## Development Workflow

When working with the source code:

1. **Theme Changes**: Modify files in `plugins/theme/` to adjust design tokens
2. **Component Updates**: Edit files in `plugins/components/` to change component behavior
3. **New Utilities**: Add files to `plugins/utilities/` for new utility classes
4. **Base Styling**: Modify `plugins/base/` for fundamental HTML element changes
5. **CSS Updates**: Edit `css/index.css` for font imports or global CSS changes

## Documentation Structure

Each category has detailed documentation:
- [`base-plugins.md`](./base-plugins.md) - Base HTML element styling
- [`theme-plugins.md`](./theme-plugins.md) - Theme configuration and design tokens
- [`component-plugins.md`](./component-plugins.md) - Component utilities and patterns
- [`utility-plugins.md`](./utility-plugins.md) - Specialized utility classes
- [`css-files.md`](./css-files.md) - Core CSS and font management

## Stanford Design System Compliance

All plugins are designed to implement Stanford's official design system:
- **Colors**: Official Stanford brand colors from the Identity Guide
- **Typography**: Stanford-approved font families and hierarchies
- **Spacing**: Consistent spacing scales following Stanford guidelines
- **Components**: Common UI patterns used across Stanford websites
- **Accessibility**: WCAG compliance built into all components

For more detailed information about each category, see the specific documentation files linked above.
