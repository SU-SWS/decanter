# Form Elements Component Plugin

**File**: `/src/plugins/components/form/form-elements.js`

## Overview

The form elements plugin provides consistent styling for form controls including checkboxes, radio buttons, textareas, select dropdowns, labels, legends, and fieldsets. This plugin ensures all form elements follow Stanford design system guidelines for accessibility and visual consistency.

## Generated CSS Classes

### `.radio` and `.checkbox`

Styles for radio buttons and checkboxes with Stanford brand colors.

```css
.radio, .checkbox {
  background-color: white;
  border-width: 3px;                    /* Prominent border for visibility */
  border-color: #006CB8;                /* Stanford digital blue */
  width: 2.4rem;                        /* 24px at root font size */
  height: 2.4rem;
}

.radio:checked, .checkbox:checked {
  background-color: #006CB8;             /* Digital blue when selected */
}
```

### `.fieldset`

Clean fieldset styling removing default browser styling.

```css
.fieldset {
  border: 0;                            /* Remove default browser border */
}
```

### `.label`

Consistent label styling for form accessibility.

```css
.label {
  display: block;                       /* Full-width for better touch targets */
  font-size: 1.8rem;                    /* Matches input font size */
}
```

### `.legend`

Fieldset legend styling with appropriate hierarchy.

```css
.legend {
  font-weight: 700;                     /* Bold for visual hierarchy */
  line-height: 1.1;                     /* Tight line height for headings */
}
```

### `.textarea`

Multi-line text input styling.

```css
.textarea {
  height: 16rem;                        /* 160px default height */
  display: block;                       /* Full-width display */
  border-color: rgba(46, 45, 41, 0.2);  /* Subtle border (black.20) */
  color: #2E2D29;                       /* Stanford black text */
  font-size: 1.8rem;                    /* Consistent with inputs */
  line-height: 1.25;                    /* Snug line height for readability */
}
```

### `.select`

Dropdown select styling.

```css
.select {
  display: block;                       /* Full-width display */
  border-color: rgba(46, 45, 41, 0.2);  /* Subtle border (black.20) */
  color: #2E2D29;                       /* Stanford black text */
  font-size: 1.8rem;                    /* Consistent with inputs */
  line-height: 1.25;                    /* Snug line height */
  background-color: white;              /* Clean background */
}
```

## Customization Options

### Size Variations
```javascript
// Add to your Tailwind configuration
addComponents({
  '.checkbox-sm, .radio-sm': {
    width: '1.8rem',
    height: '1.8rem',
    borderWidth: '2px',
  },
  '.checkbox-lg, .radio-lg': {
    width: '3rem',
    height: '3rem',
    borderWidth: '4px',
  },
  '.textarea-sm': {
    height: '10rem',
  },
  '.textarea-lg': {
    height: '24rem',
  }
})
```

### Custom Styling with Tailwind
```html
<!-- Small checkboxes -->
<input type="checkbox" class="checkbox checkbox-sm">

<!-- Large textarea -->
<textarea class="textarea textarea-lg resize-none"></textarea>

<!-- Styled select with icon -->
<div class="relative">
  <select class="select pr-10 appearance-none">
    <option>Choose option</option>
  </select>
  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-5 h-5 text-gray-400">...</svg>
  </div>
</div>
```