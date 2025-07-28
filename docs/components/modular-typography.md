# Modular Typography Component Plugin

**File**: `/src/plugins/components/typography/modular-typography.js`

## Overview

The modular typography plugin provides Stanford's responsive modular typography scale as utility classes. It creates `.type-0` through `.type-9` classes that offer consistent, scalable typography with different font sizes for mobile, tablet, and desktop breakpoints.

## Purpose

Implements Stanford's modular typography system where `type-0` represents the base step (1em) and each subsequent level (`type-1` through `type-9`) progressively scales up. Each type class includes responsive font sizes and letter spacing optimized for different screen sizes, ensuring optimal readability across all devices.

## Generated CSS Classes

### Typography Scale Classes

The plugin generates ten classes representing Stanford's modular typography scale:

```css
.type-0 {
  /* Base typography step - reference size */
  font-size: 1.8rem;                    /* 18px base size */
  line-height: 1.25;                    /* Optimized for readability */
  letter-spacing: -0.01em;              /* Subtle character spacing */
  
  @screen md {
    font-size: 1.9rem;                  /* Slightly larger on tablets */
  }
  
  @screen lg {
    font-size: 2.1rem;                  /* Larger on desktop */
  }
}

.type-1 {
  font-size: 1.15em;                    /* 1.15x base */
  letter-spacing: -0.012em;
  
  @screen md {
    font-size: 1.2em;                   /* 1.2x scaling on tablets */
  }
  
  @screen lg {
    font-size: 1.25em;                  /* 1.25x scaling on desktop */
  }
}

.type-2 {
  font-size: 1.32em;                    /* 1.15² scaling */
  letter-spacing: -0.014em;
  
  @screen md {
    font-size: 1.44em;                  /* 1.2² scaling */
  }
  
  @screen lg {
    font-size: 1.56em;                  /* 1.25² scaling */
  }
}

/* Pattern continues through type-9 with exponential scaling */
.type-9 {
  font-size: 2.77em;                    /* 1.15⁹ scaling */
  letter-spacing: -0.026em;
  
  @screen md {
    font-size: 5.16em;                  /* 1.2⁹ scaling */
  }
  
  @screen lg {
    font-size: 7.45em;                  /* 1.25⁹ scaling */
  }
}
```

## Mathematical Scaling System

### Base Scaling Ratios
- **Mobile**: 1.15 ratio - Conservative scaling for smaller screens
- **Tablet**: 1.2 ratio - Moderate scaling for medium screens  
- **Desktop**: 1.25 ratio - Generous scaling for large screens

### Letter Spacing Formula
Letter spacing tightens progressively: `-0.01em + (level - 1) × -0.002em`
- **type-0**: -0.01em
- **type-1**: -0.012em
- **type-2**: -0.014em
- **type-9**: -0.026em

This creates tighter character spacing for larger text, improving readability at display sizes.

## Usage Examples

### Heading Hierarchy
```html
<!-- Large display heading -->
<h1 class="type-8 font-serif text-cardinal-red">
  Stanford University
</h1>

<!-- Section headings -->
<h2 class="type-6 font-sans text-black mb-6">
  Academic Excellence
</h2>

<h3 class="type-4 font-sans text-black mb-4">
  Research Programs
</h3>

<h4 class="type-2 font-sans text-black mb-3">
  Computer Science
</h4>

<!-- Body text -->
<p class="type-0 text-black leading-relaxed mb-4">
  Stanford University has been a leader in higher education for over 130 years, 
  fostering innovation and discovery across all disciplines.
</p>

<!-- Supporting text -->
<small class="type-0 text-cool-grey">
  Last updated: March 2024
</small>
```

## Responsive Behavior

### Screen Size Adaptations
```html
<!-- Heading that scales appropriately across devices -->
<h1 class="type-6">
  <!-- Mobile: 1.97em (35.46px at 18px base) -->
  <!-- Tablet: 2.99em (56.81px at 19px base) -->  
  <!-- Desktop: 3.81em (80.01px at 21px base) -->
  Responsive Heading
</h1>

<!-- Body text with optimal reading sizes -->
<p class="type-0">
  <!-- Mobile: 1.8rem (18px) -->
  <!-- Tablet: 1.9rem (19px) -->
  <!-- Desktop: 2.1rem (21px) -->
  This text maintains optimal readability across all screen sizes.
</p>
```

## Customization and Extensions

### Creating Additional Type Scales
```javascript
// Add to your Tailwind configuration
module.exports = {
  presets: [require('decanter')],
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.type-xs': {
          fontSize: '0.8em',
          letterSpacing: '-0.008em',
          lineHeight: '1.3',
        },
        '.type-display': {
          fontSize: '4em',
          letterSpacing: '-0.03em',
          lineHeight: '1',
          '@screen md': {
            fontSize: '6em',
          },
          '@screen lg': {
            fontSize: '8em',
          }
        }
      })
    }
  ]
}
```