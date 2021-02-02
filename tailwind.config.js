/**
 * Tailwind Configuration.
 */

var path = require('path')
var dir = path.resolve(__dirname, 'src/plugins')

module.exports = {
  // Our own prefix.
  prefix: 'su-',

  // The theme section is where you define your color palette, font stacks,
  // type scale, border sizes, breakpoints — anything related to the visual
  // design of your site.
  // https://tailwindcss.com/docs/configuration/#theme

  theme: {
    // Overrides.
    aspectRatio: require(dir + '/theme/aspectRatio.js')(),
    borderRadius: require(dir + '/theme/borderRadius.js')(),
    borderWidth: require(dir + '/theme/borderWidth.js')(),
    boxShadow: require(dir + '/theme/boxShadow.js')(),
    colors: require(dir + '/theme/colors.js')(),
    screens: require(dir + '/theme/screens.js')(),
    fontFamily: require(dir + '/theme/fontFamily.js')(),
    fontSize: require(dir + '/theme/fontSize.js')(),
    fontWeight: require(dir + '/theme/fontWeight.js')(),
    lineHeight: require(dir + '/theme/lineHeight.js')(),
    gap: require(dir + '/theme/gap.js')(),
    transitionDuration: require(dir + '/theme/transitionDuration.js')(),
    // Decanter Custom.
    decanter: require(dir + '/theme/decanter.js')(),
    // Extensions of tailwind core config.
    extend: {
      backgroundImage: require(dir + '/theme/backgroundImage.js')()
    }
  },

  // The corePlugins section lets you completely disable classes that Tailwind
  // would normally generate by default if you don't need them for your project.
  // https://tailwindcss.com/docs/configuration/#core-plugins
  corePlugins: {
    // preflight: false,
    fontSmoothing: false,
    placeholderOpacity: false,
    placeholderColor: false,
    divideColor: false,
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
    require(dir + '/components/brand-bar/brand-bar.js')(),
    require(dir + '/components/button/button.js')(),
    require(dir + '/components/logo/logo.js')(),
    require(dir + '/components/skiplinks/skiplinks.js')(),
    // @tailwind utilities;
    require(dir + '/utilities/accessibility/accessibily-hidden.js')(),
    require(dir + '/utilities/accessibility/sr-only-element.js')(),
    require(dir + '/utilities/accessibility/sr-only-text.js')(),
    require(dir + '/utilities/flex/flex-container.js')(),
    require(dir + '/utilities/flex/flex-container-row.js')(),
    require(dir + '/utilities/layout/centered-container.js')(),
    require(dir + '/utilities/layout/grid-gap.js')(),
    require(dir + '/utilities/lists/lists.js')(),
    require(dir + '/utilities/media/embed-container.js')(),
    require(dir + '/utilities/responsive-spacing/responsive-spacing.js')(),
    require(dir + '/utilities/tables/borderless.js')(),
    require(dir + '/utilities/typography/styles.js')(),
    // 3rd Party Plugins;
    require('tailwindcss-visuallyhidden')(),
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-debug-screens')
  ],

  // The variants section lets you control which variants are generated for each
  // core utility plugin.
  // https://tailwindcss.com/docs/configuration/#variants
  variants: {
    fontWeight: ['responsive', 'hover', 'focus'],
    animation: ['hover', 'focus'],
    extend: {}
  }
}