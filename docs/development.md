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
3. Test both formats: `npm run build` and `node test-commands`

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

### Testing Changes

Always test both module formats after making changes:

```bash
# Test CommonJS
node -e "const config = require('./tailwind.config.js'); console.log('Themes:', Object.keys(config.theme).length, 'Plugins:', config.plugins.length);"

# Test ES Module  
node --input-type=module -e "import config from './tailwind.config.mjs'; console.log('Themes:', Object.keys(config.theme).length, 'Plugins:', config.plugins.length);"

# Test package imports
node -e "console.log('require works:', !!require('decanter').theme);"
node --input-type=module -e "import d from 'decanter'; console.log('import works:', !!d.theme);"

# Test build
npm run build
```
