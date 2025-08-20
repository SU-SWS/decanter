# Form Elements

**File**: `/src/plugins/components/form/form-elements.js`

## Overview
Provides minimally styled form components including radio buttons, checkboxes, fieldsets, labels, legends, textareas, and selects with Stanford design system styling.

## Generated CSS Classes

- `.radio`, `.checkbox` - Styled radio buttons and checkboxes with Stanford blue borders
- `.fieldset` - Removes default fieldset borders
- `.label` - Labels with consistent sizing
- `.legend` - Bold fieldset legends with proper line height
- `.textarea` - Styled textarea elements with consistent height and borders
- `.select` - Styled select dropdowns with Stanford colors

## Usage

```html
<fieldset id="forms__radio" class="fieldset rs-mb-3">
  <legend class="legend">Radio buttons</legend>
    <ul>
      <li>
        <label class="label" for="radio1">Option 1</label>
        <input class="radio" id="radio1" name="radio" type="radio" checked="checked">
      </li>
      <li>
        <label class="label" for="radio2">Option 2</label>
        <input class="radio" id="radio2" name="radio" type="radio">
      </li>
    </ul>
</fieldset>

  <label class="label">Subscribe to newsletter</label>
  <input type="checkbox" class="checkbox" name="newsletter" />

  <label class="label">Comments</label>
  <textarea class="textarea" placeholder="Your message"></textarea>

  <label class="label">Department</label>
  <select class="select">
    <option>Computer Science</option>
    <option>Engineering</option>
  </select>
```
