/**
 * Font weights
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = function () {
  return {
    ...defaultTheme.fontWeight,
    regular: '400',
  };
};
