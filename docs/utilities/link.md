# Link Color Utilities

## Purpose
The link color utilities provide dynamic link styling using Stanford's official color palette. These utilities automatically generate link classes for all available Stanford colors, enabling consistent branded link styling across all web properties.

## CSS Output

The utility dynamically generates link color classes based on Stanford's color palette:

```css
.link-cardinal-red a { color: #8C1515; }
.link-white a { color: #FFFFFF; }
.link-black a { color: #2E2D29; }
.link-cool-grey a { color: #4D4F53; }
.link-fog a { color: #F4F4F4; }
.link-stone a { color: #F9F6F2; }
.link-sandstone a { color: #D2C295; }
.link-warm-grey a { color: #3C3B39; }
.link-beige a { color: #9D9573; }
.link-clay a { color: #5F574F; }
.link-chocolate a { color: #2F2424; }

/* And more for each color in the Stanford palette... */
```

## Class Reference

| Class Pattern | Description |
|---------------|-------------|
| `.link-{color}` | Sets link color to specified Stanford color |

### Available Colors
All Stanford design system colors are available:
- Primary: `cardinal-red`, `white`, `black`
- Greys: `cool-grey`, `fog`, `stone`, `warm-grey`
- Earth tones: `sandstone`, `beige`, `clay`, `chocolate`
- Accent colors: `blue`, `green`, `orange`, `purple`, `teal`
- Extended palette: All official Stanford colors

## Usage Examples

### Primary Navigation Links
```html
<!-- Cardinal red links for primary navigation -->
<nav class="link-cardinal-red">
  <a href="/academics">Academics</a>
  <a href="/research">Research</a>
  <a href="/campus-life">Campus Life</a>
</nav>
```

### Content Area Links
```html
<!-- Context-appropriate link colors -->
<article class="link-clay">
  <p>Visit our <a href="/library">library resources</a> for more information.</p>
  <p>Contact the <a href="/registrar">registrar's office</a> for enrollment details.</p>
</article>
```

### Footer Links
```html
<!-- Light-colored links for dark footer backgrounds -->
<footer class="bg-black link-white">
  <div class="footer-links">
    <a href="/privacy">Privacy Policy</a>
    <a href="/terms">Terms of Use</a>
    <a href="/contact">Contact Us</a>
  </div>
</footer>
```

### Card Components
```html
<!-- Contextual link styling within components -->
<div class="news-card link-cool-grey">
  <h3>Latest Research</h3>
  <p>
    <a href="/research/climate-study">New climate study published</a>
    in the Journal of Environmental Science.
  </p>
  <a href="/news" class="read-more">Read more news</a>
</div>
```

### Button-style Links
```html
<!-- Combining with other utilities for button-like appearance -->
<div class="link-white">
  <a href="/apply" class="inline-block bg-cardinal-red px-6 py-3 rounded">
    Apply Now
  </a>
</div>
```

## Technical Implementation

### Dynamic Generation
The utility uses JavaScript to iterate through Stanford's color palette:

```javascript
// Simplified version of the implementation
const colors = getStanfordColors(); // From theme configuration
const utilities = {};

Object.entries(colors).forEach(([colorName, colorValue]) => {
  utilities[`.link-${colorName}`] = {
    a: {
      color: colorValue,
    },
  };
});
```

### Color Integration
- Automatically syncs with Stanford color theme
- Updates when color palette is modified
- Maintains consistency across all Stanford properties

## Accessibility Guidelines

### Color Contrast
- Ensure sufficient contrast with background colors
- Test combinations with WebAIM contrast checker
- Provide alternative indicators for color-blind users

### Focus States
Combine with focus utilities for better accessibility:

```html
<nav class="link-cardinal-red focus:outline-2 focus:outline-offset-2">
  <a href="/home" class="focus:outline-blue">Home</a>
</nav>
```

### Text Decoration
Consider pairing with link underline utilities:

```html
<div class="link-clay link-underline">
  <p>This <a href="/example">link</a> will be underlined.</p>
</div>
```

## Browser Support
- **Modern browsers**: Full support
- **Internet Explorer 11**: Full support
- **Color accuracy**: Consistent across all browsers
- **CSS custom properties**: Not dependent on custom properties

## Performance
- **Generation**: Colors computed at build time
- **File size**: Minimal impact with PurgeCSS
- **Runtime**: No JavaScript overhead
- **Caching**: Static CSS classes

## Common Patterns

### Contextual Styling
```html
<!-- Different sections with appropriate link colors -->
<main>
  <section class="hero bg-cardinal-red link-white">
    <a href="/tour">Take a virtual tour</a>
  </section>
  
  <section class="content bg-white link-cardinal-red">
    <a href="/academics">Explore academics</a>
  </section>
  
  <section class="footer bg-cool-grey link-fog">
    <a href="/contact">Contact information</a>
  </section>
</main>
```

### State Management
```html
<!-- Combining with hover and focus states -->
<nav class="link-clay hover:link-cardinal-red">
  <a href="/home">Home</a>
  <a href="/about">About</a>
</nav>
```

## Best Practices

### Color Selection
- Use cardinal red for primary actions and navigation
- Choose colors with appropriate contrast ratios
- Consider brand consistency across related sites
- Test with Stanford's accessibility guidelines

### Implementation
- Apply to container elements rather than individual links
- Combine with other link utilities for complete styling
- Use semantic class names when possible
- Maintain consistency within page sections

## Related Utilities
- `.link-fontweight` - Controls link font weights
- `.link-underline` / `.link-no-underline` - Text decoration
- Hover and focus state utilities
- Stanford color utilities

## Integration with Stanford Design System
These utilities ensure all links maintain Stanford brand consistency while providing flexibility for different contexts and backgrounds. Use as the primary method for styling links throughout Stanford web properties.
