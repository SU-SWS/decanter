# Component Plugins Documentation Index

This directory contains detailed documentation for each component plugin in the Decanter design system. Each plugin provides ready-to-use component classes and utilities for common UI patterns following Stanford design guidelines.

## Component Categories

### 🔘 Form Components
Form controls and interactive elements with Stanford branding and accessibility features.

- **[buttons.md](./buttons.md)** - Button styles with Stanford brand colors and interaction states
- **[form-elements.md](./form-elements.md)** - Checkboxes, radio buttons, selects, textareas, labels, and fieldsets
- **[input.md](./input.md)** - Text input field styling with consistent typography and spacing

### 📐 Layout Components  
Container and spacing utilities for consistent page layouts.

- **[centered-container.md](./centered-container.md)** - Responsive centered containers with appropriate margins
- **[grid-gap.md](./grid-gap.md)** - Responsive gap spacing for CSS Grid and Flexbox layouts

### 📝 Typography Components
Text styling and hierarchy utilities implementing Stanford's typography system.

- **[modular-typography.md](./modular-typography.md)** - Stanford's modular typography scale (.type-0 through .type-9)
- **[fluid-typography.md](./fluid-typography.md)** - Smoothly scaling responsive typography
- **[typography-styles.md](./typography-styles.md)** - Additional typography utilities and styles
- **[wysiwyg.md](./wysiwyg.md)** - Rich text content area styling

### 🔗 Link Components
Enhanced link behaviors and styling options.

- **[stretched-link.md](./stretched-link.md)** - Clickable area expansion for cards and containers

### 📋 List Components
Enhanced styling for list elements.

- **[lists.md](./lists.md)** - Improved list styling beyond base styles

### 🎨 Logo Components
Stanford brand element utilities.

- **[logo.md](./logo.md)** - Stanford logo display and positioning utilities

### 📱 Media Components
Responsive media handling and embedding.

- **[embed-container.md](./embed-container.md)** - Responsive containers for videos, iframes, and embeds

### 📏 Spacing Components
Advanced spacing and positioning utilities.

- **[responsive-spacing.md](./responsive-spacing.md)** - Adaptive margin and padding utilities

### ✨ Visual Effect Components
Styling enhancements and visual effects.

- **[text-shadow.md](./text-shadow.md)** - Text shadow utilities for visual enhancement

### ♿ Accessibility Components
Components focused on accessibility and inclusive design.

- **[skiplink.md](./skiplink.md)** - Skip navigation links for keyboard users

### 📊 Table Components
Enhanced table styling and layout options.

- **[borderless.md](./borderless.md)** - Clean table variants without borders

## Quick Reference

### By Use Case

#### 🎨 **Visual Design**
- Colors and branding → [buttons.md](./buttons.md)
- Typography hierarchy → [modular-typography.md](./modular-typography.md)
- Responsive text → [fluid-typography.md](./fluid-typography.md)

#### 📱 **Responsive Layout** 
- Page containers → [centered-container.md](./centered-container.md)
- Grid spacing → [grid-gap.md](./grid-gap.md)
- Adaptive spacing → [responsive-spacing.md](./responsive-spacing.md)

#### 📝 **Forms and Input**
- Interactive buttons → [buttons.md](./buttons.md)
- Text inputs → [input.md](./input.md)
- Form controls → [form-elements.md](./form-elements.md)

#### ♿ **Accessibility**
- Skip navigation → [skiplink.md](./skiplink.md)
- Keyboard interaction → [buttons.md](./buttons.md#accessibility-considerations)
- Screen reader support → [form-elements.md](./form-elements.md#accessibility-considerations)

#### 🎬 **Media and Content**
- Responsive videos → [embed-container.md](./embed-container.md)
- Rich text areas → [wysiwyg.md](./wysiwyg.md)
- Clickable containers → [stretched-link.md](./stretched-link.md)

### By Plugin File Location

```
src/plugins/components/
├── form/
│   ├── buttons.js          → buttons.md
│   ├── form-elements.js    → form-elements.md
│   └── input.js            → input.md
├── layout/
│   ├── centered-container.js → centered-container.md
│   └── grid-gap.js         → grid-gap.md
├── typography/
│   ├── modular-typography.js → modular-typography.md
│   ├── fluid-typography.js → fluid-typography.md
│   ├── styles.js          → typography-styles.md
│   └── wysiwyg.js         → wysiwyg.md
├── link/
│   └── stretched-link.js   → stretched-link.md
├── lists/
│   └── lists.js           → lists.md
├── logo/
│   └── logo.js            → logo.md
├── media/
│   └── embed-container.js  → embed-container.md
├── responsive-spacing/
│   └── responsive-spacing.js → responsive-spacing.md
├── shadow/
│   └── text-shadow.js     → text-shadow.md
├── skiplink/
│   └── skiplink.js        → skiplink.md
└── tables/
    └── borderless.js      → borderless.md
```

For more information about the overall architecture, see the [source overview documentation](../src-overview.md).
