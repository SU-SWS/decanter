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

## Usage Examples

### YouTube Video Embeds
```html
  <!-- Responsive YouTube embed -->
  <div class="embed-container">
    <iframe 
      src="https://www.youtube.com/embed/KkMDCCdjyW8" 
      title="CS106A Lecture 1: Introduction to Programming"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    ></iframe>
  </div>
```