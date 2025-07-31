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

## Generated CSS Classes

### `.centered-container` and `.cc`

Responsive container that centers content with screen-size appropriate margins.

```css
.centered-container, .cc {
  /* Base mobile margins */
  padding-left: 20px;                   /* xs screen margin */
  padding-right: 20px;
  margin-left: auto;                     /* Centers the container */
  margin-right: auto;
  
  /* Responsive margins for each breakpoint */
  @screen sm {
    padding-left: 30px;                 /* sm screen margin */
    padding-right: 30px;
  }
  
  @screen md {
    padding-left: 50px;                 /* md screen margin */
    padding-right: 50px;
  }
  
  @screen lg {
    padding-left: 80px;                 /* lg screen margin */
    padding-right: 80px;
  }
  
  /* ... continues for all breakpoints */
  
  /* Maximum width constraint at 1700px+ */
  @media only screen and (min-width: 1700px) {
    padding-left: calc((100% - 1500px)/2);
    padding-right: calc((100% - 1500px)/2);
  }
  
  /* Nested containers don't add extra padding */
  .centered-container, .cc {
    padding-left: 0;
    padding-right: 0;
  }
}
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
