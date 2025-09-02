# Base Plugins Documentation

This document covers the base plugins located in `/src/plugins/base/` that provide fundamental HTML element styling.

## Overview

Base plugins establish the foundational styles for HTML elements, creating a consistent starting point for all content. These styles are applied globally and form the base layer of the design system.

## File: `base.js`

**Purpose**: Defines default styles for core HTML elements including typography, colors, and layout fundamentals.

### Key Features

#### Root Element Configuration
```javascript
html: {
  fontFamily: sans,                    // Source Sans 3 as default
  color: config('theme.colors.black.DEFAULT'), // Stanford black (#2E2D29)
  fontSize: config('theme.decanter.base.rootFontSize'), // 10px base
  lineHeight: '1.15',                  // Normalize-based line height
}
```

#### Body Styles
```javascript
body: {
  backgroundColor: config('theme.colors.white'),
  color: config('theme.colors.black.DEFAULT'),
  overflowX: 'hidden',                 // Prevent horizontal scroll
  fontSize: '1.8rem',                  // 18px at base scale
  '@screen md': { fontSize: '1.9rem' }, // 19px on tablets
  '@screen 2xl': { fontSize: '2.1rem' }, // 21px on large screens
}
```

#### Typography Hierarchy

**Paragraph Styles**:
```javascript
p: {
  lineHeight: config('theme.lineHeight.cozy'), // 1.25 on mobile
  marginTop: '0',
  marginBottom: '1em',
  '@screen md': {
    lineHeight: config('theme.lineHeight.DEFAULT'), // 1.5 on desktop
  },
}
```

**Heading Hierarchy**:
- `h1`: Uses `type5` scale (largest)
- `h2`: Uses `type4` scale
- `h3`: Uses `type3` scale
- `h4`: Uses `type2` scale
- `h5`: Uses `type1` scale
- `h6`: Uses `type0` scale (base size)

All headings inherit common properties from `theme.decanter.typography.headings`.

#### Link Styling
```javascript
a: {
  color: config('theme.colors.digital-blue.DEFAULT'), // Stanford digital blue
  textDecoration: 'underline',
  fontWeight: config('theme.fontWeight.semibold'),     // 600 weight
  '&:hover, &:focus': {
    color: config('theme.colors.black.DEFAULT'),      // Hover to black
  },
}
```

#### List Styling
```javascript
ul: {
  paddingLeft: '1em',
  listStyleType: 'disc',
}
ol: {
  paddingLeft: '1em', 
  listStyleType: 'decimal',
}
'li, dd': {
  lineHeight: config('theme.decanter.base.baseLineHeight'),
  marginBottom: '0.5em',
  '&:last-child': { marginBottom: '0' },
}
```

#### Table Styling
Comprehensive table styling including:
- Border collapse and spacing
- Responsive font sizing
- Header styling with semibold weight
- Subtle borders using `black.20` color
- Proper caption and cell padding

#### Image Handling
```javascript
img: {
  margin: '0',
  padding: '0', 
  display: 'block',      // Removes inline spacing issues
  height: 'auto',        // Maintains aspect ratio
  maxWidth: '100%',      // Responsive by default
}

figcaption: {
  marginTop: '0.4em',
  fontSize: 'max(1.6rem, 0.9em)', // Responsive with minimum size
  lineHeight: '1.3',
  color: config('theme.colors.cool-grey'), // Subtle caption color
}
```

#### Overriding Base Styles
Base styles can be overridden using Tailwind utilities:
```html
<!-- Override default paragraph styling -->
<p class="text-lg leading-loose mb-8">
  Custom paragraph with larger text and spacing
</p>

<!-- Override default link styling -->
<a href="#" class="text-cardinal-red no-underline font-normal">
  Custom link styling
</a>

<!-- Override default heading styling -->
<h2 class="text-2xl font-light text-cool-grey">
  Custom heading appearance
</h2>
```

### Configuration Integration

The base styles integrate with Decanter's theme configuration:

#### Typography Config
References `theme.decanter.typography` for:
- Type scale definitions (`type0` through `type9`)
- Heading common properties
- Base line heights and spacing

#### Color Config
Uses Stanford brand colors:
- `black.DEFAULT`: Primary text color (#2E2D29)
- `digital-blue.DEFAULT`: Link color
- `cool-grey`: Secondary text color
- `white`: Background color

#### Responsive Config
Leverages Tailwind's screen configuration:
- `@screen md`: Tablet and up (768px+)
- `@screen 2xl`: Large desktop (1536px+)

### Customization

#### Extending Base Styles
Add additional base styles in your own configuration:
```javascript
// tailwind.config.js
module.exports = {
  presets: [require('decanter')],
  plugins: [
    function({ addBase }) {
      addBase({
        'h1, h2, h3': {
          // Additional heading styles
          marginTop: '2em',
        },
        'code': {
          // Custom code styling
          backgroundColor: '#f5f5f5',
          padding: '0.25em',
        }
      })
    }
  ]
}
```

#### Overriding Base Styles
Replace base styles entirely:
```javascript
// tailwind.config.js
module.exports = {
  presets: [require('decanter')],
  corePlugins: {
    // Disable Decanter base styles if needed
    preflight: false,
  },
  plugins: [
    // Add your own base styles
  ]
}
```