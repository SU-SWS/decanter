/**
 * Stanford's default color palette (updated with new Identity Guide release)
 */
module.exports = function () {
  return {
    transparent: 'transparent',
    current: 'currentColor',
    'cardinal-red': {
      default: '#8C1515',
      light: '#B83A4B',
      dark: '#820000'
    },
    'cool-grey': '#53565A',
    black: {
      default: '#2E2D29',
      '90': '#43423E',
      '80': '#585754',
      '70': '#6D6C69',
      '60': '#82817F',
      '50': '#979694',
      '40': '#ABABA9',
      '30': '#C0C0BF',
      '20': '#D5D5D4',
      '10': '#EAEAEA',
      true: '#000000' // For when a higher contrast is needed
    },
    white: '#FFFFFF',
    'digital-red': {
      default: '#B1040E', // Same as old Bright Red
      light: '#EC0513' // Same as old Vivid Red
    },
    'bright-blue': { // Link colors
      default: '#006CB8',
      light: '#6FC3FF',
      dark: '#00548f'
    },
    'palo-alto': {
      default: '#175E54',
      light: '#2D716F',
      dark: '#014240'
    },
    'palo-verde': {
      default: '#279989',
      light: '#59B3A9',
      dark: '#017E7C'
    },
    'olive': {
      default: '#8F993E',
      light: '#A6B168',
      dark: '#7A863B'
    },
    bay: {
      default: '#6FA287',
      light: '#8AB8A7',
      dark: '#568474'
    },
    sky: {
      default: '#4298B5',
      light: '#67AFD2',
      dark: '#016895'
    },
    lagunita: {
      default: '#007C92',
      light: '#009AB4',
      dark: '#006B81'
    },
    poppy: {
      default: '#E98300',
      light: '#F9A44A',
      dark: '#D1660F'
    },
    spirited: {
      default: '#E04F39',
      light: '#F4795B',
      dark: '#C74632'
    },
    illuminating: {
      default: '#FEDD5C',
      light: '#FFE781',
      dark: '#FEC51D'
    },
    plum: {
      default: '#620059',
      light: '#734675',
      dark: '#350D36'
    },
    brick: {
      default: '#651C32',
      light: '#7F2D48',
      dark: '#42081B'
    },
    archway: {
      default: '#5D4B3C',
      light: '#766253',
      dark: '#2F2424' // Same as old Chocolate
    },
    stone: {
      default: '#7F7776',
      light: '#D4D1D1',
      dark: '#544948' // Same as old Stone
    },
    fog: {
      default: '#7F7776',
      light: '#F4F4F4', // Same as old Fog
      dark: '#B6B1A9' // Same as old Driftwood
    }
  }
}
