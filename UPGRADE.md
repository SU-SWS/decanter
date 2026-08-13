# Upgrade

This file documents what you need to change **in your own project** when moving
between Decanter versions. It covers breaking changes and deprecations only. For a
full list of everything that shipped in each release, see [CHANGELOG.md](CHANGELOG.md).

Upgrade notes for Decanter 6 and earlier are archived at
[UPGRADE.md as of tag 6.3.3](https://github.com/SU-SWS/decanter/blob/6.3.3/UPGRADE.md).

Unreleased
----------

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

Preparing for Decanter 8
------------------------

The following still work in v7 and emit unchanged CSS, but will be removed in v8.
Migrating now makes the v8 upgrade a no-op.

| Deprecated | Replacement | Available in v7? |
| --- | --- | --- |
| `.credits` | `text-[max(1.6rem,0.9em)] leading-snug italic text-cool-grey` | Yes |
| `.embed-container` | `aspect-[16/9]` on the wrapper, `size-full` on the embed | Yes |
| `.text-vertical-lr` | `[writing-mode:vertical-lr]` | Yes |
| `font-regular` | `font-normal` | Yes |
| Social brand colors (`facebook`, `twitter`, `instagram`, `linkedin`, `youtube`) | Define in your own project config or use the square bracket | Yes |
| Color `foggy` | `fog` (identical color) | Yes |
| `rs-m-neg1`, `rs-p-neg2` and the other negative responsive spacing steps | Breakpoint modifiers, e.g. `rs-m-neg1` → `p-11 md:p-12 2xl:p-13`, `rs-p-neg2` → `p-8 md:p-9 2xl:p-10` | Yes |

Two notes on the replacements:

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
