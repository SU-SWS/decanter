/**
 * Transition durations
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = function () {
  return {
    ...defaultTheme.transitionDuration,
    DEFAULT: '250ms',
  };
};
