# Decanter — agent notes

Stanford's design system as a CSS-first Tailwind CSS v4 preset. There is no JS
build and no compiled artifact in the package: `src/css/` **is** the product.

## Commands

```bash
npm install
npm run dev     # watch + serve static/index.html on http://localhost:4000
npm run build   # one-shot build of both root-size previews (gitignored)
```

No test suite and no linter. Verification is visual: run `npm run dev` and check
`static/index.html`.

## Where things go

- `src/css/theme/*.css` — `@theme` tokens, one concern per file, imported by `theme/all.css`
- `src/css/utilities/` — `@utility` definitions (generated on demand)
- `src/css/components/` — plain classes in `@layer components`, always emitted
- `dev/dev.css`, `dev/dev-base16.css` — test-page build entries, never published
- `static/index.html` — the test page; every custom token, component, utility and variant appears here

Full layout and conventions: [docs/development.md](docs/development.md).

## Rules

- **Add a demo to `static/index.html`** for any feature you add or change.
- **Don't duplicate values.** Base headings `@apply type-5`…`type-0`; root-size
  entries import the shared base files. If a number appears twice, one is wrong.
- **Public surface is `exports` in package.json** (`.`, `./minimal`, `./base16`,
  `./base16/minimal`, `./colors`, `./forms`, `./src/*`). Renaming or moving a
  file under `src/css/` is a breaking change — note it in [UPGRADE.md](UPGRADE.md).
- **Docs are shipped** (`docs/` is in the `files` allowlist). Changing behaviour
  means updating the relevant `docs/*.md`.
- **Prefers rem-based sizing for accessibility**: Most Decanter-owned numeric utilities, tokens, and fixed component spacing and font sizes are rem-based and scale with the browser's root font size. The default 10px-root entries set `html { font-size: 62.5% }` so that `1rem = 10px`. The base16 entries leave the root font size unchanged (`1rem = 16px`), but all Decanter-owned lengths still render at the same pixel-equivalent sizes in either mode. See [Getting Started](docs/getting-started.md) for details.
