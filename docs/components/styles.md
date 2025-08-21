# Typography Styles

A set of composable typography utility classes used across the design system for headings, intros, captions, and other typographic roles. They are meant to provide a set of reasonable defaults that can be used consistently throughout the application.

## Provided classes and behavior
- `.types` — Base display styles
- `.intro-text` — Introductory paragraph style
- `.splash-text` — Large display text
- `.quote-text` — Italic text for quotes; slightly larger than body text
- `.caption`, `.credits` — Smaller text for captions and credits. `.caption` includes `margin-top: 0.4em` and `.credits` is italic
- `.subheading` — Larger font size for subheadings
- `.big-paragraph` — For slightly larger paragraph with looser line-height
- `.card-paragraph` — Paragraph style intended for card UI with smaller font size and tighter line-height
- `.basefont-19` to `.basefont-23` — Base font size utilities that can be applied to the HTML body element with responsive font-size adjustments at `md` and `2xl`

## Example
```html
<h2 class="types">Article title</h2>
<p class="intro-text">This is an intro paragraph constrained to a readable measure.</p>
<p class="big-paragraph">Larger paragraph for long-form reading.</p>
<p class="caption">Image caption that appears below images.</p>
<aside class="credits">By the author</aside>
```

## Notes
- These classes use the `decanter.typography` theme tokens so they will update when project-specific theme extensions are applied.
- The `.basefont-XX` utilities are intended for quick base-size overrides for sections that need a slightly larger base font.
