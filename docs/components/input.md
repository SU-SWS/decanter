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
```

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
