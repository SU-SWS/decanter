# Utility Plugins Documentation

This directory contains detailed documentation for each utility plugin in the Stanford Decanter design system. Each utility plugin extends Tailwind CSS with Stanford-specific functionality.

## Available Utilities

### Accessibility
- **[accessibility-hidden.md](./accessibility-hidden.md)** - Screen reader-only content utilities (`.accessibility-hidden`, `.a11y-hidden`)

### Visual Effects
- **[backface-visibility.md](./backface-visibility.md)** - 3D transform backface control (`.backface-hidden`)

### Link Styling
- **[link.md](./link.md)** - Dynamic link color utilities using Stanford palette (`.link-{color}`)
- **[link-fontweight.md](./link-fontweight.md)** - Link font weight controls (`.link-regular`, `.link-semibold`, `.link-bold`)
- **[link-underline.md](./link-underline.md)** - Link underline controls (`.link-underline`, `.link-no-underline`)

### Typography
- **[break-words.md](./break-words.md)** - Enhanced word breaking utility (`.break-words`)
- **[writing-mode.md](./writing-mode.md)** - Text direction and orientation (`.text-vertical-lr`)

## Plugin Categories

### Accessibility Utilities
Focus on improving accessibility and screen reader support:
- Screen reader-only content
- ARIA-compliant hiding techniques

### Link Utilities
Comprehensive link styling system:
- Color theming with Stanford palette
- Typography controls
- Text decoration management

### Typography Utilities
Text layout and behavior enhancements:
- Word breaking improvements
- Writing mode controls
- Cross-browser compatibility fixes

### Visual Effect Utilities
CSS properties for enhanced visual experiences:
- 3D transform optimizations
- Animation-friendly utilities

## Usage Patterns

### Accessibility-First Design
```html
<!-- Screen reader support -->
<button class="a11y-hidden">
  <span>Search</span>
  <svg aria-hidden="true"><!-- icon --></svg>
</button>
```

### Consistent Link Styling
```html
<!-- Stanford-branded link styling -->
<nav class="link-cardinal-red link-no-underline link-semibold">
  <a href="/academics">Academics</a>
  <a href="/research">Research</a>
</nav>
```

### Responsive Typography
```html
<!-- Enhanced text breaking and layout -->
<article class="break-words">
  <h1 class="text-vertical-lr md:text-horizontal">
    Responsive Text Layout
  </h1>
</article>
```

### Performance-Optimized Animations
```html
<!-- Smooth 3D transforms -->
<div class="backface-hidden transform-gpu">
  <div class="rotate-y-180">Flip content</div>
</div>
```

## Implementation Notes

### Browser Support
All utilities maintain compatibility with:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 11 (where applicable)
- Mobile browsers
- Assistive technologies

### Performance Considerations
- Utilities are optimized for minimal CSS output
- PurgeCSS compatible for production builds
- GPU acceleration where beneficial
- No JavaScript dependencies

### Accessibility Standards
- WCAG 2.1 AA compliant
- Screen reader tested
- Keyboard navigation friendly
- High contrast mode compatible

## Integration with Stanford Design System

These utilities extend Tailwind CSS with Stanford-specific functionality while maintaining:
- Brand consistency across Stanford properties
- Accessibility standards compliance
- Performance optimization
- Developer experience enhancement

For implementation examples and detailed usage instructions, see the individual utility documentation files.
