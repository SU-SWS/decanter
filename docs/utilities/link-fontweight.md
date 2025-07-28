# Link Font Weight Utilities

## Purpose
The link font weight utilities provide consistent typography control for links within paragraphs, WYSIWYG content, or nested components. These utilities target anchor elements specifically and include only responsive variants to maintain appropriate typography hierarchy.

## CSS Output

```css
.link-regular a {
  font-weight: 400;
}

.link-semibold a {
  font-weight: 600;
}

.link-bold a {
  font-weight: 700;
}
```

## Class Reference

| Class | Font Weight | Description |
|-------|-------------|-------------|
| `.link-regular` | 400 | Normal/regular font weight for links |
| `.link-semibold` | 600 | Semi-bold font weight for links |
| `.link-bold` | 700 | Bold font weight for links |

## Usage Examples

### Content Sections
```html
<!-- Regular weight links in body text -->
<section class="link-regular">
  <p>
    For more information, visit our 
    <a href="/admissions">admissions page</a> or contact the 
    <a href="/registrar">registrar's office</a>.
  </p>
</section>
```

### Emphasized Navigation
```html
<!-- Bold links for primary navigation -->
<nav class="link-bold">
  <a href="/academics">Academics</a>
  <a href="/research">Research</a>
  <a href="/campus-life">Campus Life</a>
</nav>
```

### Secondary Content Areas
```html
<!-- Semi-bold for secondary emphasis -->
<aside class="sidebar link-semibold">
  <h3>Quick Links</h3>
  <ul>
    <li><a href="/calendar">Academic Calendar</a></li>
    <li><a href="/directory">Staff Directory</a></li>
    <li><a href="/resources">Student Resources</a></li>
  </ul>
</aside>
```

### WYSIWYG Content
```html
<!-- Consistent styling in rich text areas -->
<div class="wysiwyg-content link-semibold">
  <p>
    Stanford offers numerous 
    <a href="/programs">degree programs</a> across various disciplines.
    Students can explore <a href="/courses">course catalogs</a> online.
  </p>
</div>
```

### Responsive Typography
```html
<!-- Different weights at different screen sizes -->
<article class="link-regular md:link-semibold lg:link-bold">
  <p>
    This <a href="/example">link</a> will have different weights 
    at different screen sizes.
  </p>
</article>
```

## Technical Implementation

### Responsive-Only Variants
The utility intentionally includes only responsive variants:
- `link-regular`
- `md:link-regular`
- `lg:link-regular`
- `xl:link-regular`
- `2xl:link-regular`

(Same pattern for `link-semibold` and `link-bold`)

### Design Rationale
Font weight changes are limited to responsive variants because:
- Font weight shouldn't change on hover or focus (affects accessibility)
- Consistent weight within a viewport size maintains hierarchy
- Responsive changes allow optimization for different screen sizes

## Accessibility Guidelines

### Typography Hierarchy
- Use consistent font weights within content sections
- Ensure sufficient contrast with background colors
- Maintain readable font weights across all devices

### Focus and Hover States
Links styled with these utilities should use other properties for interaction:

```html
<!-- Good: Using color/underline for hover, not weight -->
<div class="link-semibold">
  <a href="/example" class="hover:text-cardinal-red hover:underline">
    Link Text
  </a>
</div>
```

### Screen Reader Considerations
- Font weight changes don't affect screen reader pronunciation
- Focus indicators should use outline or color, not weight
- Maintain semantic markup regardless of visual styling

## Browser Support
- **Modern browsers**: Full support
- **Internet Explorer 11**: Full support
- **Font loading**: Works with web fonts and system fonts
- **Variable fonts**: Compatible with variable font-weight values

## Performance
- **File size**: Minimal CSS output
- **Rendering**: No impact on layout calculations
- **Font loading**: May trigger font downloads for specific weights
- **Caching**: Standard CSS caching applies

## Typography Integration

### With Stanford Fonts
```html
<!-- Using with Stanford's primary typefaces -->
<div class="font-stanford link-semibold">
  <p>Content with <a href="/example">Stanford-branded links</a></p>
</div>
```

### Font Stack Considerations
Ensure chosen weights exist in your font stack:

```css
/* Example font declaration */
@font-face {
  font-family: 'Stanford';
  font-weight: 400 700; /* Supports regular through bold */
  /* ... other declarations */
}
```

## Common Patterns

### Content Hierarchy
```html
<!-- Primary content with bold links -->
<main class="link-bold">
  <h1>Main Content</h1>
  <p>Primary <a href="/action">call-to-action links</a> here.</p>
</main>

<!-- Secondary content with regular links -->
<aside class="link-regular">
  <h2>Related Information</h2>
  <p>Additional <a href="/info">reference links</a> here.</p>
</aside>
```

### Card Components
```html
<!-- Consistent weight within components -->
<div class="news-card link-semibold">
  <h3>News Title</h3>
  <p>
    Read about <a href="/story">latest developments</a> in our research.
  </p>
  <a href="/news" class="read-more">More news</a>
</div>
```

## Best Practices

### Selection Guidelines
- **Regular (400)**: Body text links, secondary actions
- **Semibold (600)**: Navigation links, moderate emphasis
- **Bold (700)**: Primary actions, strong emphasis

### Implementation
- Apply to container elements rather than individual links
- Use consistently within content sections
- Consider responsive adjustments for mobile readability
- Test with actual font files to ensure weights render correctly

### Avoid
- Changing font weight on hover/focus states
- Mixing multiple weights within small content areas
- Using weights not available in your font stack

## Related Utilities
- `.link-{color}` - Link color utilities
- `.link-underline` / `.link-no-underline` - Text decoration
- Stanford font family utilities
- Responsive typography utilities

## Integration with Stanford Design System
These utilities maintain Stanford's typography standards while providing flexibility for different content contexts. Use consistently across Stanford web properties to ensure unified link typography and proper information hierarchy.
