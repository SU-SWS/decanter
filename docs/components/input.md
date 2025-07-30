# Input

**File**: `/src/plugins/components/form/input.js`

## Overview
Provides base styles for input elements to ensure consistent typography and appearance, compensating for HTML font size differences between Tailwind CSS and Decanter.

## Generated CSS Classes

- `.input` - Base input styling with Stanford design system colors, typography, and borders

## Usage

```html
<label for="email">Email Address</label>
<input type="email" id="email" class="input" placeholder="Enter your email">

<label for="name">Full Name</label>
<input type="text" id="name" class="input" required>

<label for="phone">Phone Number</label>
<input type="tel" id="phone" class="input">
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      decanter: {
        base: {
          inputFontSize: '2rem', // Larger input text
        },
      },
      colors: {
        black: {
          20: 'rgba(0, 0, 0, 0.2)', // Custom border color
        },
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.input-large': {
          fontSize: '2.2rem',
          padding: '1.2rem 1.6rem',
        },
      })
    },
  ],
}



## Design System Integration

### Typography Standards
- **Font size**: 1.8rem (18px) - Decanter's standard input font size
- **Line height**: 1.25 (snug) - Optimized for single-line inputs
- **Text color**: Stanford black (#2E2D29) for maximum readability

### Visual Design
- **Border color**: 20% opacity Stanford black for subtle definition
- **Display**: Block-level for full-width behavior
- **Consistency**: Matches other form elements in the system

### Accessibility Features
- **Readable font size**: 18px prevents zoom on mobile devices
- **High contrast**: Text color provides excellent readability
- **Touch-friendly**: Block display creates larger touch targets

## Usage Examples

### Basic Text Inputs
```html
<!-- Standard text input -->
<label for="name" class="label">Full Name</label>
<input type="text" id="name" class="input" placeholder="Enter your full name">

<!-- Email input with validation -->
<label for="email" class="label">Email Address</label>
<input type="email" id="email" class="input" required 
       placeholder="user@stanford.edu">

<!-- Password input -->
<label for="password" class="label">Password</label>
<input type="password" id="password" class="input" required>

<!-- Number input -->
<label for="age" class="label">Age</label>
<input type="number" id="age" class="input" min="18" max="120">
```

## Customization Options

### Size Variations
```html
<!-- Small input -->
<input type="text" class="input text-sm py-2 px-3">

<!-- Large input -->
<input type="text" class="input text-xl py-4 px-4">

<!-- Compact input for tight spaces -->
<input type="text" class="input py-1 px-2 text-base">
```

### Creating Input Variants
```javascript
// Add to your Tailwind configuration
module.exports = {
  presets: [require('decanter')],
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.input-sm': {
          fontSize: '1.6rem',
          padding: '0.5rem 0.75rem',
        },
        '.input-lg': {
          fontSize: '2rem',
          padding: '1rem 1.25rem',
        },
        '.input-error': {
          borderColor: theme('colors.cardinal-red.DEFAULT'),
          '&:focus': {
            borderColor: theme('colors.cardinal-red.DEFAULT'),
            boxShadow: `0 0 0 3px ${theme('colors.cardinal-red.DEFAULT')}33`,
          }
        },
        '.input-success': {
          borderColor: theme('colors.palo-alto'),
          '&:focus': {
            borderColor: theme('colors.palo-alto'),
            boxShadow: `0 0 0 3px ${theme('colors.palo-alto')}33`,
          }
        }
      })
    }
  ]
}
```