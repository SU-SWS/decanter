# Development Guide

This guide is for developers working on the Decanter package itself.

## Architecture

### Configuration Factory Pattern

Decanter uses a shared configuration factory to eliminate code duplication between the CommonJS and ES Module exports:

```
tw.config.js               # Shared configuration logic
├── tailwind.config.js     # CommonJS export (uses factory)
└── tailwind.config.mjs    # ES Module export (uses factory)
```

#### Benefits

1. **Single Source of Truth**: All configuration logic is centralized in `tw.config.js`
2. **Reduced Duplication**: Config files are only ~5 lines instead of ~200 lines each
3. **Easier Maintenance**: Changes only need to be made in one place
4. **Consistent Output**: Both exports generate identical configurations

#### Making Changes

To add new plugins, themes, or modify existing configuration:

1. Edit `tw.config.js` only
2. Both CommonJS and ES Module exports will automatically inherit the changes
3. Test both formats load and agree:

```bash
node -e "require('./tailwind.config.js')"
node -e "import('./tailwind.config.mjs')"
```

## Local Development

```bash
npm install
npm run dev
```

`npm run dev` starts the Tailwind watcher and serves the preview page at
[http://localhost:4000](http://localhost:4000).

There is no live reload. The watcher regenerates the CSS, but the browser is not
notified, so **refresh the page manually** to see any change.

| Command | What it does |
| --- | --- |
| `npm run dev` | Watch and serve the preview page together |
| `npm run build` | Build `static/css/decanter.css` once |
| `npm run watch` | Rebuild on change, without a server |
| `npm run serve` | Serve `static/` on port 4000, without a watcher |
| `npm run lint` | ESLint over `src/` (`lint:fix` to autofix) |

### What the watcher does and does not pick up

The watcher rebuilds automatically when you edit `src/css/index.css` or
`static/index.html`.

It does **not** notice changes to plugin files under `src/plugins/`. Tailwind
discovers config dependencies by statically scanning the config for literal
`require('...')` calls, and `tw.config.js` loads the plugins through an injected
`requireFn(...)` so that absolute-path resolution works in bundlers such as
Turbopack. That indirection is invisible to the scan.

After editing anything under `src/plugins/`, run `npm run build` to regenerate
the CSS, then refresh the browser.

### File Structure

```
tw.config.js                    # Shared configuration factory
├── tailwind.config.js          # CommonJS export
├── tailwind.config.mjs         # ES Module export  
├── src/
│   ├── css/index.css          # CSS entry point
│   ├── decanter.js            # JavaScript entry point
│   └── plugins/               # All Tailwind plugins
│       ├── base/              # Base styles
│       ├── components/        # Component styles
│       ├── theme/             # Theme configuration
│       └── utilities/         # Utility classes
```