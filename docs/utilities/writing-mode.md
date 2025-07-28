# Writing Mode Utility

## Purpose
The writing mode utility provides control over text direction and orientation, specifically adding support for vertical left-to-right text layout. This utility is essential for multilingual content, artistic text treatments, and specific design requirements where vertical text orientation enhances readability or visual impact.

## CSS Output

```css
.text-vertical-lr {
  writing-mode: vertical-lr;
}
```

## Class Reference

| Class | Writing Mode | Description |
|-------|--------------|-------------|
| `.text-vertical-lr` | `vertical-lr` | Vertical text, flowing left to right |

## Usage Examples

### Sidebar Navigation
```html
<!-- Vertical navigation labels -->
<nav class="sidebar">
  <ul class="space-y-4">
    <li>
      <a href="/research" class="text-vertical-lr block p-2">
        Research
      </a>
    </li>
    <li>
      <a href="/academics" class="text-vertical-lr block p-2">
        Academics
      </a>
    </li>
    <li>
      <a href="/campus" class="text-vertical-lr block p-2">
        Campus Life
      </a>
    </li>
  </ul>
</nav>
```

### Table Headers
```html
<!-- Vertical column headers for narrow tables -->
<table class="data-table">
  <thead>
    <tr>
      <th class="text-vertical-lr p-2">Academic Year</th>
      <th class="text-vertical-lr p-2">Enrollment</th>
      <th class="text-vertical-lr p-2">Graduation Rate</th>
      <th class="text-vertical-lr p-2">Research Funding</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2023-2024</td>
      <td>17,249</td>
      <td>94.8%</td>
      <td>$1.8B</td>
    </tr>
  </tbody>
</table>
```

### Decorative Text Elements
```html
<!-- Artistic text treatment for headers -->
<header class="hero-section relative">
  <h1 class="main-title">Stanford University</h1>
  <span class="text-vertical-lr absolute right-4 top-4 text-sm opacity-75">
    Est. 1885
  </span>
</header>
```

### Multilingual Content
```html
<!-- Japanese or Chinese text display -->
<article class="multilingual-content">
  <section class="english-text">
    <h2>Research Excellence</h2>
    <p>Stanford leads in innovative research across disciplines.</p>
  </section>
  
  <section class="japanese-text text-vertical-lr">
    <h2>研究の卓越性</h2>
    <p>スタンフォード大学は学際的な革新的研究をリードしています。</p>
  </section>
</article>
```

### Data Visualization Labels
```html
<!-- Chart and graph labels -->
<div class="chart-container">
  <div class="y-axis-label text-vertical-lr">
    Student Enrollment (Thousands)
  </div>
  <div class="chart-area">
    <!-- Chart content -->
  </div>
</div>
```

### Magazine-Style Layouts
```html
<!-- Editorial design with vertical text -->
<article class="magazine-layout">
  <div class="main-content">
    <h1>Innovation at Stanford</h1>
    <p>Content about Stanford's innovative programs...</p>
  </div>
  
  <aside class="vertical-sidebar">
    <span class="text-vertical-lr text-lg font-bold">
      Special Report
    </span>
  </aside>
</article>
```

## Technical Implementation

### CSS Writing Modes
The `writing-mode` property controls:
- **Text flow direction**: Top to bottom, left to right
- **Block progression**: How lines stack
- **Inline progression**: How text flows within lines

### Available Values (for reference)
- `horizontal-tb`: Default horizontal, top to bottom
- `vertical-rl`: Vertical, right to left (not included in utility)
- `vertical-lr`: Vertical, left to right (this utility)

### Browser Behavior
- Text rotates 90 degrees clockwise
- Block elements stack horizontally
- Inline elements flow vertically

## Browser Support
- **Modern browsers**: Full support
- **Chrome/Edge**: Full support since version 48
- **Firefox**: Full support since version 43
- **Safari**: Full support since version 10.1
- **Internet Explorer**: Partial support (IE 11 with `-ms-` prefix)
- **Mobile browsers**: Full support on modern devices

