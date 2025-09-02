# WYSIWYG

Sets vertical rhythm (spacing) for unstructured rich text content such as CMS WYSIWYG output.

## Purpose
Use `.wysiwyg` on a container that contains CMS-produced markup (paragraphs, headings, lists, blockquotes, etc.). It normalizes spacing and heading behaviour so text looks consistent with site typography.

## Provided selector
- `.wysiwyg` — Container reset and rhythm utilities

## Key rules
- The first child has a small negative top margin to apply leading trim: `> *:first-child { margin-top: -0.25em }`.
- The last child has no bottom margin: `> *:last-child { margin-bottom: 0 }`.
- Paragraphs and lists get a bottom margin of `1.6em`.
- List item paragraphs have smaller separation: `li p { margin-bottom: 0.4em }`.
- Headings (`h2`–`h6`) get `margin-bottom: 0.7em` and `clear: both`.
  - Headings that are not the first child get `margin-top: 1.6em`.
  - Links inside headings are un-decorated by default; `:hover`/`:focus` apply underline.
- Adjacent heading pairs (e.g., `h2 + h3`) get reduced top margin when not the first child.

## Example
```html
<div class="wysiwyg">
  <h2>Article heading</h2>
  <p>Lead paragraph for the article.</p>
  <h3>Subheading</h3>
  <p>Some more copy.</p>
  <ul>
    <li><p>List item with paragraph</p></li>
    <li>Plain list item</li>
  </ul>
</div>
```

## Notes
- Intended for content managed by CMS or rich-text editors where markup structure isn't hand-crafted.
- Works well combined with Decanter's modular typography and `wysiwyg` styles.
