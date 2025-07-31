# Form Elements

**File**: `/src/plugins/components/form/form-elements.js`

## Overview
Provides styled form components including radio buttons, checkboxes, fieldsets, labels, legends, textareas, and selects with Stanford design system styling.

## Generated CSS Classes

- `.radio`, `.checkbox` - Styled radio buttons and checkboxes with Stanford blue borders
- `.fieldset` - Removes default fieldset borders
- `.label` - Block-level labels with consistent sizing
- `.legend` - Bold fieldset legends with proper line height
- `.textarea` - Styled textarea elements with consistent height and borders
- `.select` - Styled select dropdowns with Stanford colors

## Usage

```html
<fieldset class="fieldset">
  <legend class="legend">Contact Preferences</legend>
  
  <label class="label">
    <input type="radio" class="radio" name="contact" value="email">
    Email
  </label>
  
  <label class="label">
    <input type="checkbox" class="checkbox" name="newsletter">
    Subscribe to newsletter
  </label>
  
  <label class="label">Comments</label>
  <textarea class="textarea" placeholder="Your message"></textarea>
  
  <label class="label">Department</label>
  <select class="select">
    <option>Computer Science</option>
    <option>Engineering</option>
  </select>
</fieldset>
```

## Customization

```javascript
// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'digital-blue': {
          DEFAULT: '#006CB8', // Custom form element color
        },
      },
      decanter: {
        base: {
          inputFontSize: '1.8rem', // Custom input font size
        },
      },
    },
  },
}
```
