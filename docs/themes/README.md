# Theme Plugins Documentation

This directory contains comprehensive documentation for all theme plugins in the Stanford Decanter design system. Each plugin customizes Tailwind CSS's default theme values to align with Stanford's Identity Guidelines and enhance the user experience.

## Overview

Stanford's theme plugins extend Tailwind CSS with carefully crafted design tokens that reflect Stanford's visual identity, accessibility standards, and user experience principles. These plugins ensure consistency across all Stanford digital properties while providing flexibility for diverse use cases.

## Theme Plugin Categories

### Color System
- **[colors.md](./colors.md)** - Stanford's official color palette including Cardinal Red, digital accent colors, grayscale system, and semantic color applications

### Typography System
- **[fontFamily.md](./fontFamily.md)** - Stanford brand typography using Source Sans Pro with system font fallbacks
- **[fontSize.md](./fontSize.md)** - Modular type scale from m1 (14px) to m8 (48px) with responsive line heights
- **[fontWeight.md](./fontWeight.md)** - Typography weight scale from light (300) to black (900) with semantic naming
- **[lineHeight.md](./lineHeight.md)** - Optimized line spacing system for readability and vertical rhythm

### Layout and Spacing
- **[spacing.md](./spacing.md)** - Comprehensive spacing scale with 4px base unit and responsive design considerations
- **[gap.md](./gap.md)** - Responsive gap values for layout components with special grid utilities
- **[maxWidth.md](./maxWidth.md)** - Content width constraints from components to full layouts with prose width support

### Responsive Design
- **[screens.md](./screens.md)** - Mobile-first breakpoint system optimized for Stanford's content and user patterns

### Visual Design Elements
- **[borderRadius.md](./borderRadius.md)** - Subtle border radius system for modern interface elements
- **[borderWidth.md](./borderWidth.md)** - Border weight scale from hairline to extra thick borders

### Content and Utilities
- **[lineClamp.md](./lineClamp.md)** - Extended line clamping for academic content, faculty profiles, and article previews

### Motion and Interaction
- **[transitionDuration.md](./transitionDuration.md)** - Enhanced transition timing with 250ms default for polished interactions

## Quick Reference

### Most Commonly Used Themes

#### Essential Colors
```css
text-cardinal-red         /* Stanford's primary brand color */
bg-digital-blue          /* Primary digital accent */
text-black-70            /* Body text color */
border-black-20          /* Subtle borders */
```

#### Core Typography
```css
text-m2                  /* Body text (16px) */
text-m4                  /* Headings (24px) */
font-stanford            /* Source Sans Pro family */
font-semibold           /* 600 weight */
```

#### Standard Spacing
```css
p-[16px]                /* Standard padding */
gap-[24px]              /* Standard gap */
space-y-[20px]          /* Vertical spacing */
```

#### Responsive Breakpoints
```css
md:                     /* 768px and up */
lg:                     /* 992px and up */
xl:                     /* 1200px and up */
2xl:                    /* 1500px and up */
```

## Design Principles

### Stanford Identity Alignment
All theme values are derived from or complement Stanford's official Identity Guidelines, ensuring brand consistency across digital touchpoints.

### Accessibility First
- **WCAG 2.1 AA compliance**: Color contrasts meet accessibility standards
- **Reduced motion support**: Respects user preferences for reduced motion
- **Scalable typography**: Supports zoom up to 200% without horizontal scrolling

### Performance Optimized
- **Efficient CSS generation**: Only used classes are included in final builds
- **GPU-accelerated animations**: Transform and opacity transitions for smooth performance
- **Minimal bundle impact**: Lean configuration that doesn't bloat CSS output

### Developer Experience
- **Semantic naming**: Clear, descriptive class names that reflect intent
- **Consistent patterns**: Predictable scaling and naming conventions
- **Comprehensive documentation**: Each plugin includes usage examples and guidelines

## Integration Patterns

### Component Development
```html
<!-- Stanford card component using theme tokens -->
<div class="bg-white border border-black-20 rounded p-[24px] transition-all hover:shadow-lg">
  <h3 class="text-m4 font-semibold text-cardinal-red mb-[16px]">
    Component Title
  </h3>
  <p class="text-m2 text-black-70 mb-[20px]">
    Description text using Stanford typography and color system.
  </p>
  <button class="bg-cardinal-red text-white px-[24px] py-[12px] rounded transition hover:bg-cardinal-red-dark">
    Action Button
  </button>
</div>
```

### Layout Systems
```html
<!-- Responsive layout using Stanford spacing and breakpoints -->
<div class="centered-container px-[40px] py-[48px]">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
    <!-- Grid items with Stanford spacing -->
  </div>
</div>
```

### Form Design
```html
<!-- Form using Stanford typography and interaction states -->
<form class="max-w-prose space-y-[24px]">
  <div>
    <label class="block text-m2 font-medium text-black mb-[8px]">
      Field Label
    </label>
    <input 
      type="text" 
      class="w-full p-[16px] border border-black-30 rounded transition-all focus:border-digital-blue focus:ring-2 focus:ring-digital-blue-light"
    >
  </div>
</form>
```

## Customization Guidelines

### Extending Theme Values
When extending Stanford's theme system, follow these principles:

1. **Maintain consistency**: New values should align with existing scales and patterns
2. **Follow naming conventions**: Use Stanford's established naming patterns
3. **Document additions**: Include usage examples and accessibility considerations
4. **Test thoroughly**: Ensure new values work across all breakpoints and contexts

### Color Customization
```javascript
// Example: Adding department-specific colors
colors: {
  // Stanford core colors (preserved)
  'cardinal-red': '#8C1515',
  'digital-blue': '#006CB8',
  
  // Department extension
  'engineering-orange': '#FF6B35',
  'medicine-green': '#2E8B57',
}
```

### Typography Extensions
```javascript
// Example: Adding specialized font sizes
fontSize: {
  // Stanford core scale (preserved)
  'm2': ['16px', { lineHeight: '24px' }],
  'm4': ['24px', { lineHeight: '32px' }],
  
  // Specialized additions
  'display': ['64px', { lineHeight: '1.1' }],
  'caption': ['12px', { lineHeight: '16px' }],
}
```

## Best Practices

### Class Organization
```html
<!-- Recommended class order: layout → spacing → typography → colors → states -->
<div class="flex flex-col md:flex-row gap-[24px] text-m2 font-medium text-black hover:text-cardinal-red transition">
  Content here
</div>
```

### Responsive Design
```html
<!-- Mobile-first approach with Stanford breakpoints -->
<div class="text-m2 md:text-m3 lg:text-m4 p-[16px] md:p-[24px] lg:p-[32px]">
  Responsive typography and spacing
</div>
```

### Performance Optimization
```html
<!-- Prefer transform and opacity for animations -->
<div class="transition-all hover:scale-105 hover:opacity-90">
  GPU-accelerated transitions
</div>
```

## Version Information

- **Tailwind CSS**: v3.4.17
- **Stanford Decanter**: Latest
- **Last Updated**: December 2024

## Contributing

When contributing to theme documentation:

1. **Follow the established format**: Each plugin doc includes purpose, configuration, usage examples, and accessibility notes
2. **Include real examples**: Use Stanford-specific content and realistic use cases
3. **Test thoroughly**: Verify examples work across different contexts and breakpoints
4. **Update this index**: Add new plugins to the appropriate category above

## Support

For questions about Stanford's theme system:
- Review individual plugin documentation for detailed usage
- Check the main project README for setup instructions
- Refer to Stanford's Identity Guidelines for brand compliance
