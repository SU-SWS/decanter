/**
 * Breakpoints for responsive classes.
 */
module.exports = function () {
  return {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1500px',
    // 'print': {'raw': 'print'}, // disable print for now since it generate a lot of screen classes that are not useful for print
  };
};
