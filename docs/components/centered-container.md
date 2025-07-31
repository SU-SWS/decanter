# Centered Container Component Plugin

**File**: `/src/plugins/components/layout/centered-container.js`

## Overview

# Centered Container

**File**: `/src/plugins/components/layout/centered-container.js`

## Overview
Provides responsive container components that center content horizontally with appropriate margins and padding for different screen sizes.

## Generated CSS Classes

- `.centered-container` - Full responsive centered container with screen-appropriate margins
- `.cc` - Shorthand alias for `.centered-container`

## Usage

```html
<!-- Main page container -->
<div class="centered-container">
  <h1>Page Title</h1>
  <p>Page content with responsive margins</p>
</div>

<!-- Using shorthand alias -->
<section class="cc">
  <article>Article content</article>
</section>

<!-- Nested containers (inner container gets no padding) -->
<div class="centered-container">
  <div class="centered-container">
    <p>Nested content without double padding</p>
  </div>
</div>
```

## Design System Integration

### Stanford Screen Margins
The plugin uses Stanford's screen margin system defined in the theme:
- **xs (mobile)**: 20px margins
- **sm (large mobile)**: 30px margins  
- **md (tablet)**: 50px margins
- **lg (desktop)**: 80px margins
- **xl and above**: Continues the progression

### Maximum Width Strategy
At very large screens (1700px+), the container maintains a maximum content width of 1500px to preserve readability and prevent excessively long line lengths.

### Nested Container Logic
Nested containers automatically remove their padding to prevent compounding margins and maintain consistent spacing.
