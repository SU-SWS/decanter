# Transition Duration

**File**: `/src/plugins/theme/transitionDuration.js`

## Overview

Overrides Tailwind's default transition duration from 150ms to a smoother 250ms for consistent, polished interactions.

## Generated CSS Classes

This sets Tailwind's `DEFAULT` transition duration, which generates **no class of its
own** — Tailwind's `transitionDuration` plugin is registered with `filterDefault`, so
there is no `.duration` utility. What the 250ms does is change the duration *implied*
by the `transition-*` utilities, which emit `transition-duration: 250ms` instead of
Tailwind's stock 150ms:

- `.transition`, `.transition-all`, `.transition-colors`, `.transition-opacity`,
  `.transition-shadow`, `.transition-transform` — all imply 250ms
- Default Tailwind durations (preserved):
  - `.duration-0` — 0ms
  - `.duration-75` — 75ms
  - `.duration-100` — 100ms
  - `.duration-150` — 150ms
  - `.duration-200` — 200ms
  - `.duration-300` — 300ms
  - `.duration-500` — 500ms
  - `.duration-700` — 700ms
  - `.duration-1000` — 1000ms

## Usage

Add a `transition-*` utility and you get the 250ms default with no duration class:
```html
<button class="transition hover:bg-cardinal-red">Action</button>
```

Add a `duration-*` utility to override it:
```html
<div class="transition duration-500 hover:scale-105">Animated</div>
```

250ms is not on Tailwind's duration scale, so to state it explicitly use an arbitrary
value:
```html
<div class="transition duration-[250ms] hover:scale-105">Animated</div>
```

## Customization

Override the default duration in your Tailwind config:
```js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '300ms', // Custom default
        250: '250ms',     // Optional named value
      },
    },
  },
};
```
