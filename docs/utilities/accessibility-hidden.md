# Accessibility Hidden Utility

## Purpose
The accessibility hidden utility provides screen reader-specific visibility controls for creating accessible content that remains hidden from visual display but available to assistive technologies. This utility is essential for implementing proper ARIA patterns and semantic markup.

## CSS Output

```css
.accessibility-hidden,
.a11y-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
```

## Class Reference

| Class | Description |
|-------|-------------|
| `.accessibility-hidden` | Hides element visually while keeping it available to screen readers |
| `.a11y-hidden` | Shorter alias for `.accessibility-hidden` |

## Usage Examples

### Screen Reader-Only Text
```html
<!-- Descriptive text for screen readers -->
<button>
  <span class="accessibility-hidden">Search</span>
  <svg aria-hidden="true"><!-- search icon --></svg>
</button>

<!-- Skip links -->
<a href="#main-content" class="a11y-hidden">Skip to main content</a>
```

### Form Labels
```html
<!-- When visual design doesn't include labels -->
<div class="search-box">
  <label for="search" class="accessibility-hidden">Search our website</label>
  <input type="search" id="search" placeholder="Search...">
</div>
```

### Additional Context
```html
<!-- Providing context for screen readers -->
<ul>
  <li>
    <a href="/document.pdf">
      Annual Report
      <span class="a11y-hidden">(PDF, 2.3MB)</span>
    </a>
  </li>
</ul>
```

## Technical Implementation

### CSS Properties Breakdown
- **`position: absolute`**: Removes element from normal document flow
- **`width: 1px; height: 1px`**: Minimal dimensions to avoid zero-size removal
- **`margin: -1px`**: Moves element completely out of viewport
- **`overflow: hidden`**: Prevents any content spillover
- **`clip: rect(0, 0, 0, 0)`**: Legacy clipping for older browsers
- **`white-space: nowrap`**: Prevents text wrapping issues
- **`border: 0`**: Removes any border that might create visual artifacts

### Important Notes
- Uses `!important` declarations to ensure styles cannot be overridden
- Maintains element in accessibility tree for screen readers
- Completely removes visual presence without affecting document structure

## Accessibility Guidelines

### When to Use
- Skip navigation links
- Descriptive text for icons or visual elements
- Form labels when visual design omits them
- Additional context for screen reader users
- Alternative text descriptions

### When NOT to Use
- For content that should be hidden from everyone (`display: none` or `aria-hidden="true"`)
- For responsive hiding (use Tailwind's responsive utilities instead)
- For interactive elements that need to be keyboard accessible

### Best Practices
- Always pair with appropriate ARIA attributes
- Test with actual screen readers
- Keep hidden text concise and meaningful
- Use semantic HTML structure

## Browser Support
- **Modern browsers**: Full support
- **Internet Explorer 11**: Full support
- **Screen readers**: Universal support across JAWS, NVDA, VoiceOver, and ORCA

## Performance
- **Impact**: Minimal - adds simple positioning styles
- **Rendering**: No impact on layout calculations
- **Accessibility tree**: Maintains element presence for assistive technologies

## Related Utilities
- Standard Tailwind utilities: `.sr-only` (similar functionality)
- Stanford specific: Use `.accessibility-hidden` for consistency with design system
- ARIA attributes: `aria-hidden`, `aria-label`, `aria-describedby`

## Integration with Stanford Design System
This utility follows Stanford's accessibility guidelines and ensures compliance with WCAG 2.1 AA standards. Use consistently across all Stanford web properties for unified accessibility implementation.
