# Decanter Custom CSS Classes Index

This index lists all custom CSS classes provided by the Decanter design system (beyond core Tailwind classes), organized by category.

## Component Utilities

### Form Components
- `.btn`, `.btn-outline`, `.btn-ghost` — Button styles for primary, outline, and ghost buttons. (see Components > Buttons)
- `.input` — Custom form input styling. (see Components > Input)
- `.form-elements` — Unified styling for form elements (labels, selects, checkboxes). (see Components > Form Elements)

### Layout Components
- `.centered-container` — Constrains content to centered max-width container. (see Components > Centered Container)
- `.grid-gap` — Adds consistent gap between grid items. (see Components > Grid Gap)
- `.embed-container` — Maintains responsive aspect ratio for embedded media. (see Components > Embed Container)
- `.rs-*` — Responsive spacing utilities (`rs-m-`, `rs-p-` variants). (see Components > Responsive Spacing)
  - `.rs-m-{scale}`: responsive margin (all sides)
  - `.rs-p-{scale}`: responsive padding (all sides)
  - `.rs-mt-{scale}`, `.rs-mr-{scale}`, `.rs-mb-{scale}`, `.rs-ml-{scale}`: responsive margin top/right/bottom/left
  - `.rs-mx-{scale}`, `.rs-my-{scale}`: responsive margin x-axis / y-axis
  - `.rs-pt-{scale}`, `.rs-pr-{scale}`, `.rs-pb-{scale}`, `.rs-pl-{scale}`: responsive padding top/right/bottom/left
  - `.rs-px-{scale}`, `.rs-py-{scale}`: responsive padding x-axis / y-axis

### Navigation & Interactive Components
- `.list-unstyled` — Removes default list styling. (see Components > Lists)
- `.list-horizontal` — Creates horizontal inline lists. (see Components > Lists)
- `.skiplink`, `.skiplinks` — Hidden skip navigation links that appear on focus. (see Components > Skiplink)
- `.stretched-link` — Expands a link to cover its parent container. (see Components > Stretched Link)

### Brand & Typography Components
- `.logo` — Displays Stanford logo text with custom glyphs. (see Components > Logo)

- **Modular Typography Scale**:
  - `.type-0` — Base text size (step 0).
  - `.type-1` — Modular type step 1.
  - `.type-2` — Modular type step 2.
  - `.type-3` — Modular type step 3.
  - `.type-4` — Modular type step 4.
  - `.type-5` — Modular type step 5.
  - `.type-6` — Modular type step 6.
  - `.type-7` — Modular type step 7.
  - `.type-8` — Modular type step 8.
  - `.type-9` — Modular type step 9 (largest heading).
- `.type-{steps}` — Fluid typography classes for custom scales. (see Components > Fluid Typography)
- `.wysiwyg` — Rich text editor content styling. (see Components > WYSIWYG)
- `.text-shadow`, `.text-shadow-md`, `.text-shadow-lg` — Text shadow effects. (see Components > Text Shadow)
- `.styles` — Core typography styles for decals and display text. (see Components > Styles)

### Table & Media Components
- `.borderless-table` — Table without borders. (see Components > Borderless)

## Utility Classes

### Accessibility
- `.accessibility-hidden`, `.a11y-hidden` — Visually hides content but keeps it available to screen readers. (see Utilities > Accessibility Hidden)

### Visual Effects
- `.backface-hidden` — Hides the back face of elements during 3D transforms. (see Utilities > Backface Visibility)

