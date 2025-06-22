/**
 * Decanter Tailwind Configuration.
 */
import fontFamily from './src/plugins/theme/fontFamily';
import screens from './src/plugins/theme/screens';
import spacing from './src/plugins/theme/spacing';
import decanter from './src/plugins/theme/decanter';
import borderRadius from './src/plugins/theme/borderRadius';
import borderWidth from './src/plugins/theme/borderWidth';
import colors from './src/plugins/theme/colors';
import fontSize from './src/plugins/theme/fontSize';
import fontWeight from './src/plugins/theme/fontWeight';
import gap from './src/plugins/theme/gap';
import lineClamp from './src/plugins/theme/lineClamp';
import lineHeight from './src/plugins/theme/lineHeight';
import maxWidth from './src/plugins/theme/maxWidth';
import transitionDuration from './src/plugins/theme/transitionDuration';

// Base, components, and utilities imports
import base from './src/plugins/base/base';
import input from './src/plugins/components/form/input';
import buttons from './src/plugins/components/form/buttons';
import formElements from './src/plugins/components/form/form-elements';
import centeredContainer from './src/plugins/components/layout/centered-container';
import gridGap from './src/plugins/components/layout/grid-gap';
import stretchedLink from './src/plugins/components/link/stretched-link';
import lists from './src/plugins/components/lists/lists';
import logo from './src/plugins/components/logo/logo';
import embedContainer from './src/plugins/components/media/embed-container';
import responsiveSpacing from './src/plugins/components/responsive-spacing/responsive-spacing';
import skiplink from './src/plugins/components/skiplink/skiplink';
import borderless from './src/plugins/components/tables/borderless';
import modularTypography from './src/plugins/components/typography/modular-typography';
import fluidTypography from './src/plugins/components/typography/fluid-typography';
import typographyStyles from './src/plugins/components/typography/styles';
import wysiwyg from './src/plugins/components/typography/wysiwyg';
import textShadow from './src/plugins/components/shadow/text-shadow';
import accessibilityHidden from './src/plugins/utilities/accessibility/accessibility-hidden';
import backfaceVisibility from './src/plugins/utilities/backface-visibility/backface-visibility';
import link from './src/plugins/utilities/link/link';
import linkUnderline from './src/plugins/utilities/link/link-underline';
import linkFontweight from './src/plugins/utilities/link/link-fontweight';
import breakWords from './src/plugins/utilities/typography/break-words';
import writingMode from './src/plugins/utilities/typography/writing-mode';

const plugin = require('tailwindcss/plugin');

export const theme = {
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
};
export const plugins = [
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

  // 3rd party plugins
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/forms'),

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
  typographyStyles(),
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
];
