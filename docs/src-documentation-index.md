# Source Code Documentation Index

This directory contains comprehensive documentation for all source code in the Decanter design system. Use this index to navigate to specific documentation for different parts of the codebase.

## Documentation Structure

### 📋 Overview
- **[src-overview.md](./src-overview.md)** - Complete architectural overview of the `/src` directory structure and design philosophy

### 🎨 Core Files
- **[css-files.md](./css-files.md)** - Documentation for CSS files, font loading, and Tailwind directives

### 🔧 Plugin System Documentation

#### 🏗️ Base Plugins
- **[base-plugins.md](./base-plugins.md)** - Foundation HTML element styling (typography, colors, layout fundamentals)

#### 🎯 Theme Plugins  
- **[theme-plugins.md](./theme-plugins.md)** - Design tokens and theme configuration (colors, typography, spacing, breakpoints)

#### 🧩 Component Plugins
- **[component-plugins.md](./component-plugins.md)** - Ready-to-use component classes (buttons, forms, layout, typography)

#### ⚡ Utility Plugins
- **[utility-plugins.md](./utility-plugins.md)** - Specialized utility classes (accessibility, advanced typography, link styling)

## Quick Reference

### By Use Case

#### 🎨 **Styling & Design**
- Colors and branding → [Theme Plugins](./theme-plugins.md#colors-js)
- Typography system → [Theme Plugins](./theme-plugins.md#typography-system-integration)
- Spacing and layout → [Theme Plugins](./theme-plugins.md#spacing-js)

#### 🧩 **Components**
- Buttons and forms → [Component Plugins](./component-plugins.md#form-components)
- Layout containers → [Component Plugins](./component-plugins.md#layout-components)
- Typography components → [Component Plugins](./component-plugins.md#typography-components)

#### ♿ **Accessibility**
- Screen reader support → [Utility Plugins](./utility-plugins.md#accessibility-utilities)
- Skip links → [Component Plugins](./component-plugins.md#accessibility-components)
- Focus management → [Base Plugins](./base-plugins.md#accessibility-considerations)

#### 📱 **Responsive Design**
- Breakpoints → [Theme Plugins](./theme-plugins.md#screens-js)
- Responsive typography → [Component Plugins](./component-plugins.md#typography-components)
- Fluid layouts → [Component Plugins](./component-plugins.md#layout-components)

#### 🌐 **International Support**
- Writing modes → [Utility Plugins](./utility-plugins.md#typography-utilities)
- Word breaking → [Utility Plugins](./utility-plugins.md#typography-utilities)
- Font loading → [CSS Files](./css-files.md#font-loading-strategy)

### By File Location

#### `/src/` Root Files
```
src/
├── decanter.js          → See: CSS Files Documentation
└── css/index.css        → See: CSS Files Documentation
```

#### `/src/plugins/` Structure
```
plugins/
├── base/                → See: Base Plugins Documentation
│   └── base.js
├── theme/               → See: Theme Plugins Documentation  
│   ├── colors.js
│   ├── fontFamily.js
│   ├── fontSize.js
│   ├── spacing.js
│   └── ...
├── components/          → See: Component Plugins Documentation
│   ├── form/
│   ├── layout/
│   ├── typography/
│   └── ...
└── utilities/           → See: Utility Plugins Documentation
    ├── accessibility/
    ├── link/
    ├── typography/
    └── ...
```

## Development Workflow

### 🔍 **Finding Documentation**
1. **Know the file**: Use the [file location reference](#by-file-location) above
2. **Know the feature**: Use the [use case reference](#by-use-case) above
3. **Need overview**: Start with [src-overview.md](./src-overview.md)

### 📝 **Making Changes**
1. **Theme changes**: Modify [theme plugins](./theme-plugins.md) for design tokens
2. **Component updates**: Edit [component plugins](./component-plugins.md) for UI patterns
3. **New utilities**: Add [utility plugins](./utility-plugins.md) for specialized needs
4. **Base styling**: Update [base plugins](./base-plugins.md) for HTML fundamentals

### 🧪 **Testing Changes**
- **Visual regression**: Component and theme changes
- **Accessibility**: Screen reader and keyboard testing
- **Performance**: Bundle size and runtime impact
- **Cross-browser**: Compatibility verification

## Stanford Design System Compliance

All documented code implements Stanford's official design guidelines:

### 🎨 **Visual Identity**
- **Colors**: [Official Stanford brand palette](./theme-plugins.md#stanford-brand-colors)
- **Typography**: [Stanford-approved font families](./theme-plugins.md#fontfamily-js)
- **Logos**: [Brand element utilities](./component-plugins.md#logo)

### ♿ **Accessibility Standards**
- **WCAG 2.1 AA**: All components meet compliance requirements
- **Screen readers**: [Comprehensive support utilities](./utility-plugins.md#accessibility-utilities)
- **Keyboard navigation**: [Built into all interactive components](./component-plugins.md#accessibility-standards)

### 📐 **Layout Guidelines**
- **Grid systems**: [Consistent spacing and alignment](./component-plugins.md#layout-components)
- **Typography scale**: [Modular and responsive sizing](./component-plugins.md#typography-components)
- **Responsive design**: [Mobile-first approach](./theme-plugins.md#responsive-design-with-theme)

## Technical Architecture

### 🏗️ **Plugin System**
- **Modular design**: Each plugin is self-contained
- **Tailwind integration**: Uses official Tailwind CSS plugin API
- **Configuration driven**: Theme-based customization
- **Performance optimized**: Tree-shaking and purging support

### 📦 **Build Integration**
- **PostCSS processing**: Standard Tailwind CSS pipeline
- **Bundle optimization**: Automatic unused code removal
- **Module formats**: Support for CommonJS, ES modules, and TypeScript

### 🔧 **Customization**
- **Theme extension**: [Extending without breaking](./theme-plugins.md#customization-strategies)
- **Component override**: [Safe customization patterns](./component-plugins.md#integration-patterns)
- **Utility addition**: [Adding specialized functionality](./utility-plugins.md#custom-utility-creation)

## Getting Started

### 📚 **New to Decanter?**
1. Start with [src-overview.md](./src-overview.md) for the big picture
2. Review [css-files.md](./css-files.md) for basic integration
3. Explore [theme-plugins.md](./theme-plugins.md) for design tokens

### 🔧 **Need to Customize?**
1. Review [theme-plugins.md](./theme-plugins.md) for design token changes
2. Check [component-plugins.md](./component-plugins.md) for UI customization
3. See [utility-plugins.md](./utility-plugins.md) for specialized functionality

### 🐛 **Troubleshooting?**
1. Check the specific plugin documentation for common issues
2. Review [css-files.md](./css-files.md) for build and integration problems
3. Consult [src-overview.md](./src-overview.md) for architectural understanding

## Contributing

When contributing to the source code:

1. **Follow documentation**: Each plugin type has specific patterns and guidelines
2. **Test thoroughly**: Visual, accessibility, and performance testing required
3. **Update docs**: Keep documentation current with code changes
4. **Stanford compliance**: Ensure all changes align with Stanford design guidelines

For more information about contributing, see the main project documentation.
