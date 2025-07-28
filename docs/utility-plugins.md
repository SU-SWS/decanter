# Utility Plugins

Utility plugins provide additional classes that extend Tailwind CSS's utility-first approach with Stanford-specific functionality. Each utility plugin is documented in detail in individual files.

## Available Utility Plugins

### Accessibility Utilities
- **[Accessibility Hidden](./utilities/accessibility-hidden.md)** - Screen reader-only content utilities (`.accessibility-hidden`, `.a11y-hidden`)

### Visual Effect Utilities  
- **[Backface Visibility](./utilities/backface-visibility.md)** - 3D transform backface control (`.backface-hidden`)

### Link Utilities
- **[Link Colors](./utilities/link.md)** - Dynamic link color utilities using Stanford palette (`.link-{color}`)
- **[Link Font Weight](./utilities/link-fontweight.md)** - Link font weight controls (`.link-regular`, `.link-semibold`, `.link-bold`)
- **[Link Underline](./utilities/link-underline.md)** - Link underline controls (`.link-underline`, `.link-no-underline`)

### Typography Utilities
- **[Break Words](./utilities/break-words.md)** - Enhanced word breaking utility (`.break-words`)
- **[Writing Mode](./utilities/writing-mode.md)** - Text direction and orientation (`.text-vertical-lr`)

## Quick Reference

| Category | Utilities | Purpose |
|----------|-----------|---------|
| **Accessibility** | `.accessibility-hidden`, `.a11y-hidden` | Screen reader-only content |
| **Visual Effects** | `.backface-hidden` | 3D transform optimization |
| **Link Styling** | `.link-{color}`, `.link-{weight}`, `.link-{underline}` | Comprehensive link theming |
| **Typography** | `.break-words`, `.text-vertical-lr` | Text layout enhancements |

## Integration Patterns

### Combining Utilities
These utilities work together for comprehensive styling:

```html
<!-- Complete link styling -->
<nav class="link-cardinal-red link-semibold link-no-underline">
  <a href="/academics">Academics</a>
  <a href="/research">Research</a>
</nav>

<!-- Accessible content with enhanced typography -->
<article class="break-words">
  <h2>Section Title</h2>
  <p>
    Content with <span class="accessibility-hidden">additional context</span>
    for screen readers.
  </p>
</article>
```

### Responsive Usage
Many utilities support responsive variants:

```html
<!-- Responsive link styling -->
<nav class="link-regular md:link-semibold lg:link-bold">
  <a href="/home">Home</a>
</nav>

<!-- Enhanced typography with responsive behavior -->
<div class="break-words text-vertical-lr md:text-horizontal">
  Responsive text layout
</div>
```

### Performance-Optimized Animations
```html
<!-- Smooth 3D transforms -->
<div class="backface-hidden transform-gpu">
  <div class="flip-card-inner">
    <!-- Card content -->
  </div>
</div>
```

## Implementation Guidelines

### Accessibility Considerations
- Ensure sufficient color contrast with link color utilities
- Provide alternative visual indicators when removing underlines  
- Test with screen readers when using accessibility utilities
- Consider focus states and keyboard navigation

### Performance Notes
- All utilities generate minimal CSS footprint
- Work efficiently with PurgeCSS for production builds
- No JavaScript dependencies
- Compatible with Tailwind's JIT compilation

### Browser Support
- Modern browsers: Full support
- Internet Explorer 11: Supported where applicable
- Mobile browsers: Optimized for touch interfaces
- Assistive technologies: WCAG 2.1 AA compliant

## Stanford Design System Integration

These utilities maintain Stanford's brand consistency while extending Tailwind CSS functionality. They follow Stanford's accessibility guidelines and support the university's commitment to inclusive, high-performance web experiences.

For detailed implementation examples, CSS output, and usage guidelines, see the individual utility documentation files in the [utilities](./utilities/) directory.
