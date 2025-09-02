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
<button class="bg-digital-blue text-white hocus:bg-digital-blue-dark">
  Digital Blue Button
</button>

<!-- Borders and accents -->
<div class="border-2 border-fog bg-stone p-4">
  <p class="text-plum">Custom color combination</p>
</div>
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
// Create semantic color mappings in your project
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
