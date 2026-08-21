# Decanter — agent notes

Stanford's design system as a CSS-first Tailwind CSS v4 preset. There is no JS
build and no compiled artifact in the package: `src/css/` **is** the product.

## Commands

```bash
npm install
npm run dev     # watch + serve static/index.html on http://localhost:4000
npm run build   # one-shot build of static/css/decanter.css (gitignored)
```

No test suite and no linter. Verification is visual: run `npm run dev` and check
`static/index.html`.

## Where things go

- `src/css/theme/*.css` — `@theme` tokens, one concern per file, imported by `theme/all.css`
- `src/css/utilities/` — `@utility` definitions (generated on demand)
- `src/css/components/` — plain classes in `@layer components`, always emitted
- `dev/dev.css` — build entry for the test page only, never published
- `static/index.html` — the test page; every custom token, component, utility and variant appears here

Full layout and conventions: [docs/development.md](docs/development.md).

## Rules

- **Add a demo to `static/index.html`** for any feature you add or change.
- **Don't duplicate values.** Base headings `@apply type-5`…`type-0`; `base.css`
  imports `base-minimal.css`. If a number appears twice, one of them is wrong.
- **Public surface is `exports` in package.json** (`.`, `./minimal`, `./colors`,
  `./forms`, `./src/*`). Renaming or moving a file under `src/css/` is a breaking
  change — note it in [UPGRADE.md](UPGRADE.md).
- **Docs are shipped** (`docs/` is in the `files` allowlist). Changing behaviour
  means updating the relevant `docs/*.md`.
