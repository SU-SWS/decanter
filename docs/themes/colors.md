# Colors

**File**: `/src/plugins/theme/colors.js`

## Overview
Provides Stanford's official color palette from the Identity Guide, including primary colors, web interactive colors, accent colors and extra color variants for interactive states.

## Generated CSS Classes

- **Cardinal Red**: `.text-cardinal-red`, `.bg-cardinal-red`, `.border-cardinal-red` (with variants: `light`, `dark`, `xdark`, `xxdark`)
- **Black Spectrum**: `.text-black`, `.bg-black`, `.border-black` (with variants: `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, `true`)
- **Cool Grey**: `.text-cool-grey`, `.bg-cool-grey`, `.border-cool-grey`
- **Digital Colors**: `.text-digital-red`, `.bg-digital-red`, `.border-digital-red` (with variants: `light`, `dark`)
- **And many more** - All Stanford identity colors with Tailwind's standard color utilities

## Usage

```html
<!-- Primary Stanford colors -->
<div class="bg-cardinal-red text-white p-6">
  <h1>Stanford Cardinal Red</h1>
</div>

<!-- Text colors with various weights -->
<p class="text-black">Default black text</p>
<p class="text-black-70">Lighter black text</p>
<p class="text-cool-grey">Cool grey text</p>

<!-- Interactive elements -->
<button class="bg-digital-blue text-white hover:bg-digital-blue-dark">
  Digital Blue Button
</button>

<!-- Borders and accents -->
<div class="border-2 border-fog bg-stone p-4">
  <p class="text-warm-grey">Subtle color combination</p>
</div>
```

### Stanford Black Spectrum
Replaces Tailwind's default black with Stanford's refined grayscale system.

```javascript
black: {
  DEFAULT: '#2E2D29',    // Default text color on light backgrounds
  90: '#43423E',         // 90% opacity equivalent
  80: '#585754',         // 80% opacity equivalent
  70: '#6D6C69',         // 70% opacity equivalent
  60: '#767674',         // 60% opacity equivalent
  50: '#979694',         // 50% opacity equivalent - mid-gray
  40: '#ABABA9',         // 40% opacity equivalent
  30: '#C0C0BF',         // 30% opacity equivalent
  20: '#D5D5D4',         // 20% opacity equivalent
  10: '#EAEAEA',         // 10% opacity equivalent
  true: '#000000',       // Pure black for high contrast needs
}
```

### Web Interactive Colors

#### Digital Blue - Primary Interactive Color
```javascript
'digital-blue': {
  DEFAULT: '#006CB8',    // Example usage: links and interactive color
  light: '#85CCFF',
  dark: '#00548F',
  vivid: '#0597FF',
}
```

#### Digital Red - Secondary Interactive Color
```javascript
'digital-red': {
  DEFAULT: '#B1040E',    // Example usage: bright red for alerts and emphasis
  light: '#E50808',
  xlight: '#F83535',     // Example usage: link color on black (passes contrast for accessibility)
  dark: '#820000',
}
```

#### Digital Green - Success and Positive Actions
```javascript
'digital-green': {
  DEFAULT: '#008566',    // Example usage: success states, positive actions
  light: '#1AECBA',
  dark: '#006F54',
  bright: '#009b76',
}
```

### Accent Colors
Stanford's extended palette for diverse design applications.

```javascript
// Palo Alto Green
'palo-alto': {
  DEFAULT: '#175E54',
  light: '#2D716F',
  dark: '#014240',
}

// Palo Verde
'palo-verde': {
  DEFAULT: '#279989',
  light: '#59B3A9',
  dark: '#017E7C',
}

// Olive
olive: {
  DEFAULT: '#8F993E',
  light: '#A6B168',
  dark: '#7A863B',
}
```

```javascript
// Bay
bay: {
  DEFAULT: '#6fa287',
  light: '#8ab8a7',
  dark: '#417865',
}

// Sky - Replaces Tailwind's sky color
sky: {
  DEFAULT: '#4298B5',
  light: '#67AFD2',
  dark: '#016895',
}

// Lagunita - Used for some of our form elements
lagunita: {
  DEFAULT: '#007C92',
  light: '#009AB4',
  dark: '#006B81',
  20: '#CCEBF0',
  40: '#8DD8E4',
}
```

```javascript
// Poppy
poppy: {
  DEFAULT: '#E98300',
  light: '#F9A44A',
  dark: '#D1660F',
}

// Spirited
spirited: {
  DEFAULT: '#E04F39',
  light: '#F4795B',
  dark: '#C74632',
}

// Illuminating
illuminating: {
  DEFAULT: '#FEDD5C',
  light: '#FFE781',
  dark: '#FEC51D',
}
```

```javascript
// Plum
plum: {
  DEFAULT: '#620059',
  light: '#734675',
  dark: '#350D36',
}

// Brick
brick: {
  DEFAULT: '#651C32',
  light: '#7F2D48',
  dark: '#42081B',
}
```

```javascript
// Archway
archway: {
  DEFAULT: '#5D4B3C',
  light: '#766253',
  dark: '#2F2424',     // Same as previous "Chocolate" color
}

// Stone - Replaces Tailwind's stone color
stone: {
  DEFAULT: '#7F7776',
  light: '#D4D1D1',
  dark: '#544948',     // Same as previous "Stone" color
}

// Fog
fog: {
  DEFAULT: '#DAD7CB',
  light: '#F4F4F4',    // Same as "Fog" in Identity Guide
  dark: '#B6B1A9',     // Same as "Driftwood" color
}

// Foggy - an alias for "Fog" for backward compatibility; will be deprecated in future versions
foggy: {
  DEFAULT: '#DAD7CB',
  light: '#F4F4F4',    // Same as "Fog" in Identity Guide
  dark: '#B6B1A9',     // Same as "Driftwood" color
}
```

### Social Media Brand Colors
```javascript
// Commonly used social media colors
facebook: '#4267B2',
twitter: '#1DA1F2',
instagram: '#E1306C',
linkedin: '#0077B5',
youtube: '#FF0000',
```

## Customization and Extension

### Adding Custom Colors
```javascript
// In your Tailwind configuration
module.exports = {
  presets: [require('decanter')],
  theme: {
    extend: {
      colors: {
        // School-specific additions
        'engineering-orange': '#FF6B35',
        'medicine-blue': '#1E3A8A',
        'business-gold': '#F59E0B',

        // Department branding
        'cs-purple': '#7C3AED',
        'law-navy': '#1E40AF',

        black: {
          // Add a new custom step on our black spectrum
          110: '#060606',
        }
      }
    }
  }
}
```

### Semantic Color Aliases
```javascript
// Create semantic color mappings
module.exports = {
  presets: [require('decanter')],
  theme: {
    extend: {
      colors: {
        // Semantic aliases
        'brand': '#8C1515',          // cardinal-red
        'primary': '#006CB8',        // digital-blue
        'success': '#008566',        // digital-green
        'warning': '#E98300',        // poppy
        'danger': '#B1040E',         // digital-red
        'info': '#007C92',           // lagunita
      }
    }
  }
}
```

This comprehensive color system ensures Stanford brand consistency while providing the flexibility needed for diverse web applications and maintaining the highest accessibility standards.
