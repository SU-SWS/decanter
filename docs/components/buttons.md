# Buttons

**File**: `/src/plugins/components/form/buttons.js`

## Overview
Provides base styles for interactive button elements, implementing Stanford design system guidelines for consistent button appearance and behavior.

## Generated CSS Classes

- `.button` - Primary button class with Stanford brand styling, hover states, and transitions

## Usage

```html
<button class="button">Submit Application</button>
<a href="/apply" class="button">Apply Now</a>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Override button colors
        'digital-red': {
          DEFAULT: '#8C1515', // Custom button background
        },
      },
    },
  },
  plugins: [
    // Add custom button variant
    function({ addComponents, theme }) {
      addComponents({
        '.button-secondary': {
          backgroundColor: theme('colors.white'),
          color: theme('colors.digital-red.DEFAULT'),
          border: `2px solid ${theme('colors.digital-red.DEFAULT')}`,
        },
      })
    },
  ],
}

### Creating Button Variants
```javascript
// In your Tailwind configuration
module.exports = {
  presets: [require('decanter')],
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.button-secondary': {
          backgroundColor: 'transparent',
          color: theme('colors.cardinal-red.DEFAULT'),
          border: `2px solid ${theme('colors.cardinal-red.DEFAULT')}`,
          '&:hover, &:focus': {
            backgroundColor: theme('colors.cardinal-red.DEFAULT'),
            color: 'white',
          }
        },
        '.button-outline': {
          backgroundColor: 'transparent',
          color: theme('colors.digital-blue.DEFAULT'),
          border: `2px solid ${theme('colors.digital-blue.DEFAULT')}`,
          '&:hover, &:focus': {
            backgroundColor: theme('colors.digital-blue.DEFAULT'),
            color: 'white',
          }
        },
        '.button-sm': {
          padding: '0.75rem 1.5rem',
          fontSize: '0.875rem',
        },
        '.button-lg': {
          padding: '1.25rem 2.5rem',
          fontSize: '1.125rem',
        }
      })
    }
  ]
}
```