/**
 * Responsive gutters for CSS and Flex Grids
 */
module.exports = function () {
  return {
    // The following are tied to our breakpoints in src/plugins/theme/screens.js
    xs: '20px',
    lg: '36px',
    xl: '40px',
    '2xl': '48px',
    // Additional commonly used gutters for convenience
    1: '1px',
    5: '5px',
    10: '10px',
    15: '15px',
    20: '20px', // Alias for gap-xs
    30: '30px',
    40: '40px', // Alias for gap-xl
    50: '50px',
    60: '60px',
    70: '70px',
    80: '80px',
    90: '90px',
    100: '100px',
  };
};
