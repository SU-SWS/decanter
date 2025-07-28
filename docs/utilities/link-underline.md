# Link Underline Utilities

## Purpose
The link underline utilities provide simple text decoration controls for links within content areas, allowing you to show or hide underlines on anchor elements. These utilities target only anchor elements and are designed for use in content areas where text decoration needs vary.

## CSS Output

```css
.link-no-underline a {
  text-decoration: none;
}

.link-underline a {
  text-decoration: underline;
}
```

## Class Reference

| Class | Description |
|-------|-------------|
| `.link-no-underline` | Removes underlines from all links within the container |
| `.link-underline` | Adds underlines to all links within the container |

## Usage Examples

### Navigation Menus
```html
<!-- Clean navigation without underlines -->
<nav class="link-no-underline">
  <a href="/academics">Academics</a>
  <a href="/research">Research</a>
  <a href="/campus-life">Campus Life</a>
  <a href="/admissions">Admissions</a>
</nav>
```

### Content Areas with Underlines
```html
<!-- Traditional underlined links in body text -->
<article class="link-underline">
  <p>
    Stanford University offers a wide range of 
    <a href="/programs">academic programs</a> and 
    <a href="/research">research opportunities</a> for students.
  </p>
  <p>
    Visit our <a href="/admissions">admissions page</a> to learn more
    about the application process.
  </p>
</article>
```

### Mixed Content Styling
```html
<!-- Different sections with different underline styles -->
<main>
  <!-- Header navigation without underlines -->
  <header class="link-no-underline">
    <nav>
      <a href="/home">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  
  <!-- Content area with underlines -->
  <section class="content link-underline">
    <p>Read more about <a href="/history">Stanford's history</a>.</p>
  </section>
  
  <!-- Footer links without underlines -->
  <footer class="link-no-underline">
    <a href="/privacy">Privacy</a>
    <a href="/terms">Terms</a>
  </footer>
</main>
```

### Card Components
```html
<!-- Cards with clean link styling -->
<div class="news-card link-no-underline">
  <h3><a href="/article/123">Research Breakthrough</a></h3>
  <p>
    Scientists at Stanford have made significant progress in
    <a href="/research/climate">climate research</a>.
  </p>
  <a href="/news" class="read-more">Read more news</a>
</div>
```

### WYSIWYG Content
```html
<!-- Rich text editor content with traditional underlines -->
<div class="wysiwyg-content link-underline">
  <h2>Academic Resources</h2>
  <p>
    Students can access the <a href="/library">library catalog</a>,
    <a href="/databases">research databases</a>, and 
    <a href="/tutoring">tutoring services</a> online.
  </p>
</div>
```

## Technical Implementation

### Scope and Targeting
- Utilities target only `a` elements within the container
- No variants (hover, focus, responsive) available by design
- Simple implementation focused on content styling

### Design Philosophy
These utilities are intentionally simple because:
- Text decoration changes should be content-context dependent
- Hover states often handle underline appearance
- Focus states may use different visual indicators

## Accessibility Guidelines

### Visual Indicators
When removing underlines, ensure links remain identifiable:

```html
<!-- Good: Color differentiation when no underlines -->
<div class="link-no-underline text-cardinal-red">
  <p>This <a href="/example" class="font-semibold">link</a> is distinguished by color and weight.</p>
</div>
```

### Focus States
Always provide clear focus indicators:

```html
<!-- Ensure focus visibility -->
<nav class="link-no-underline">
  <a href="/home" class="focus:outline-2 focus:outline-blue focus:outline-offset-2">
    Home
  </a>
</nav>
```

### WCAG Compliance
- Links must have sufficient color contrast (4.5:1 minimum)
- Alternative visual indicators needed when underlines removed
- Focus indicators must be clearly visible

## Browser Support
- **Modern browsers**: Full support
- **Internet Explorer 11**: Full support
- **Text decoration**: Universally supported CSS property
- **Screen readers**: No impact on accessibility tree

## Performance
- **File size**: Minimal CSS output
- **Rendering**: No layout impact
- **Paint operations**: Minor text decoration changes only
- **Accessibility**: No screen reader performance impact

## Common Patterns

### Navigation Hierarchies
```html
<!-- Primary navigation without underlines -->
<nav class="primary-nav link-no-underline">
  <a href="/academics">Academics</a>
  <a href="/research">Research</a>
</nav>

<!-- Breadcrumb navigation with underlines on hover -->
<nav class="breadcrumb link-no-underline">
  <a href="/home" class="hover:underline">Home</a>
  <span>/</span>
  <a href="/academics" class="hover:underline">Academics</a>
</nav>
```

### Content Sections
```html
<!-- Different content areas with appropriate styling -->
<article>
  <!-- Executive summary without underlines -->
  <section class="summary link-no-underline">
    <h2>Executive Summary</h2>
    <p>Key findings from <a href="/report">our annual report</a>.</p>
  </section>
  
  <!-- Detailed content with underlines -->
  <section class="details link-underline">
    <h2>Detailed Analysis</h2>
    <p>Further reading available in <a href="/appendix">the appendix</a>.</p>
  </section>
</article>
```

### Interactive Components
```html
<!-- Button-style links without underlines -->
<div class="action-buttons link-no-underline">
  <a href="/apply" class="btn btn-primary">Apply Now</a>
  <a href="/visit" class="btn btn-secondary">Schedule Visit</a>
</div>

<!-- Inline content links with underlines -->
<div class="content-links link-underline">
  <p>
    Learn more about <a href="/programs">our programs</a> and 
    <a href="/faculty">distinguished faculty</a>.
  </p>
</div>
```

## Best Practices

### When to Use `.link-underline`
- Body text and article content
- WYSIWYG/rich text editor areas
- Traditional web content patterns
- Academic and research content

### When to Use `.link-no-underline`
- Navigation menus and headers
- Card titles and component links
- Button-style link treatments
- Modern UI patterns

### Implementation Guidelines
- Apply to container elements, not individual links
- Consider the overall design context
- Maintain consistency within content sections
- Test accessibility with real users

### Avoid
- Removing underlines without alternative visual indicators
- Inconsistent patterns within the same content area
- Overriding with inline styles
- Conflicting with hover/focus states

## Related Utilities
- `.link-{color}` - Link color utilities
- `.link-fontweight` - Link font weight controls
- Hover and focus state utilities
- Stanford typography utilities

## Integration with Stanford Design System
These utilities provide flexibility while maintaining Stanford's accessibility standards. Use consistently to create clear visual hierarchies and ensure all links remain accessible regardless of decoration choices.
