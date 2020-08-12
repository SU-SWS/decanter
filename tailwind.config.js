/**
 * Tailwind Configuration.
 */

var path = require('path');
var dir = path.resolve(__dirname, 'src/plugins');
const plugin = require('tailwindcss/plugin');

module.exports = {

  // Our own prefix.
  prefix: 'su-',

  // The theme section is where you define your color palette, font stacks,
  // type scale, border sizes, breakpoints — anything related to the visual
  // design of your site.
  // https://tailwindcss.com/docs/configuration/#theme
  theme: {
    // Overrides.
    aspectRatio:      require(dir + '/theme/aspectRatio.js')(),
    borderRadius:     require(dir + '/theme/borderRadius.js')(),
    borderWidth:      require(dir + '/theme/borderWidth.js')(),
    boxShadow:        require(dir + '/theme/boxShadow.js')(),
    colors:           require(dir + '/theme/colors.js')(),
    screens:          require(dir + '/theme/screens.js')(),
    fontFamily:       require(dir + '/theme/fontFamily.js')(),
    fontWeight:       require(dir + '/theme/fontWeight.js')(),
    lineHeight:       require(dir + '/theme/lineHeight.js')(),
    spacing:          require(dir + '/theme/spacing.js')(),
    transitionDuration: require(dir + '/theme/transitionDuration.js')(),
    // Decanter Custom.
    decanter: require(dir + '/theme/decanter.js')(),

    // Extensions of tailwind core config.
    extend: {},
  },

  // The corePlugins section lets you completely disable classes that Tailwind
  // would normally generate by default if you don't need them for your project.
  // https://tailwindcss.com/docs/configuration/#core-plugins
  corePlugins: {
    // preflight: false,
    fontSmoothing: false,
    placeholderOpacity: false,
    placeholderColor: false,
    divideOpacity: false,
    borderCollapse: false,
    borderOpacity: false,
    skew: false,
  },

  // The plugins section allows you to register third-party plugins with
  // Tailwind that can be used to generate extra utilities, components, base
  // styles, or custom variants.
  // https://tailwindcss.com/docs/configuration/#plugins
  plugins: [
    // @tailwind base;
    require(dir + '/base/base.js')(),
    // @tailwind components;
    require(dir + '/components/alert/alert.js')(),
    require(dir + '/components/button/button.js')(),
    // @tailwind utilities;
    require(dir + '/utilities/accessibility/accessibily-hidden.js')(),
    require(dir + '/utilities/accessibility/sr-only-text.js')(),
    // 3rd Party Plugins;
    require('tailwindcss-visuallyhidden')(),
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-debug-screens'),
  ],

  // The variants section lets you control which variants are generated for each
  // core utility plugin.
  // https://tailwindcss.com/docs/configuration/#variants
  variants: {
    fontWeight: ['responsive'],
  },

}