### Color Utilities
- **Text & Background Colors**
  - `.text-cardinal-red`, `.bg-cardinal-red`, `.border-cardinal-red`
  - `.text-black`, `.bg-black`, `.border-black`
  - `.text-cool-grey`, `.bg-cool-grey`, `.border-cool-grey`
  - `.text-digital-red`, `.bg-digital-red`, `.border-digital-red`
  - `.text-digital-blue`, `.bg-digital-blue`, `.border-digital-blue`
  - `.text-digital-green`, `.bg-digital-green`, `.border-digital-green`
  - `.text-palo-alto`, `.bg-palo-alto`, `.border-palo-alto`
  - `.text-palo-verde`, `.bg-palo-verde`, `.border-palo-verde`
  - `.text-olive`, `.bg-olive`, `.border-olive`
  - `.text-bay`, `.bg-bay`, `.border-bay`
  - `.text-sky`, `.bg-sky`, `.border-sky`
  - `.text-lagunita`, `.bg-lagunita`, `.border-lagunita`
  - `.text-poppy`, `.bg-poppy`, `.border-poppy`
  - `.text-spirited`, `.bg-spirited`, `.border-spirited`
  - `.text-illuminating`, `.bg-illuminating`, `.border-illuminating`
  - `.text-plum`, `.bg-plum`, `.border-plum`
  - `.text-brick`, `.bg-brick`, `.border-brick`
  - `.text-archway`, `.bg-archway`, `.border-archway`
  - `.text-stone`, `.bg-stone`, `.border-stone`
  - `.text-foggy`, `.bg-foggy`, `.border-foggy`
  - `.text-fog`, `.bg-fog`, `.border-fog`
  - `.text-facebook`, `.bg-facebook`, `.border-facebook`
  - `.text-twitter`, `.bg-twitter`, `.border-twitter`
  - `.text-instagram`, `.bg-instagram`, `.border-instagram`
  - `.text-linkedin`, `.bg-linkedin`, `.border-linkedin`
  - `.text-youtube`, `.bg-youtube`, `.border-youtube`

### Link Styling
- `.link-underline`, `.link-no-underline` — Controls link text decoration. (see Utilities > Link Underline)
- `.link-regular`, `.link-semibold`, `.link-bold` — Sets link font weight. (see Utilities > Link Font Weight)

### Typography Helpers
- `.break-words` — Enhanced `word-break: break-word` utility. (see Utilities > Break Words)
- `.text-vertical-lr` — Sets vertical left-to-right text orientation. (see Utilities > Writing Mode)

## Theme Extensions

- **Spacing Scale** — Extended margin, padding, gap, and width utilities (see Theme > Spacing).
  - `px`, `0`
  - `01em` – `09em` (0.1em increments)
  - `1` – `50` (0.1rem increments)
  - Additional: `55`, `58`, `60`, `61`, `65`, `70`, `72`, `75`, `76`, `80`, `85`, `90`, `95`, `100`, `108`, `110`, `120`, `114`, `126`, `130`, `133`, `140`, `150`, `160`, `162`, `170`, `171`, `180`, `190`, `200`, `216`, `220`, `228`, `230`, `240`, `250`, `260`, `270`, `280`, `290`, `300`, `350`, `400`, `450`, `500`, `550`, `600`, `650`, `700`, `750`, `800`, `850`, `900`, `950`, `1000`, `1100`, `1200`, `1300`, `1400`, `1500`
- **Border Width** — `.border-3`, `.border-5`, `.border-6`, `.border-7` (see Theme > Border Width)
- **Border Radius** — `.rounded` default set to `0.3rem` (see Theme > Border Radius)
- **Gap Scale** — `xs` (20px), `lg` (36px), `xl` (40px), `2xl` (48px) (see Theme > Gap)
- **Font Size Scale** — `.text-11` – `.text-30`, `.text-m0` – `.text-m9`, `.text--m1`, `.text-09em` (see Theme > Font Size)
- **Font Weight Scale** — `.font-regular` (alias for `font-normal`) (see Theme > Font Weight)
- **Line Clamp** — `.line-clamp-7` – `.line-clamp-12` (see Theme > Line Clamp)
- **Line Height** — `.leading-tight`, `.leading-display`, `.leading-snug`, `.leading-cozy`, `.leading` (default), `.leading-half`, `.leading-trim` (see Theme > Line Height)
- **Max Width** — `.max-w-10` – `.max-w-1000`, `.max-w-prose-wide` (see Theme > Max Width)
- **Transition Duration** — `.duration` (default 250ms) (see Theme > Transition Duration)
- **Screens (Breakpoints)** — `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl` (see Theme > Screens)
- **Font Family** — `font-mono`, `font-sans`, `font-serif`, `font-slab`, `font-stanford` (see Theme > Font Family)

## Variants

Custom variants added by Decanter for enhanced styling:
- `hocus:` — Applies on hover and focus.
- `hocus-visible:` — Applies on hover and `focus-visible`.
- `group-hocus:` / `group-hocus-visible:` / `group-hocus-within:` — Applies when parent `.group` is hovered/focused.
- `children:` / `children-hover:` / `children-focus:` / `children-focus-visible:` — Targets direct children in given states.
