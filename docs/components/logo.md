# Logo Component Plugin

**File**: `/src/plugins/components/logo/logo.js`

## Overview

The logo component plugin provides specialized styling for displaying the Stanford University logo using custom font glyphs and typography. It ensures consistent branding across all Stanford digital properties while maintaining optimal readability and visual hierarchy with Stanford's signature Cardinal Red color.

## CSS Classes Generated

### `.logo`

Creates properly styled Stanford logo text with optimized typography and brand-compliant color.

**CSS Output:**
```css
.logo {
  display: inline-block;
  font-family: 'Stanford', sans-serif;
  font-weight: 400;
  line-height: 0.75;
  text-decoration: none;
  text-transform: none;
  transform: translateZ(0);
  font-style: normal;
  font-variant: normal;
  letter-spacing: 0;
  color: #8C1515; /* Cardinal Red */
  font-feature-settings: "liga" 1;
  font-variant-ligatures: discretionary-ligatures;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo:focus,
.logo:hover {
  color: #8C1515; /* Maintains Cardinal Red on interaction */
}
```

## Usage Examples

### Header Logo Placement
```html
  <!-- Main Stanford logo -->
  <a href="/" class="logo text-m5">
    Stanford University
  </a>  

  <!-- For logo images, use proper alt text -->
  <a href="/" class="logo">
    <img src="/logo.svg" alt="Stanford University" class="h-[32px] w-auto">
  </a>
```

This logo component ensures consistent Stanford brand presentation across all digital touchpoints while maintaining excellent performance and accessibility standards.
