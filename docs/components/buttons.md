# Buttons Component Plugin

**File**: `/src/plugins/components/form/buttons.js`

## Overview

The buttons plugin provides base styles for interactive button elements, implementing Stanford design system guidelines for consistent button appearance and behavior across web interfaces.

## Generated CSS Classes

### `.button`

The primary button class with Stanford brand styling.

```css
.button {
  font-family: 'Source Sans 3', sans-serif;
  cursor: pointer;
  display: inline-block;
  border: none;
  font-weight: 400;                    /* Normal weight */
  line-height: 1;                      /* Tight line height for buttons */
  text-align: center;
  text-decoration: none;               /* Clean appearance */
  width: auto;                         /* Flexible width */
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  padding: 1rem 2rem;                  /* 10px 20px at root font size */
  background-color: #9D1C1C;           /* Digital red (Stanford brand) */
  color: white;
}
```

### Interaction States

```css
.button:active,
.button:hover,
.button:focus {
  text-decoration: underline;          /* Accessibility enhancement */
}

.button:hover,
.button:focus {
  background-color: #2E2D29;           /* Stanford black */
  color: white;
}

.button:focus {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
```

## Usage Examples

### Basic Button Usage
```html
<!-- Standard button element -->
<button class="button">Submit Form</button>

<!-- Input buttons -->
<input type="submit" class="button" value="Submit">
<input type="button" class="button" value="Cancel">
<input type="reset" class="button" value="Reset">

<!-- Link styled as button -->
<a href="/action" class="button">Get Started</a>
```

## Customization Options

### Extending with Tailwind Utilities
```html
<!-- Size variations -->
<button class="button text-sm px-4 py-2">Small Button</button>
<button class="button text-lg px-6 py-3">Large Button</button>

<!-- Width variations -->
<button class="button w-full">Full Width Button</button>
<button class="button w-32">Fixed Width</button>

<!-- Spacing variations -->
<button class="button mr-4">Button with Margin</button>
```

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