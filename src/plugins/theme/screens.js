/**
 * Breakpoints for responsive classes.
 */
module.exports = function () {
  return {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1500px',
    'portrait': {'raw': '(orientation: portrait)'},
    'print': {'raw': 'print'},
  }
}
