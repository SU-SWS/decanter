/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

/**
 * Decanter Tailwind Configuration.
 */
const path = require('path');
const plugin = require('tailwindcss/plugin');

const dir = path.resolve(__dirname, 'src/plugins');

module.exports = {
  // The theme section is where you define your color palette, font stacks,
  // type scale, border sizes, breakpoints — anything related to the visual
  // design of your site.
  // https://tailwindcss.com/docs/configuration/#theme
  theme: {
    // Overrides.
    fontFamily: require(`${dir}/theme/fontFamily.js`)(),
    screens: require(`${dir}/theme/screens.js`)(),
    spacing: require(`${dir}/theme/spacing.js`)(),
    // Decanter Custom.
    decanter: require(`${dir}/theme/decanter.js`)(),
    // Decanter's extension of Tailwind's default theme.
    extend: {
      borderRadius: require(`${dir}/theme/borderRadius.js`)(),
      borderWidth: require(`${dir}/theme/borderWidth.js`)(),
      colors: require(`${dir}/theme/colors.js`)(),
      fontSize: require(`${dir}/theme/fontSize.js`)(),
      fontWeight: require(`${dir}/theme/fontWeight.js`)(),
      gap: require(`${dir}/theme/gap.js`)(),
      lineClamp: require(`${dir}/theme/lineClamp.js`)(),
      lineHeight: require(`${dir}/theme/lineHeight.js`)(),
      maxWidth: require(`${dir}/theme/maxWidth.js`)(),
      transitionDuration: require(`${dir}/theme/transitionDuration.js`)(),
    },
  },

  // The plugins section allows you to register third-party plugins with
  // Tailwind that can be used to generate extra utilities, components, base
  // styles, or custom variants.
  // https://tailwindcss.com/docs/configuration/#plugins
  plugins: [
    // Add our own variants for convenience
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('hocus-visible', ['&:hover', '&:focus-visible']);
      addVariant('group-hocus', [
        ':merge(.group):focus &',
        ':merge(.group):hover &',
      ]);
      addVariant('group-hocus-visible', [
        ':merge(.group):focus-visible &',
        ':merge(.group):hover &',
      ]);
      addVariant('group-hocus-within', [
        ':merge(.group):focus-within &',
        ':merge(.group):hover &',
      ]);
      /**
       * Note: in TW v3.4.0, the *: variant is added for targeting direct children
       * https://github.com/tailwindlabs/tailwindcss/pull/12551
       * Leaving these in for now for backwards compatibility.
       */
      addVariant('children', '& > *');
      addVariant('children-hover', '& > *:hover');
      addVariant('children-focus', '& > *:focus');
      addVariant('children-focus-visible', '& > *:focus-visible');
    }),

    // 3rd Party Plugins;
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),

    // @tailwind base;
    require(`${dir}/base/base.js`)(),

    // @tailwind components;
    require(`${dir}/components/form/input.js`)(),
    require(`${dir}/components/form/buttons.js`)(),
    require(`${dir}/components/form/form-elements.js`)(),
    require(`${dir}/components/layout/centered-container.js`)(),
    require(`${dir}/components/layout/grid-gap.js`)(),
    require(`${dir}/components/link/stretched-link.js`)(),
    require(`${dir}/components/lists/lists.js`)(),
    require(`${dir}/components/logo/logo.js`)(),
    require(`${dir}/components/media/embed-container.js`)(),
    require(`${dir}/components/responsive-spacing/responsive-spacing.js`)(),
    require(`${dir}/components/skiplink/skiplink.js`)(),
    require(`${dir}/components/tables/borderless.js`)(),
    require(`${dir}/components/typography/modular-typography.js`)(),
    require(`${dir}/components/typography/fluid-typography.js`)(),
    require(`${dir}/components/typography/styles.js`)(),
    require(`${dir}/components/typography/wysiwyg.js`)(),
    require(`${dir}/components/shadow/text-shadow.js`)(),

    // @tailwind utilities;
    require(`${dir}/utilities/accessibility/accessibility-hidden.js`)(),
    require(`${dir}/utilities/backface-visibility/backface-visibility.js`)(),
    require(`${dir}/utilities/link/link.js`)(),
    require(`${dir}/utilities/link/link-underline.js`)(),
    require(`${dir}/utilities/link/link-fontweight.js`)(),
    require(`${dir}/utilities/typography/break-words.js`)(),
    require(`${dir}/utilities/typography/writing-mode.js`)(),
  ],
};
