# Centered Container Component Plugin

**File**: `/src/plugins/components/layout/centered-container.js`

## Overview

The centered container plugin provides responsive container classes that center content horizontally with appropriate margins for different screen sizes. This plugin implements Stanford's layout guidelines for content width and spacing across different viewport sizes.

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

## Usage Examples

### Basic Page Layout
```html
<!-- Main page container -->
<div class="centered-container">
  <header>
    <h1>Stanford University</h1>
    <nav><!-- Navigation content --></nav>
  </header>
  
  <main>
    <h2>Welcome to Stanford</h2>
    <p>Stanford University content with appropriate margins...</p>
  </main>
  
  <footer>
    <p>Footer content</p>
  </footer>
</div>
```

### Section-based Layout
```html
<!-- Different sections with centered content -->
<section class="bg-cardinal-red text-white">
  <div class="centered-container py-16">
    <h2 class="type-6">Hero Section</h2>
    <p class="type-1">Compelling introduction text</p>
    <a href="#" class="button">Get Started</a>
  </div>
</section>

<section class="bg-white">
  <div class="centered-container py-12">
    <h2 class="type-4">Main Content</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Content cards -->
    </div>
  </div>
</section>

<section class="bg-gray-100">
  <div class="cc py-8">  <!-- Using shorthand class -->
    <h3 class="type-2">Footer Information</h3>
    <p>Additional content</p>
  </div>
</section>
```

### Nested Container Usage
```html
<!-- Outer container with inner nested containers -->
<div class="centered-container bg-white">
  <header class="py-8">
    <h1 class="type-5">Page Title</h1>
  </header>
  
  <!-- Inner content areas don't need additional centering -->
  <main class="py-12">
    <article class="prose max-w-4xl">
      <h2>Article Title</h2>
      <p>Article content flows naturally within the centered container...</p>
    </article>
  </main>
  
  <!-- Nested centered containers work correctly -->
  <section class="bg-gray-50 -mx-4 md:-mx-8 lg:-mx-12">
    <div class="cc py-8">  <!-- No padding conflict -->
      <h3>Special Section</h3>
      <p>This section breaks out of the main container but is still centered</p>
    </div>
  </section>
</div>
```

### Breakpoint Behavior
- **Mobile (< 640px)**: 20px horizontal margins
- **Small tablet (640px+)**: 30px horizontal margins
- **Tablet (768px+)**: 50px horizontal margins
- **Desktop (1024px+)**: 80px horizontal margins
- **Large desktop (1280px+)**: Continues margin progression
- **Ultra-wide (1700px+)**: Fixed 1500px content width

## Customization Options

### Creating Custom Container Variants
```javascript
// Add to your Tailwind configuration
module.exports = {
  presets: [require('decanter')],
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.container-narrow': {
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@screen md': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          }
        },
        '.container-wide': {
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6'),
          '@screen lg': {
            paddingLeft: theme('spacing.12'),
            paddingRight: theme('spacing.12'),
          }
        }
      })
    }
  ]
}
```

### Utility Combinations
```html
<!-- Container with additional spacing -->
<div class="centered-container py-16">Content</div>

<!-- Container with background -->
<section class="bg-gray-100">
  <div class="centered-container py-12">Content</div>
</section>

<!-- Container with maximum width override -->
<div class="centered-container max-w-6xl">Constrained content</div>

<!-- Container with custom padding -->
<div class="cc px-8 md:px-16">Custom horizontal padding</div>
```