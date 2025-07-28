# Component Plugins Documentation

This document provides an overview of the component plugins located in `/src/plugins/components/` that provide ready-to-use component classes and utilities for common UI patterns.

> **📚 Detailed Documentation**: Each component plugin now has its own detailed documentation file in the [`/docs/components/`](./components/) directory. See the [Component Documentation Index](./components/README.md) for direct links to individual component docs.

## Overview

Component plugins generate CSS classes for common UI patterns used across Stanford websites. These components implement Stanford design system guidelines and provide consistent, accessible building blocks for web interfaces.

## Component Categories

The component plugins are organized into logical categories. Each category has detailed documentation with usage examples, customization options, and accessibility considerations.

### 🔘 Form Components
Interactive form elements with Stanford branding:
- **[Buttons](./components/buttons.md)** - Button styles with brand colors and states
- **[Form Elements](./components/form-elements.md)** - Checkboxes, radios, selects, textareas
- **[Input Fields](./components/input.md)** - Text input styling and validation states

### 📐 Layout Components  
Container and spacing utilities for consistent layouts:
- **[Centered Container](./components/centered-container.md)** - Responsive page containers
- **[Grid Gap](./components/grid-gap.md)** - Responsive gap spacing for layouts

### 📝 Typography Components
Text styling implementing Stanford's typography system:
- **[Modular Typography](./components/modular-typography.md)** - Stanford's type scale (.type-0 to .type-9)
- **Fluid Typography** - Smoothly scaling responsive text (documentation pending)
- **Typography Styles** - Additional text utilities (documentation pending)  
- **WYSIWYG Content** - Rich text area styling (documentation pending)

### Additional Component Categories
Other specialized components include:
- **Link Components** - Enhanced link behaviors
- **List Components** - Improved list styling
- **Logo Components** - Stanford brand elements
- **Media Components** - Responsive embeds and media
- **Spacing Components** - Advanced spacing utilities
- **Visual Effects** - Text shadows and enhancements
- **Accessibility Components** - Skip links and a11y helpers
- **Table Components** - Enhanced table styling

> **📖 See Full Documentation**: Visit the [Component Documentation Index](./components/README.md) for complete details on all components.

## Quick Start Examples

Here are some common usage patterns. For detailed documentation, see the individual component files.

### Basic Form with Stanford Styling
```html
<form class="max-w-md mx-auto">
  <div class="mb-6">
    <label for="name" class="label">Full Name</label>
    <input type="text" id="name" class="input" required>
  </div>
  
  <div class="mb-6">
    <label for="email" class="label">Email</label>
    <input type="email" id="email" class="input" required>
  </div>
  
  <button type="submit" class="button w-full">Submit</button>
</form>
```
> **📖 Detailed docs**: [Buttons](./components/buttons.md), [Input](./components/input.md), [Form Elements](./components/form-elements.md)

### Responsive Page Layout
```html
<section class="bg-cardinal-red text-white">
  <div class="centered-container py-16">
    <h1 class="type-7 mb-6">Stanford University</h1>
    <p class="type-2">Excellence in education and research</p>
  </div>
</section>

<main class="centered-container py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap">
    <!-- Content cards -->
  </div>
</main>
```
> **📖 Detailed docs**: [Centered Container](./components/centered-container.md), [Grid Gap](./components/grid-gap.md), [Modular Typography](./components/modular-typography.md)

### Typography Hierarchy
```html
<article class="centered-container py-12">
  <h1 class="type-6 font-serif text-cardinal-red mb-6">Article Title</h1>
  <h2 class="type-4 font-sans text-black mb-4">Section Heading</h2>
  <p class="type-0 leading-relaxed mb-4">Body content with optimal readability...</p>
  <h3 class="type-2 font-sans text-black mb-3">Subsection</h3>
  <p class="type-0 leading-relaxed">More content...</p>
</article>
```
> **📖 Detailed docs**: [Modular Typography](./components/modular-typography.md)

## Integration with Stanford Design System

All component plugins implement Stanford's official design guidelines:

- **🎨 Brand Colors**: Official Stanford palette (cardinal red, digital blue, etc.)
- **📝 Typography**: Stanford-approved font families and scales  
- **📐 Spacing**: Consistent with Stanford's layout system
- **♿ Accessibility**: WCAG 2.1 AA compliance built-in
- **📱 Responsive**: Mobile-first approach across all components

## Development and Customization

### Using Components
Each component can be used independently or combined with Tailwind utilities:

```html
<!-- Basic usage -->
<button class="button">Stanford Button</button>

<!-- With additional utilities -->
<button class="button text-lg px-8 py-4">Large Button</button>

<!-- Custom combinations -->
<div class="centered-container bg-gray-100">
  <div class="grid grid-cols-1 md:grid-cols-2 grid-gap">
    <!-- Content -->
  </div>
</div>
```

### Creating Custom Variants
Components can be extended following Stanford design patterns:

```javascript
// Add to your Tailwind configuration
module.exports = {
  presets: [require('decanter')],
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.button-large': {
          padding: '1.5rem 3rem',
          fontSize: theme('fontSize.lg'),
        },
        '.container-narrow': {
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }
      })
    }
  ]
}
```

## Performance and Browser Support

### Optimized Output
- **Efficient CSS**: Low specificity selectors for fast rendering
- **Tree shaking**: Unused components automatically removed  
- **Compressed size**: Each component averages 1-3KB compressed
- **No JavaScript**: Pure CSS implementation for maximum performance

### Browser Compatibility
- **Modern browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **Legacy support**: Graceful degradation for older browsers
- **Mobile optimized**: Excellent support across all mobile devices
- **Accessibility tools**: Compatible with screen readers and assistive technology

## Next Steps

1. **📚 Browse individual docs**: Visit the [Component Documentation Index](./components/README.md)
2. **🎯 Find specific components**: Use the component category guides above
3. **🛠️ See implementation examples**: Check the detailed usage examples in each component doc
4. **🎨 Learn customization**: Review the customization sections in individual docs

For architectural understanding, see the [source overview documentation](./src-overview.md).
