# Embed Container Component Plugin

**File**: `/src/plugins/components/media/embed-container.js`

## Overview

The embed container component plugin provides a responsive wrapper for embedded media content that maintains a 16:9 aspect ratio regardless of viewport size. This ensures videos, iframes, and other embedded content scale properly and look great on all devices while preventing layout shifts and overflow issues.

## CSS Classes Generated

### `.embed-container`

Creates a responsive container with 16:9 aspect ratio that automatically scales embedded content.

**CSS Output:**
```css
.embed-container {
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embed-container embed,
.embed-container iframe,
.embed-container object {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

**Key Features:**
- **16:9 aspect ratio**: Standard video aspect ratio (56.25% padding-bottom)
- **Responsive scaling**: Automatically adjusts to container width
- **Content positioning**: Embedded elements fill the entire container
- **Overflow protection**: Prevents content from breaking layout
- **Universal support**: Works with iframes, embeds, and objects

## Usage Examples

### YouTube Video Embeds
```html
  <!-- Responsive YouTube embed -->
  <div class="embed-container rounded overflow-hidden shadow-lg">
    <iframe 
      src="https://www.youtube.com/embed/KkMDCCdjyW8" 
      title="CS106A Lecture 1: Introduction to Programming"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    ></iframe>
  </div>
```

## Implementation Guidelines

### Aspect Ratio Customization
```html
<!-- Default 16:9 aspect ratio -->
<div class="embed-container">
  <iframe src="..."></iframe>
</div>

<!-- Custom aspect ratios using utility classes -->
<div class="embed-container" style="padding-bottom: 75%;"> <!-- 4:3 aspect ratio -->
  <iframe src="..."></iframe>
</div>

<div class="embed-container" style="padding-bottom: 100%;"> <!-- 1:1 square -->
  <iframe src="..."></iframe>
</div>
```

### Responsive Behavior
```html
<!-- Responsive embed with max-width constraints -->
<div class="max-w-4xl mx-auto">
  <div class="embed-container">
    <iframe src="..."></iframe>
  </div>
</div>

<!-- Grid-based responsive embeds -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
  <div class="embed-container">
    <iframe src="..."></iframe>
  </div>
  <div class="embed-container">
    <iframe src="..."></iframe>
  </div>
</div>
```

This embed container component ensures Stanford's multimedia content displays beautifully and consistently across all devices while maintaining excellent accessibility and performance standards.
