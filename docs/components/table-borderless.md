# Borderless Tables

Provides utility class for removing table borders when a borderless presentation is desired.

## Purpose
Use `.table-borderless` when you want a table layout without cell or row borders. This is useful for simple key/value lists, small data displays, or tables used as layout where borders would be visually noisy.

## Provided class
- `.table-borderless` — Removes borders from `thead`, `tbody`, `tfoot` and their descendant `tr`, `th`, and `td` elements.

## Implementation details
- When applied, the following rules are set:
  - `thead, tbody, tfoot { tr, th, td { border: 0 } }`
  - `thead + tbody { border: 0 }`

## Example
```html
<table class="table-borderless">
  <thead>
    <tr><th>Term</th><th>Definition</th></tr>
  </thead>
  <tbody>
    <tr><td>Foobar</td><td>Description</td></tr>
  </tbody>
</table>
```

## Notes
- This class only affects borders; padding, typography, and other table styles are still provided by Decanter's base table styles.