## Performance
- **Layout impact**: Triggers layout recalculation
- **Rendering**: May cause reflow depending on content
- **Text metrics**: Browser recalculates line heights and spacing
- **Memory**: Minimal additional overhead

## Typography Considerations

### Font Selection
Some fonts work better with vertical orientation:

```html
<!-- Consider font choice for vertical text -->
<div class="text-vertical-lr font-sans">
  Better for vertical display
</div>

<div class="text-vertical-lr font-serif">
  May need spacing adjustments
</div>
```

### Line Height and Spacing
```html
<!-- Adjust spacing for vertical text -->
<div class="text-vertical-lr leading-relaxed tracking-wide">
  Vertical text with adjusted spacing
</div>
```

### Mixed Orientations
```html
<!-- Combining horizontal and vertical text -->
<div class="layout-mixed">
  <h2 class="horizontal-title">Section Title</h2>
  <div class="content-area">
    <p class="text-vertical-lr sidebar-text">Side note</p>
    <div class="main-text">
      <p>Main content remains horizontal...</p>
    </div>
  </div>
</div>
```

## Accessibility Guidelines

### Screen Reader Compatibility
- Most screen readers handle vertical text appropriately
- Text remains semantically structured
- Reading order follows document structure, not visual layout

### Keyboard Navigation
- Tab order may be affected by visual reorientation
- Ensure logical focus progression
- Test with keyboard-only navigation

### Mobile Considerations
- Vertical text may be harder to read on small screens
- Consider responsive alternatives for mobile devices
- Test scrolling behavior with vertical content

```html
<!-- Responsive vertical text -->
<div class="hidden md:block text-vertical-lr">
  Vertical text for larger screens
</div>
<div class="md:hidden">
  Horizontal alternative for mobile
</div>
```

## Common Use Cases

### Academic Publications
```html
<!-- Journal-style layouts -->
<article class="academic-paper">
  <div class="paper-margin text-vertical-lr text-xs">
    Volume 45, Issue 3, 2024
  </div>
  <div class="paper-content">
    <!-- Main content -->
  </div>
</article>
```

### Data Tables
```html
<!-- Space-efficient headers -->
<table class="research-data">
  <thead>
    <tr>
      <th class="text-vertical-lr">Research Area</th>
      <th class="text-vertical-lr">Funding Amount</th>
      <th class="text-vertical-lr">Principal Investigator</th>
    </tr>
  </thead>
</table>
```

### Artistic Layouts
```html
<!-- Creative typography -->
<section class="hero-creative">
  <h1 class="main-heading">Stanford Arts</h1>
  <div class="vertical-accent text-vertical-lr">
    Creative Excellence
  </div>
</section>
```

### International Content
```html
<!-- Supporting different writing systems -->
<div class="cultural-content">
  <section class="text-vertical-lr" lang="ja">
    <h2>日本文化研究</h2>
    <p>スタンフォード大学の日本文化研究プログラム</p>
  </section>
</div>
```

## Best Practices

### Layout Design
- Plan for increased width requirements
- Consider container constraints
- Test with varying text lengths
- Ensure adequate spacing around vertical text

### Content Strategy
- Use for short text labels or accents
- Avoid for large blocks of body text
- Consider reading patterns and user expectations
- Test with target audience

### Responsive Implementation
- Provide horizontal alternatives for mobile
- Use breakpoint-specific classes
- Consider orientation changes on tablets
- Test across different devices

### Performance Optimization
- Limit use to necessary elements
- Avoid frequent orientation changes
- Cache layout calculations when possible
- Monitor rendering performance

## Related Utilities
- Text alignment utilities (`.text-left`, `.text-center`, etc.)
- Transform utilities for rotation effects
- Responsive utilities for breakpoint-specific behavior
- Typography utilities for font control

## Integration with Stanford Design System
This utility supports Stanford's commitment to inclusive, accessible design while enabling creative layouts for specific content needs. Use thoughtfully to enhance user experience without compromising readability or accessibility standards.
