# Lists Component Plugin

**File**: `/src/plugins/components/lists/lists.js`

## Overview

The lists component plugin provides specialized list styling utilities that go beyond standard HTML list formatting. It includes classes for removing default list styles and creating horizontal navigation-style lists, essential for building clean layouts and navigation components within Stanford's design system.

## CSS Classes Generated

### `.list-unstyled`

Completely removes all default list styling, creating a clean slate for custom styling.

**CSS Output:**
```css
.list-unstyled {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
}
```

### `.list-horizontal`

Creates horizontal lists with floated items, perfect for inline navigation and tag displays.

**CSS Output:**
```css
.list-horizontal {
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow: hidden;
}

.list-horizontal > li {
  display: block;
  float: left;
}

.list-horizontal > li:last-child {
  margin-right: 0;
}
```

## Implementation Guidelines

### Semantic HTML
Always use appropriate list elements (`<ul>`, `<ol>`, `<li>`) for semantic content, even when removing visual styling:

```html
<!-- ✅ Good: Maintains semantic meaning -->
<nav>
  <ul class="list-horizontal">
    <li><a href="/page1">Page 1</a></li>
    <li><a href="/page2">Page 2</a></li>
  </ul>
</nav>

<!-- ❌ Avoid: Loses semantic meaning -->
<nav>
  <div class="flex">
    <div><a href="/page1">Page 1</a></div>
    <div><a href="/page2">Page 2</a></div>
  </div>
</nav>
```

### Combining with Tailwind Utilities
```html
<!-- Combine list classes with Tailwind spacing and layout utilities -->
<ul class="list-horizontal flex flex-wrap gap-[16px]">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<ul class="list-unstyled space-y-[12px] max-w-prose">
  <li>Clean list item</li>
  <li>Another clean item</li>
</ul>
```

These list utilities provide the foundation for clean, accessible navigation and content organization throughout Stanford's digital properties.
