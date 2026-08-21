# Components

Component classes are plain CSS in the `components` cascade layer, always emitted when you import `decanter` or `decanter/minimal`. Form components live in a separate entry — see [Forms](forms.md).

Source: `src/css/components/`.

## Button — `.button`

Cardinal-red action button for `<button>`, `<a>`, and `<input type="submit|button|reset">`.

- Background `digital-red`, white text, `1rem 2rem` padding, no border
- Hover/focus: background `black`, underline; focus adds `shadow-md`
- Transitions use Decanter's default 0.25s duration

```html
<button class="button" type="submit">Submit</button>
<a class="button" href="/apply">Apply now</a>
```

## Stanford logo — `.logo`

The Stanford wordmark: sets the Stanford font, `leading-trim` (0.75) cropping, cardinal red (including hover/focus), no underline, and ligature settings. Override the color for dark backgrounds.

```html
<a class="logo text-25" href="https://stanford.edu">Stanford University</a>

<!-- stacked -->
<a class="logo type-3" href="https://stanford.edu">Stanford<br>University</a>

<!-- on a cardinal background -->
<a class="logo text-white hocus:text-white" href="https://stanford.edu">Stanford University</a>
```

## Skip link — `.skiplink`

Accessible skip-navigation link: visually hidden until keyboard-focused, then appears fixed in the top-left with a dark background. Place it as the first element in `<body>`, pointing at your main content landmark. `.skiplinks` is an alias.

```html
<body>
  <a href="#main-content" class="skiplink">Skip to main content</a>
  …
  <main id="main-content">…</main>
```

## Stretched link — `.stretched-link`

Makes an entire container clickable by stretching a nested link's hit area over it (via `::after` with `inset: 0`). The container needs `position: relative`.

```html
<div class="relative border border-black-30 rs-p-2">
  <h3><a href="/story" class="stretched-link">Card headline</a></h3>
  <p class="card-paragraph">The whole card is clickable.</p>
</div>
```

Keep other interactive elements out of the card, or raise them above the stretched area with `relative z-10`.

## Lists

| Class | Behavior |
|---|---|
| `list-unstyled` | No markers, no padding, no margins |
| `list-horizontal` | Floated horizontal list; add right margin to items yourself (e.g. `mr-20`) |

The base layer styles plain `ul`/`ol` with disc/decimal markers and `1em` padding, and `li`/`dd` with comfortable line height and spacing.

```html
<ul class="list-horizontal">
  <li class="mr-20">Home</li>
  <li class="mr-20">About</li>
  <li>Contact</li>
</ul>
```

## Tables

The base layer styles plain `<table>` elements: full width, row borders in `black-20`, left-aligned semibold headers, `1.5rem` cell padding, muted caption, responsive font size (1.6rem → 1.8rem at `md`).

| Class | Behavior |
|---|---|
| `table-borderless` | Removes all row/cell borders from a base-styled table |

```html
<table class="table-borderless">…</table>
```

## WYSIWYG — `.wysiwyg`

Vertical-rhythm wrapper for unstructured rich text (CMS output): paragraph and list spacing (1.6em), extra top margin for headings that follow content, reduced margin between stacked headings, trimmed first/last children, and hover-underlined heading links.

```html
<div class="wysiwyg">
  <!-- CMS body field output -->
</div>
```
