/**
 * Tailwind Configuration.
 */

var path = require('path');
var dir = path.resolve(__dirname, 'src/plugins');

module.exports = {
  prefix: 'su-',
  purge: [],
  theme: {
    extend: {},
  },
  plugins: [
    require(dir + '/base/base.js')(),
    require(dir + '/components/alert/alert.js')(),
    require(dir + '/utilities/accessibility/accessibily-hidden.js')(),
    require(dir + '/variants/disabled.js')(),
    require('tailwindcss-visuallyhidden')()
  ],
}
