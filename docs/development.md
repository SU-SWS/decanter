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
| `npm run build` | Compiles `dev/dev.css` → `static/css/decanter.css` once |
| `npm run watch` | Same, in watch mode |
| `npm run serve` | Serves `static/` on http://localhost:4000 |
| `npm run dev` | `watch` + `serve` together; Ctrl-C stops both |
| `npm version <bump>` | Regenerates CHANGELOG.md via auto-changelog |

There is no live reload. The watcher rebuilds `static/css/decanter.css` as soon as
you save, but you have to **refresh the browser manually** to see it.

## Repository layout

```
src/css/                  The published package (everything consumers import)
  index.css               Main entry: theme + components + utilities + variants + base
  index-minimal.css       Same, with minimal base
  forms.css               Opt-in forms entry (plugin + form classes)
  custom-variants.css     hocus / hocus-visible / hocus-within
  theme/                  @theme tokens (colors, spacing, breakpoints, fonts, …)
  components/             Plain CSS component classes (@layer components)
  utilities/              @utility definitions (generated on demand)
  base/
    base-minimal.css      Shared essentials (root font size, border compat, list markers)
    base.css              Imports base-minimal + element opinions (headings, links, tables, …)
dev/
  dev.css                 Build entry for the test page: Google Fonts + full Decanter + forms
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
- **Single source of truth**: don't duplicate values across files. Base headings `@apply type-5`…`type-0` rather than repeating the scale; `base.css` imports `base-minimal.css` rather than copying it.
- **Source detection**: `dev/dev.css` excludes `docs/` and root markdown from Tailwind's content scanning (`@source not`), so class names mentioned in prose don't leak into the build.

## The test page

`static/index.html` is both the visual regression surface and living documentation — every custom token, component, utility, and variant appears on it. When you add or change a feature, add or update its demo there. Anchors and nav links are grouped by section (`#typography`, `#colors`, `#layout`, `#components`, `#utilities`).

## Releasing

The package publishes `src/css` only (see `files` in package.json). Exports: `.`, `./minimal`, `./colors`, `./forms`, `./src/*`. `tailwindcss` is a peer dependency; `@tailwindcss/forms` is a regular dependency (bundled so `decanter/forms` always resolves).
