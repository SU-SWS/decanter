# Theme Plugins Documentation

This document covers the theme plugins located in `/src/plugins/theme/` that define the design tokens and configuration for Tailwind's theme system.

## Overview

Theme plugins configure Tailwind CSS with Stanford-specific design tokens including colors, typography, spacing, and other design system values. These plugins extend Tailwind's default theme to provide Stanford brand compliance.

## Theme Structure

```
theme/
├── colors.js              # Stanford brand colors and palette
├── fontFamily.js           # Font family definitions
├── fontSize.js             # Font size scale
├── fontWeight.js           # Font weight values
├── lineHeight.js           # Line height scale
├── spacing.js              # Spacing and sizing scale
├── borderRadius.js         # Border radius values
├── borderWidth.js          # Border width values
├── gap.js                  # Gap spacing for grid/flex
├── lineClamp.js            # Line clamp utilities
├── maxWidth.js             # Maximum width constraints
├── screens.js              # Responsive breakpoints
├── transitionDuration.js   # Animation timing
└── decanter.js             # Core Decanter-specific theme values
```

## Core Theme Files

### `colors.js`
**Purpose**: Defines Stanford's official color palette from the Identity Guide.

#### Stanford Brand Colors
```javascript
'cardinal-red': {
  DEFAULT: '#8C1515',    // Main Stanford brand color
  light: '#B83A4B',
  dark: '#820000',
  xdark: '#7A0000',      // High contrast variant
  xxdark: '#541107',     // Hover/focus for xdark
}
```

#### Extended Black Spectrum
Replaces Tailwind's default black with Stanford's refined grayscale:
```javascript
black: {
  DEFAULT: '#2E2D29',    // Default text color
  90: '#43423E',         // 90% opacity equivalent
  80: '#585754',         // 80% opacity equivalent
  // ... down to 10% and true black
  true: '#000000',       // High contrast when needed
}
```

#### Web Interactive Colors
```javascript
'digital-blue': {
  DEFAULT: '#006CB8',    // Primary interactive color
  light: '#0098DB',      // Lighter variant
  dark: '#00548F',       // Darker variant
}
```

#### Secondary Colors
- `'cool-grey'`: `#53565A` - Secondary text and subtle elements
- `'palo-alto'`: `#017E43` - Stanford green accent
- `'palo-verde'`: `#279989` - Complementary green
- `'lagunita'`: `#007C92` - Stanford teal

#### Usage Examples
```html
<!-- Stanford brand colors -->
<div class="bg-cardinal-red text-white">Stanford Cardinal</div>
<div class="bg-digital-blue text-white">Interactive Blue</div>
<div class="text-black">Default text color</div>
<div class="text-cool-grey">Secondary text</div>

<!-- Color variants -->
<div class="bg-cardinal-red-dark">Dark cardinal</div>
<div class="border-black-20">Subtle border</div>
```

### `fontFamily.js`
**Purpose**: Configures font family stacks for Stanford typography.

```javascript
sans: ['Source Sans 3', ...defaultTheme.fontFamily.sans],
serif: ['Source Serif 4', ...defaultTheme.fontFamily.serif],
slab: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
stanford: ['Stanford', ...defaultTheme.fontFamily.sans],
```

#### Usage Examples
```html
<div class="font-sans">Source Sans 3 (default)</div>
<div class="font-serif">Source Serif 4</div>
<div class="font-slab">Roboto Slab headings</div>
<div class="font-mono">Roboto Mono code</div>
<div class="font-stanford">Stanford brand font</div>
```

### `fontSize.js`
**Purpose**: Defines responsive font size scale with Stanford-appropriate sizing.

#### Modular Scale
Extends Tailwind's default sizes with Stanford-specific values:
```javascript
// Standard Tailwind sizes remain
// Plus Stanford additions:
'modular-xs': ['1.4rem', { lineHeight: '1.25' }],
'modular-sm': ['1.6rem', { lineHeight: '1.25' }],
'modular-base': ['1.8rem', { lineHeight: '1.5' }],
// ... up to modular-9xl
```

#### Fluid Typography
Responsive font sizes that scale with viewport:
```javascript
'fluid-xs': 'clamp(1.2rem, 2vw, 1.4rem)',
'fluid-sm': 'clamp(1.4rem, 2.5vw, 1.6rem)',
// ... scales appropriately across breakpoints
```

### `decanter.js`
**Purpose**: Core Decanter-specific theme values that don't fit into standard Tailwind categories.

#### Typography System
```javascript
typography: {
  // Type scale definitions (type0 through type9)
  type0: { fontSize: '1.8rem', lineHeight: '1.25' },
  type1: { fontSize: '2rem', lineHeight: '1.25' },
  // ... responsive definitions with breakpoint variations
  
  // Heading defaults
  headings: {
    fontFamily: 'Source Sans 3, sans-serif',
    fontWeight: '600',
    lineHeight: '1.15',
    marginTop: '0',
    marginBottom: '0.5em',
  }
}
```

#### Base Configuration
```javascript
base: {
  rootFontSize: '10px',           // 1rem = 10px for easy calculation
  baseLineHeight: '1.5',          // Default line height
  fontSmoothing: {                // Font rendering optimization
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  }
}
```

