# Upgrade

This file documents what you need to change **in your own project** when moving
between Decanter versions. It covers breaking changes and deprecations only. For a
full list of everything that shipped in each release, see [CHANGELOG.md](CHANGELOG.md).

Upgrade notes for Decanter 6 and earlier are archived at
[UPGRADE.md as of tag 6.3.3](https://github.com/SU-SWS/decanter/blob/6.3.3/UPGRADE.md).

Upgrade from version 7.4.0 to 7.5.0
-----------------------------------

### Removed: `.accessibility-hidden` and `.a11y-hidden`

Use Tailwind's [`aria-hidden:` variant](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states)
instead. It compiles to the same `[aria-hidden="true"] { display: none }` these
classes produced, so the swap is exact.

```html
<!-- Before -->
<span class="a11y-hidden" aria-hidden="true">Decorative text</span>

<!-- After -->
<span class="aria-hidden:hidden" aria-hidden="true">Decorative text</span>
```

**Audit your markup before upgrading.** This removal does not break the build. Any
element that relied on these classes simply becomes visible. Search your templates
for `a11y-hidden` and `accessibility-hidden`.

These were removed rather than deprecated because they were almost never used, and
the class alone did nothing — without an accompanying `aria-hidden="true"` attribute
it was a no-op.

Note that earlier documentation described these as visually hiding content while
keeping it available to screen readers. That was never their behavior; they hid
content from everyone. If that screen-reader behavior is what you wanted, use
Tailwind's `sr-only` (with `focus:not-sr-only` for skip links) rather than a
substitute for these classes.

### `@tailwindcss/forms` updated to 0.5.11

Its base styles now use `input:where([type='…'])` and `select:where([multiple])` in
place of bare attribute selectors. No declaration changed, and most projects will see
no difference. Two cases can:

- **Bare `input { … }` rules.** `:where()` contributes no specificity, so these
  selectors are now weaker than the attribute selectors they replaced. A bare element
  rule that previously lost to the forms base styles now ties on specificity and wins
  on source order.
- **`<input type="file" multiple>`.** The old `[multiple]` selector matched any
  element with that attribute, so file inputs were picking up `select` styling. Fixed,
  but visible if you have that markup.

Decanter's own `.input`, `.select`, and `.textarea` are unaffected.

Preparing for Decanter 8
------------------------

The following still work in v7 and emit unchanged CSS, but will be removed in v8.
Migrating now makes the v8 upgrade a no-op.

| Deprecated | Replace with | Still available in v7? |
| --- | --- | --- |
| `.credits` | `text-[max(1.6rem,0.9em)] leading-snug italic text-cool-grey` | Yes |
| `.embed-container` | `aspect-[16/9]` on the wrapper, `size-full` on the embed | Yes |
| `.text-vertical-lr` | `[writing-mode:vertical-lr]` | Yes |
| `font-regular` | `font-normal` | Yes |
| `font-slab` | Leave alone now and update when v8 is out | Yes |
| The `Source Sans Pro` / `Source Serif Pro` fallbacks in `font-sans` / `font-serif` | Make sure Source Sans 3 and Source Serif 4 are loaded — see the note below | Yes |
| `font-mono` | Leave alone now and update when v8 is out | Yes |
| Social brand colors (`facebook`, `twitter`, `instagram`, `linkedin`, `youtube`) | Use the square bracket notation | Yes |
| Color `foggy` | `fog` (identical color) | Yes |
| `rs-m-neg1`, `rs-p-neg2` and the other negative responsive spacing steps | Breakpoint modifiers, e.g. `rs-m-neg1` → `p-11 md:p-12 2xl:p-13`, `rs-p-neg2` → `p-8 md:p-9 2xl:p-10` | Yes |
| `text-m0` | `type-0`, or `text-[1em]` | Yes |
| `text-m1` | `type-1`, or `text-[1.25em]` | Yes |
| `text-m2` | `type-2`, or `text-[1.56em]` | Yes |
| `text-m3` | `type-3`, or `text-[1.95em]` | Yes |
| `text-m4` | `type-4`, or `text-[2.44em]` | Yes |
| `text-m5` | `type-5`, or `text-[3.05em]` | Yes |
| `text-m6` | `type-6`, or `text-[3.81em]` | Yes |
| `text-m7` | `type-7`, or `text-[4.77em]` | Yes |
| `text-m8` | `type-8`, or `text-[5.96em]` | Yes |
| `text-m9` | `type-9`, or `text-[7.45em]` | Yes |
| `text-09em`, `-text-m1` | `text-[.9em]` (no `type-*` equivalent — the 0.9em step is not on the scale) | Yes |

Four notes on the replacements:

- **The two font size replacements are not equivalent — pick deliberately.** `type-N`
  is the recommended target, but it matches `text-mN` only at the `lg` breakpoint and
  up; below that it is deliberately smaller (`1.15^N` at mobile, `1.2^N` at `md`,
  against `text-mN`'s flat `1.25^N`), and it adds proportional letter spacing. So
  `type-6` is 3.81em on desktop like `text-m6`, but 2.31em on mobile. Use `type-N` if
  you want that responsive behavior — it is why the scale exists. Use the arbitrary
  value if you need the current rendering preserved byte-for-byte at every breakpoint.
  `type-0` and `text-m0` are identical (both a flat 1em).

- **The Pro font fallbacks are inert for most projects.** `font-sans` and `font-serif`
  keep leading with Source Sans 3 and Source Serif 4; v8 only drops the superseded
  `Source Sans Pro` / `Source Serif Pro` entry sitting behind each. Decanter's
  `fonts.css` and `fonts-basic.css` load only Source Sans 3 and Source Serif 4, so
  those entries never match unless you load the Pro families yourself. If you do, or
  you depend on them being installed locally, ensure Source Sans 3 and Source Serif 4
  are available — otherwise text falls through to Helvetica Neue and Georgia.

- **`.credits` is being removed for accessibility reasons** — small italic text is not
  recommended. The replacement above reproduces the v7 styling if you need it, but
  prefer non-italic body-size text where you can.
- **Use `aspect-[16/9]`, not `aspect-video`.** Decanter v7 loads
  `@tailwindcss/aspect-ratio`, which suppresses Tailwind's core `aspect-*` utilities,
  so `aspect-video` generates no CSS in v7. `aspect-[16/9]` works in both v7 and v8.

Upgrade from version 7.0.0-beta.1 to 7.0.0
------------------------------------------

### The `su-` prefix has been removed from every class

Decanter 7 betas set Tailwind's [`prefix`](https://tailwindcss.com/docs/configuration#prefix)
option to `su-`. That prefixed **every utility Tailwind generated**, not just
Decanter's own classes — so `flex` was `su-flex`, `text-center` was `su-text-center`,
and `p-4` was `su-p-4`, alongside `su-button` and `su-centered-container`.

The stable release removed the option. Every Decanter *and* core Tailwind class in
your templates loses the prefix:

```html
<!-- Before -->
<div class="su-centered-container su-flex su-items-center su-rs-p-3">
  <button class="su-button su-text-center">Submit</button>
</div>

<!-- After -->
<div class="centered-container flex items-center rs-p-3">
  <button class="button text-center">Submit</button>
</div>
```

Because this touches nearly every class attribute in a project, a global
find-and-replace of `su-` is usually the practical approach — but review the result.
Any of your own non-Decanter class names that happen to start with `su-` will be
caught too.

Sections below this one predate the change and still refer to the prefixed names.

### Sans and serif font families updated

The default sans and serif stacks now lead with **Source Sans 3** and
**Source Serif 4**, replacing Source Sans Pro and Source Serif Pro. The Pro families
remain in the stacks as fallbacks. If you import Decanter's fonts yourself rather
than using `fonts.css` or `fonts-basic.css`, update your font imports to match.

### New variant: `group-hocus-within:`

Additive, no action required.

Upgrade from version 7.0.0-beta.0 to 7.0.0-beta.1
-------------------------------------------------

- Removed `su-link-underline`, `su-link-no-underline`, and `.su-link` nested variant states as they don't play nice with JIT mode.
- Replace this functionality by installing and using the tailwind children varients plugin within your project and using it with the no-underline utility.
  - https://github.com/benface/tailwindcss-children
  - https://tailwindcss.com/docs/text-decoration#no-underline

Upgrade from version 7.0.0-alpha to 7.0.0-beta
----------------------------------------------

- Renamed `su-input-base` to `su-input`
- We removed the base styles from form elements as they were too hard to override. You are now expected to add the following css classes to your form elements.
  - `su-button`
  - `su-radio`
  - `su-checkbox`
  - `su-fieldset`
  - `su-label`
  - `su-legend`
  - `su-textarea`
  - `su-select`

Upgrade from version 6.x to 7.0.0
---------------------------------

There is no incremental upgrade path. Decanter 7 is a rewrite: v6 was SASS/SCSS with
BEM naming, while v7 is a [Tailwind CSS](https://tailwindcss.com/) preset that
generates utility classes. Class names, the build pipeline, and the distribution
format all changed.

Plan this as a re-implementation of your theme layer against the new system rather
than a find-and-replace. Start from [README.md](README.md) for installation and
[docs/index.md](docs/index.md) for the full list of classes Decanter provides.
