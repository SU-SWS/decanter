# Custom Variants

Decanter adds three variants that combine hover with a focus state, defined in `src/css/custom-variants.css` via `@custom-variant`. Their `group-*` forms come along automatically. They work with **any** utility, including arbitrary values.

| Variant | Applies when |
|---|---|
| `hocus:` | `:hover` or `:focus` |
| `hocus-visible:` | `:hover` or `:focus-visible` (keyboard-only focus) |
| `hocus-within:` | `:hover` or `:focus-within` (focus anywhere inside) |
| `group-hocus:` | A parent `.group` is hovered or focused |
| `group-hocus-visible:` | A parent `.group` is hovered or keyboard-focused |
| `group-hocus-within:` | A parent `.group` is hovered or contains focus |

## Why

`hover:underline focus:underline` repeated across a codebase doubles every state declaration. `hocus:underline` says it once and guarantees the two states never drift apart — which is also an accessibility win, since keyboard users get every hover affordance.

## Examples

```html
<!-- Link pill: same treatment for mouse and keyboard -->
<a href="#" class="bg-digital-red text-white hocus:bg-black hocus:underline">
  Learn more
</a>

<!-- Mouse hover, but focus ring logic only for keyboard users -->
<button class="hocus-visible:bg-digital-blue hocus-visible:text-white">Save</button>

<!-- Outline a card when the input inside it is focused -->
<div class="border-2 border-black-20 hocus-within:border-digital-green">
  <label class="label" for="q">Search</label>
  <input class="input" id="q" type="search">
</div>

<!-- Child reacts to the whole card being hovered/focused -->
<a href="/story" class="group block">
  <h3 class="group-hocus:text-cardinal-red group-hocus:underline">Story headline</h3>
  <p class="card-paragraph">Teaser text…</p>
</a>
```

## Choosing between them

- **`hocus:`** — default choice for links and buttons; focus mirrors hover for all input methods.
- **`hocus-visible:`** — when the focus styling would be intrusive after a mouse click (`:focus-visible` skips mouse-initiated focus).
- **`hocus-within:`** — containers reacting to focus on descendants (form groups, search bars, cards with inputs).