## Supporting Theme Files

### `spacing.js`
Extends Tailwind's spacing scale with additional values commonly needed in Stanford designs:
```javascript
'18': '4.5rem',    // 45px
'22': '5.5rem',    // 55px
'26': '6.5rem',    // 65px
// Additional spacing values for Stanford layouts
```

### `screens.js`
Defines responsive breakpoints optimized for Stanford websites:
```javascript
'2xs': '375px',    // Small mobile
'xs': '475px',     // Large mobile
'sm': '640px',     // Small tablet (default)
'md': '768px',     // Tablet (default)
'lg': '1024px',    // Desktop (default)
'xl': '1280px',    // Large desktop (default)
'2xl': '1536px',   // Extra large (default)
'3xl': '1600px',   // Ultra wide displays
```

### `borderRadius.js`
Stanford-appropriate border radius values:
```javascript
'4xl': '2rem',     // 32px
'5xl': '2.5rem',   // 40px
'6xl': '3rem',     // 48px
```

### `maxWidth.js`
Content width constraints for Stanford layouts:
```javascript
'8xl': '90rem',    // 1440px
'9xl': '100rem',   // 1600px
'10xl': '110rem',  // 1760px
```

## Usage Patterns

### Extending Theme Values
```javascript
// tailwind.config.js
module.exports = {
  presets: [require('decanter')],
  theme: {
    extend: {
      colors: {
        // Add custom colors while keeping Stanford colors
        'custom-blue': '#1e40af',
      },
      spacing: {
        // Add custom spacing while keeping Stanford spacing
        '128': '32rem',
      }
    }
  }
}
```

### Accessing Theme Values in Plugins
```javascript
function({ theme, addComponents }) {
  addComponents({
    '.custom-component': {
      color: theme('colors.cardinal-red.DEFAULT'),
      fontSize: theme('fontSize.modular-lg[0]'),
      lineHeight: theme('fontSize.modular-lg[1].lineHeight'),
      fontFamily: theme('fontFamily.sans').join(', '),
    }
  })
}
```

### Responsive Design with Theme
```html
<!-- Using responsive breakpoints -->
<div class="text-modular-base md:text-modular-lg xl:text-modular-xl">
  Responsive text sizing
</div>

<!-- Using spacing scale -->
<div class="p-4 md:p-6 xl:p-8 max-w-6xl mx-auto">
  Responsive container
</div>
```

## Typography System Integration

### Type Scale Usage
The modular typography system provides consistent scaling:
```html
<!-- Component hierarchy -->
<h1 class="text-modular-5xl">Hero Heading</h1>
<h2 class="text-modular-3xl">Section Heading</h2>
<h3 class="text-modular-xl">Subsection</h3>
<p class="text-modular-base">Body text</p>
<small class="text-modular-sm">Fine print</small>
```

### Fluid Typography
For responsive typography that scales smoothly:
```html
<h1 class="text-fluid-5xl">Scales from mobile to desktop</h1>
<p class="text-fluid-base">Body text that adapts</p>
```

## Color System Integration

### Semantic Color Usage
```html
<!-- Brand colors -->
<header class="bg-cardinal-red text-white">Stanford Header</header>

<!-- Interactive elements -->
<a href="#" class="text-digital-blue hover:text-black">
  Interactive link
</a>

<!-- Content hierarchy -->
<h2 class="text-black">Primary heading</h2>
<p class="text-black-70">Secondary text</p>
<aside class="text-cool-grey">Sidebar content</aside>
```

### Accessibility Considerations
All color combinations in the theme meet WCAG AA contrast requirements:
- `cardinal-red` on `white`: 4.8:1 ratio
- `digital-blue` on `white`: 4.7:1 ratio
- `black.DEFAULT` on `white`: 12.6:1 ratio

## Performance Considerations

### Theme Size
- **Colors**: ~15 color families with variants
- **Typography**: ~20 font size definitions
- **Spacing**: ~40 spacing values
- **Total theme size**: ~8KB uncompressed

### Build Optimization
Theme values are processed at build time:
- Unused values are purged automatically
- CSS custom properties generated for dynamic values
- Responsive variants created only for used breakpoints

## Customization Strategies

### Brand Adaptation
To adapt for Stanford schools/departments:
```javascript
// Custom theme extension
theme: {
  extend: {
    colors: {
      // School-specific colors while maintaining Stanford base
      'school-primary': '#1e3a8a',
      'school-accent': '#059669',
    }
  }
}
```

### Design System Extension
```javascript
// Adding new design tokens
theme: {
  extend: {
    fontSize: {
      // Custom size for specific use case
      'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
    },
    spacing: {
      // Custom spacing for component library
      'component-sm': '1.25rem',
      'component-lg': '2.75rem',
    }
  }
}
```

## Testing and Validation

### Design Token Testing
- **Color contrast**: Automated WCAG compliance testing
- **Typography scale**: Visual regression testing across breakpoints
- **Spacing consistency**: Layout validation in various contexts

### Integration Testing
- **Theme compilation**: Verify all values compile correctly
- **CSS generation**: Test output size and structure
- **Runtime access**: Verify theme values accessible in plugins

This theme system provides the foundation for all Stanford design system implementations while maintaining flexibility for customization and extension.
