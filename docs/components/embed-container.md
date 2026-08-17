# Embed Container Component Plugin

**File**: `/src/plugins/components/media/embed-container.js`

> **Deprecated.** `.embed-container` will be removed in v8. It uses the old
> `padding-bottom` percentage hack, which the CSS `aspect-ratio` property replaced.
> Migrate to:
>
> ```html
> <div class="aspect-[16/9] overflow-hidden">
>   <iframe class="size-full" src="..."></iframe>
> </div>
> ```
>
> Use `aspect-[16/9]`, not `aspect-video`. Decanter v7 loads
> `@tailwindcss/aspect-ratio`, which suppresses Tailwind's core `aspect-*` utilities,
> so `aspect-video` generates no CSS here. `aspect-[16/9]` works today and continues
> to work in v8 once that plugin is dropped.

## Overview

The embed container component plugin provides a responsive wrapper for embedded media content that maintains a 16:9 aspect ratio regardless of viewport size.

## CSS Classes Generated

### `.embed-container`

Creates a responsive container with 16:9 aspect ratio that automatically scales embedded content.

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
