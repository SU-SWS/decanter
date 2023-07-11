/**
 * Stanford's official color palette from the Identity Guide
 * https://identity.stanford.edu/design-elements/color/
 */
module.exports = function () {
  return {
    // Primary Colors
    // https://identity.stanford.edu/design-elements/color/primary-colors/
    'cardinal-red': {
      DEFAULT: '#8C1515', // Stanford main brand color
      light: '#B83A4B',
      dark: '#820000',
      xdark: '#7A0000', // Passed contrast test with digital-red-xlight as text
      xxdark: '#541107', // Used for hover/focus color for xdark
    },
    // These replace the Tailwind default Black spectrum
    black: {
      DEFAULT: '#2E2D29', // Default text color on light background
      90: '#43423E',
      80: '#585754',
      70: '#6D6C69',
      60: '#767674',
      50: '#979694',
      40: '#ABABA9',
      30: '#C0C0BF',
      20: '#D5D5D4',
      10: '#EAEAEA',
      true: '#000000', // For when a higher contrast is needed
    },
    'cool-grey': '#53565A',
    // Web Interactive Colors
    // https://identity.stanford.edu/design-elements/color/web/
    'digital-red': {
      DEFAULT: '#B1040E', // Same as old Bright Red in previous color palette
      light: '#E50808', // Same as old Vivid Red in previous color palette
      xlight: '#F83535', // Passed contrast test as regular text on black background
      dark: '#820000', // Same as Dark Cardinal Red in previous color palette
    },
    'digital-blue': {
      // Used for links in some of the Stanford sites
      DEFAULT: '#006CB8',
      light: '#85CCFF',
      dark: '#00548F',
      vivid: '#0597FF',
    },
    'digital-green': {
      DEFAULT: '#008566',
      light: '#1AECBA',
      dark: '#006F54',
      bright: '#009b76',
    },
    // Accent Colors
    // https://identity.stanford.edu/design-elements/color/accent-colors/
    'palo-alto': {
      DEFAULT: '#175E54',
      light: '#2D716F',
      dark: '#014240',
    },
    'palo-verde': {
      DEFAULT: '#279989',
      light: '#59B3A9',
      dark: '#017E7C',
    },
    olive: {
      DEFAULT: '#8F993E',
      light: '#A6B168',
      dark: '#7A863B',
    },
    bay: {
      DEFAULT: '#6fa287',
      light: '#8ab8a7',
      dark: '#417865',
    },
    // This replaces the TW Sky
    sky: {
      DEFAULT: '#4298B5',
      light: '#67AFD2',
      dark: '#016895',
    },
    lagunita: {
      DEFAULT: '#007C92',
      light: '#009AB4',
      dark: '#006B81',
      // Used for some form elements
      20: '#CCEBF0',
      40: '#8DD8E4',
    },
    poppy: {
      DEFAULT: '#E98300',
      light: '#F9A44A',
      dark: '#D1660F',
    },
    spirited: {
      DEFAULT: '#E04F39',
      light: '#F4795B',
      dark: '#C74632',
    },
    illuminating: {
      DEFAULT: '#FEDD5C',
      light: '#FFE781',
      dark: '#FEC51D',
    },
    plum: {
      DEFAULT: '#620059',
      light: '#734675',
      dark: '#350D36',
    },
    brick: {
      DEFAULT: '#651C32',
      light: '#7F2D48',
      dark: '#42081B',
    },
    archway: {
      DEFAULT: '#5D4B3C',
      light: '#766253',
      dark: '#2F2424', // Same as old Chocolate in previous color palette
    },
    // This replaces the TW Stone
    stone: {
      DEFAULT: '#7F7776',
      light: '#D4D1D1',
      dark: '#544948', // Same as old Stone in previous color palette
    },
    foggy: {
      DEFAULT: '#DAD7CB',
      light: '#F4F4F4', // Same as old Fog in previous color palette
      dark: '#B6B1A9', // Same as old Driftwood in previous color palette
    },
    // "fog" is same color as foggy above; in Decanter v6 we named this color foggy to avoid a class name conflict
    // This is the same as the color "Fog" in the Identity Guide
    fog: {
      DEFAULT: '#DAD7CB',
      light: '#F4F4F4',
      dark: '#B6B1A9',
    },
    // Commonly used social media brand colors
    facebook: '#4267B2',
    twitter: '#1DA1F2',
    instagram: '#E1306C',
    linkedin: '#0077B5',
    youtube: '#FF0000',
  };
};
