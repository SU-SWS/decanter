# Custom Tailwind Variants

Decanter adds several custom variants in `tw.config.js` via `addVariant`. These variants enable shorthand and grouping for common pseudo-state patterns.

## Hocus Variants
- **hocus**: Applies styles on both hover and focus (`&:hover`, `&:focus`).
- **hocus-visible**: Applies styles on hover and when element matches `:focus-visible` (`&:hover`, `&:focus-visible`).

Usage example:
```html
<button class="hocus:bg-cardinal-red">Hover or focus me</button>
``` 

## Group Hocus Variants
- **group-hocus**: Targets child when parent `.group` is hovered or focused (`:merge(.group):hover &`, `:merge(.group):focus &`).
- **group-hocus-visible**: Similar to `group-hocus` but uses `:focus-visible`.
- **group-hocus-within**: Applies when parent `.group` is hovered or any child has focus (`:merge(.group):hover &`, `:merge(.group):focus-within &`).

Usage example:
```html
<div class="group">
  <p class="group-hocus:text-digital-blue">Text changes on group hover/focus</p>
</div>
```

## Children Variants
- **children**: Targets all direct children (`& > *`).
- **children-hover**: Targets direct children on hover (`& > *:hover`).
- **children-focus**: Direct children when focused (`& > *:focus`).
- **children-focus-visible**: Direct children on `:focus-visible` (`& > *:focus-visible`).

Usage example:
```html
<div class="children-hover:text-cardinal-red">
  <button>Child 1</button>
  <button>Child 2</button>
</div>
```