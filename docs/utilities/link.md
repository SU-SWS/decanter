# Link Colors

**File**: `/src/plugins/utilities/link/link.js`

## Overview
Generates `.link-{color}` classes for each color in Stanford’s palette, enabling consistent branded link styling.

## Generated CSS Classes
Dynamic classes based on theme colors, e.g.:
- `.link-cardinal-red`
- `.link-cool-grey`
- `.link-digital-blue`
- …and all other colors in the palette

## Usage
```html
<nav class="link-cardinal-red link-no-underline">
  <a href="/academics">Academics</a>
</nav>

<article class="link-cool-grey">
  <p>Learn more on <a href="/research">Research</a>.</p>
</article>
```

## Customization
```js
// In tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-purple': '#abc123',
      },
    },
  },
};
```
