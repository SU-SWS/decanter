/**
 * Stanford's default color palette (updated with new Identity Guide release)
 */
module.exports = function () {
  return {
    transparent: 'transparent',
    current: 'currentColor',
    'cool-grey': '#53565A',
    black: {
      DEFAULT: '#2E2D29',
      '90': '#43423E',
      '80': '#585754',
      '70': '#6D6C69',
      '60': '#767674',
      '50': '#979694',
      '40': '#ABABA9',
      '30': '#C0C0BF',
      '20': '#D5D5D4',
      '10': '#EAEAEA',
      true: '#000000' // For when a higher contrast is needed
    },
    white: '#FFFFFF',
    'cardinal-red': {
      DEFAULT: '#8C1515',
      light: '#B83A4B',
      dark: '#820000'
    },
    'digital-red': {
      DEFAULT: '#B1040E', // Same as old Bright Red
      light: '#E50808', // Same as old Vivid Red
      dark: '#820000' // Same as Dark Cardinal Red
    },
    'digital-blue': { // Link colors
      DEFAULT: '#006CB8',
      light: '#6FC3FF',
      dark: '#00548F'
    },
    'digital-green': {
      DEFAULT: '#008566',
      light: '#1AECBA',
      dark: '#006F54'
    },
    'palo-alto': {
      DEFAULT: '#175E54',
      light: '#2D716F',
      dark: '#014240'
    },
    'palo-verde': {
      DEFAULT: '#279989',
      light: '#59B3A9',
      dark: '#017E7C'
    },
    olive: {
      DEFAULT: '#8F993E',
      light: '#A6B168',
      dark: '#7A863B'
    },
    bay: {
      DEFAULT: '#6fa287',
      light: '#8ab8a7',
      dark: '#417865',
    },
    sky: {
      DEFAULT: '#4298B5',
      light: '#67AFD2',
      dark: '#016895'
    },
    lagunita: {
      DEFAULT: '#007C92',
      light: '#009AB4',
      dark: '#006B81'
    },
    poppy: {
      DEFAULT: '#E98300',
      light: '#F9A44A',
      dark: '#D1660F'
    },
    spirited: {
      DEFAULT: '#E04F39',
      light: '#F4795B',
      dark: '#C74632'
    },
    illuminating: {
      DEFAULT: '#FEDD5C',
      light: '#FFE781',
      dark: '#FEC51D'
    },
    plum: {
      DEFAULT: '#620059',
      light: '#734675',
      dark: '#350D36'
    },
    brick: {
      DEFAULT: '#651C32',
      light: '#7F2D48',
      dark: '#42081B'
    },
    archway: {
      DEFAULT: '#5D4B3C',
      light: '#766253',
      dark: '#2F2424' // Same as old Chocolate
    },
    stone: {
      DEFAULT: '#7F7776',
      light: '#D4D1D1',
      dark: '#544948' // Same as old Stone
    },
    foggy: {
      DEFAULT: '#DAD7CB',
      light: '#F4F4F4', // Same as old Fog
      dark: '#B6B1A9' // Same as old Driftwood
    }
  }
}
