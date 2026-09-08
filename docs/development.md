# Development

Working on Decanter itself. Consumers of the package don't need anything here — see [Getting Started](getting-started.md).

## Setup

```bash
git clone https://github.com/SU-SWS/decanter.git
cd decanter
nvm use
npm ci
npm run dev   # builds CSS in watch mode + serves the test page at http://localhost:4000
```

## npm scripts

| Script | What it does |
|---|---|
| `npm run build` | Builds both root-size previews once |
| `npm run build:base10` | Compiles `dev/dev.css` → `static/css/decanter.css` |
| `npm run build:base16` | Compiles `dev/dev-base16.css` → `static/css/decanter-base16.css` |
| `npm run watch` | Watches and rebuilds both previews |
| `npm run serve` | Serves `static/` on http://localhost:4000 |
| `npm run dev` | `watch` + `serve` together; Ctrl-C stops both |
| `npm version <bump>` | Regenerates CHANGELOG.md via auto-changelog |

There is no live reload. The watchers rebuild both preview stylesheets as soon as
you save, but you have to **refresh the browser manually** to see them.

## Repository layout

```
src/css/                  The published package (everything consumers import)
  index.css               Legacy 10px-root entry with full base styles
  index-minimal.css       Legacy 10px-root entry with minimal base styles
  index-base16.css        No-root-override entry with full base styles
  index-base16-minimal.css  No-root-override entry with minimal base styles
  core.css                Shared theme + components + utilities + variants
  forms.css               Opt-in forms entry (plugin + form classes)
  custom-variants.css     hocus / hocus-visible / hocus-within
  theme/                  @theme tokens (colors, spacing, breakpoints, fonts, …)
    decanter-px.css       --decanter-px, the unit every fixed Decanter length derives from
    base16.css            The sole base16 override: --decanter-px
  components/             Plain CSS component classes (@layer components)
  utilities/              @utility definitions (generated on demand)
  base/
    root-font-size.css    Legacy 62.5% HTML root override
    shared.css            Root-neutral essentials (font smoothing, border compat, lists)
    opinionated.css       Root-neutral full base; imports shared.css
    base-minimal.css      Legacy wrapper: root font size + shared.css
    base.css              Legacy wrapper: root font size + opinionated.css
dev/
  dev.css                 Legacy-root test-page build entry
  dev-base16.css          No-root-override test-page build entry
  dev-base-stanford-font.css  Local @font-face for the Stanford wordmark
static/
  index.html              The test page — demonstrates every custom Decanter feature
  css/decanter.css        Build output (gitignored)
docs/                     This documentation
```

## Conventions

- **Theme values** go in `src/css/theme/*.css` as `@theme` tokens — one concern per file, imported by `theme/all.css`.
- **Utilities** use `@utility` (functional utilities use `--value(…)`), so they're generated only when used.
- **Components** are plain classes in `@layer components` and are always emitted — keep them lean.
- **Single source of truth**: don't duplicate values across files. Fixed Decanter lengths derive from `--decanter-px`; base headings `@apply type-5`…`type-0` rather than repeating the scale; the legacy and base16 wrappers import the root-neutral base files rather than copying them.
- **Source detection**: `dev/dev.css` excludes `docs/` and root markdown from Tailwind's content scanning (`@source not`), so class names mentioned in prose don't leak into the build.

## The test page

`static/index.html` is both the visual regression surface and living documentation — every custom token, component, utility, and variant appears on it. The switch in the top brand bar swaps between the two generated root-size previews. When you add or change a feature, add or update its demo there. Anchors and nav links are grouped by section (`#typography`, `#colors`, `#layout`, `#components`, `#utilities`).

## Releasing

The package publishes `src/css` only (see `files` in package.json). Exports: `.`, `./minimal`, `./base16`, `./base16/minimal`, `./colors`, `./forms`, `./src/*`. `tailwindcss` is a peer dependency; `@tailwindcss/forms` is a regular dependency (bundled so `decanter/forms` always resolves).
