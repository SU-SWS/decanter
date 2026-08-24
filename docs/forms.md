# Forms

Form styles are **opt-in** via a dedicated entry point. They ship in two parts that always travel together:

1. The [`@tailwindcss/forms`](https://github.com/tailwindlabs/tailwindcss-forms) reset (bundled with Decanter — no separate install)
2. Decanter's form classes, which build on that reset

Source: `src/css/forms.css`, `src/css/components/form.css`.

## Setup

```css
@import 'decanter';        /* or 'decanter/minimal' */
@import 'decanter/forms';  /* adds form reset + classes */
```

**`decanter/forms` is not standalone.** It depends on theme variables and the 62.5% root font size from the main entry; imported alone, controls render unstyled and oversized. Sites without forms simply omit the import and carry zero form CSS — including none of the plugin's global `input`/`select`/`textarea` reset.

## Class reference

| Class | Element | Styles |
|---|---|---|
| `input` | `<input>` | Block, `black-20` border, `black` text, 1.8rem font, snug leading |
| `textarea` | `<textarea>` | Same as `input`, 16rem tall |
| `select` | `<select>` | Same as `input`, white background |
| `checkbox` | `<input type="checkbox">` | 24×24px, 3px `digital-blue` border; `digital-blue` fill when checked |
| `radio` | `<input type="radio">` | Same as `checkbox` |
| `label` | `<label>` | Block, 1.8rem font |
| `legend` | `<legend>` | Display line height |
| `fieldset` | `<fieldset>` | Borderless |

## Example

```html
<form>
  <fieldset class="fieldset">
    <legend class="legend">Contact</legend>
    <p>
      <label class="label" for="email">Email</label>
      <input class="input" id="email" type="email" required>
    </p>
    <p>
      <label class="label" for="topic">Topic</label>
      <select class="select" id="topic">
        <option>General</option>
        <option>Admissions</option>
      </select>
    </p>
    <p class="flex items-center gap-8">
      <input class="checkbox" id="subscribe" type="checkbox">
      <label class="label mb-0" for="subscribe">Subscribe to updates</label>
    </p>
    <p>
      <label class="label" for="message">Message</label>
      <textarea class="textarea" id="message"></textarea>
    </p>
    <button class="button" type="submit">Send</button>
  </fieldset>
</form>
```

(`.button` comes from the main entry — see [Components](components.md).)

## Notes

- The bundled `@tailwindcss/forms` plugin uses its default **base strategy**: once imported, it normalizes all form elements globally, so unclassed inputs also get the reset (but not Decanter's skin).
- The plugin's `form-input`/`form-select` classes from its class strategy are not used; use Decanter's classes above.
