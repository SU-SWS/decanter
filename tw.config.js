/**
 * Decanter Tailwind Configuration Factory
 *
 * This module contains the shared configuration logic that is used by both
 * the CommonJS (tailwind.config.js) and ES Module (tailwind.config.mjs) exports.
 *
 * All plugin imports and configuration are centralized here to avoid duplication
 * and make maintenance easier.
 */

/**
 * Creates the Decanter Tailwind CSS configuration
 * @param {Function} plugin - The Tailwind CSS plugin function
 * @param {Function} requireFn - The require function to use for importing modules
 * @returns {Object} Complete Tailwind CSS configuration object
 */
function createDecanterConfig(plugin, requireFn) {
  // Theme imports
  const fontFamily = requireFn('./src/plugins/theme/fontFamily.js');
  const screens = requireFn('./src/plugins/theme/screens.js');
  const spacing = requireFn('./src/plugins/theme/spacing.js');
  const decanter = requireFn('./src/plugins/theme/decanter.js');
  const borderRadius = requireFn('./src/plugins/theme/borderRadius.js');
  const borderWidth = requireFn('./src/plugins/theme/borderWidth.js');
  const colors = requireFn('./src/plugins/theme/colors.js');
  const fontSize = requireFn('./src/plugins/theme/fontSize.js');
  const fontWeight = requireFn('./src/plugins/theme/fontWeight.js');
  const gap = requireFn('./src/plugins/theme/gap.js');
  const lineClamp = requireFn('./src/plugins/theme/lineClamp.js');
  const lineHeight = requireFn('./src/plugins/theme/lineHeight.js');
  const maxWidth = requireFn('./src/plugins/theme/maxWidth.js');
  const transitionDuration = requireFn('./src/plugins/theme/transitionDuration.js');

  // Base imports
  const base = requireFn('./src/plugins/base/base.js');

  // Component imports
  const input = requireFn('./src/plugins/components/form/input.js');
  const buttons = requireFn('./src/plugins/components/form/buttons.js');
  const formElements = requireFn('./src/plugins/components/form/form-elements.js');
  const centeredContainer = requireFn('./src/plugins/components/layout/centered-container.js');
  const gridGap = requireFn('./src/plugins/components/layout/grid-gap.js');
  const stretchedLink = requireFn('./src/plugins/components/link/stretched-link.js');
  const lists = requireFn('./src/plugins/components/lists/lists.js');
  const logo = requireFn('./src/plugins/components/logo/logo.js');
  const embedContainer = requireFn('./src/plugins/components/media/embed-container.js');
  const responsiveSpacing = requireFn('./src/plugins/components/responsive-spacing/responsive-spacing.js');
  const skiplink = requireFn('./src/plugins/components/skiplink/skiplink.js');
  const borderless = requireFn('./src/plugins/components/tables/borderless.js');
  const modularTypography = requireFn('./src/plugins/components/typography/modular-typography.js');
  const fluidTypography = requireFn('./src/plugins/components/typography/fluid-typography.js');
  const styles = requireFn('./src/plugins/components/typography/styles.js');
  const wysiwyg = requireFn('./src/plugins/components/typography/wysiwyg.js');
  const textShadow = requireFn('./src/plugins/components/shadow/text-shadow.js');

  // Utility imports
  const accessibilityHidden = requireFn('./src/plugins/utilities/accessibility/accessibility-hidden.js');
  const backfaceVisibility = requireFn('./src/plugins/utilities/backface-visibility/backface-visibility.js');
  const link = requireFn('./src/plugins/utilities/link/link.js');
  const linkUnderline = requireFn('./src/plugins/utilities/link/link-underline.js');
  const linkFontweight = requireFn('./src/plugins/utilities/link/link-fontweight.js');
  const breakWords = requireFn('./src/plugins/utilities/typography/break-words.js');
  const writingMode = requireFn('./src/plugins/utilities/typography/writing-mode.js');

  return {
    // The theme section is where you define your color palette, font stacks,
    // type scale, border sizes, breakpoints — anything related to the visual
    // design of your site.
    // https://tailwindcss.com/docs/configuration/#theme
    theme: {
      // Overrides.
      fontFamily: fontFamily(),
      screens: screens(),
      spacing: spacing(),
      // Decanter Custom.
      decanter: decanter(),
      // Decanter's extension of Tailwind's default theme.
      extend: {
        borderRadius: borderRadius(),
        borderWidth: borderWidth(),
        colors: colors(),
        fontSize: fontSize(),
        fontWeight: fontWeight(),
        gap: gap(),
        lineClamp: lineClamp(),
        lineHeight: lineHeight(),
        maxWidth: maxWidth(),
        transitionDuration: transitionDuration(),
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
      requireFn('@tailwindcss/aspect-ratio'),
      requireFn('@tailwindcss/forms'),

      // @tailwind base;
      base(),

      // @tailwind components;
      input(),
      buttons(),
      formElements(),
      centeredContainer(),
      gridGap(),
      stretchedLink(),
      lists(),
      logo(),
      embedContainer(),
      responsiveSpacing(),
      skiplink(),
      borderless(),
      modularTypography(),
      fluidTypography(),
      styles(),
      wysiwyg(),
      textShadow(),

      // @tailwind utilities;
      accessibilityHidden(),
      backfaceVisibility(),
      link(),
      linkUnderline(),
      linkFontweight(),
      breakWords(),
      writingMode(),
    ],
  };
}

module.exports = { createDecanterConfig };
