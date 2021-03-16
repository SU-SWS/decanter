/**
 * Tailwind Configuration.
 */

var path = require('path')
var dir = path.resolve(__dirname, 'src/plugins')

module.exports = {
  // Our own prefix.
  prefix: 'su-',
  // Enable dark mode utility classes
  darkMode: 'media',

  // The theme section is where you define your color palette, font stacks,
  // type scale, border sizes, breakpoints — anything related to the visual
  // design of your site.
  // https://tailwindcss.com/docs/configuration/#theme

  theme: {
    // Overrides.
    borderRadius: require(dir + '/theme/borderRadius.js')(),
    borderWidth: require(dir + '/theme/borderWidth.js')(),
    colors: require(dir + '/theme/colors.js')(),
    fontFamily: require(dir + '/theme/fontFamily.js')(),
    fontSize: require(dir + '/theme/fontSize.js')(),
    fontWeight: require(dir + '/theme/fontWeight.js')(),
    gap: require(dir + '/theme/gap.js')(),
    height: require(dir + '/theme/height.js')(),
    lineHeight: require(dir + '/theme/lineHeight.js')(),
    maxHeight: require(dir + '/theme/maxHeight.js')(),
    maxWidth: require(dir + '/theme/maxWidth.js')(),
    screens: require(dir + '/theme/screens.js')(),
    spacing: require(dir + '/theme/spacing.js')(),
    transitionDuration: require(dir + '/theme/transitionDuration.js')(),
    width: require(dir + '/theme/width.js')(),
    // Decanter Custom.
    decanter: require(dir + '/theme/decanter.js')(),
    // Extensions of tailwind core config.
  },

  // The corePlugins section lets you completely disable classes that Tailwind
  // would normally generate by default if you don't need them for your project.
  // https://tailwindcss.com/docs/configuration/#core-plugins
  corePlugins: {
    // preflight: false,
    fontSmoothing: false,
    placeholderOpacity: false,
    divideOpacity: false,
    divideStyle: false,
    borderCollapse: false,
    borderOpacity: false,
    skew: false
  },

  // Never purge styles here.
  purge: false,

  // The plugins section allows you to register third-party plugins with
  // Tailwind that can be used to generate extra utilities, components, base
  // styles, or custom variants.
  // https://tailwindcss.com/docs/configuration/#plugins
  plugins: [
    // @tailwind base;
    require(dir + '/base/base.js')(),

    // @tailwind components;
    require(dir + '/components/form/input-base.js')(),
    require(dir + '/components/lists/lists.js')(),
    require(dir + '/components/layout/centered-container.js')(),
    require(dir + '/components/layout/grid-gap.js')(),
    require(dir + '/components/logo/logo.js')(),
    require(dir + '/components/media/embed-container.js')(),
    require(dir + '/components/responsive-spacing/responsive-spacing.js')(),
    require(dir + '/components/skiplink/skiplink.js')(),
    require(dir + '/components/tables/borderless.js')(),
    require(dir + '/components/typography/modular-typography.js')(),
    require(dir + '/components/typography/styles.js')(),
    require(dir + '/components/typography/wysiwyg.js')(),

    // @tailwind utilities;
    require(dir + '/utilities/accessibility/accessibility-hidden.js')(),
    require(dir + '/utilities/accessibility/sr-only-text.js')(),
    require(dir + '/utilities/link/link.js')(),
    require(dir + '/utilities/link/link-fontweight.js')(),
    require(dir + '/utilities/link/link-underline.js')(),
    require(dir + '/utilities/scrolling/smooth-scroll.js')(),

    // 3rd Party Plugins;
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
    require('tailwindcss-interaction-variants'),

  ],

  // The variants section lets you control which variants are generated for each
  // core utility plugin.
  // https://tailwindcss.com/docs/configuration/#variants
  variants: {
    extend: {
      transform: ['group-hocus', 'motion-safe', 'motion-reduce'],
      translate: ['group-hocus'],
      rotate: ['group-hocus'],
      margin: ['first', 'last'],
      backgroundColor: ['group-focus-within', 'group-focus-visible', 'group-active', 'hocus', 'group-hocus'],
      borderColor: ['group-focus-within', 'hocus', 'group-hocus'],
      textColor: ['group-focus-within', 'group-focus-visible', 'group-active', 'hocus', 'group-hocus'],
    }
  }
}
