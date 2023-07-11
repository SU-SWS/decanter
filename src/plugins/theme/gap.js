/**
 * Responsive gutters for CSS and Flex Grids
 */
module.exports = function () {
  return {
    // Gap values honor all the options in plugins/theme/spacing plus the following
    // These are the Decanter gap values that are tied to their corresponding breakpoints
    // We also have a custom utility .grid-gap which is a combination of gap-xs lg:gap-lg xl:gap-xl 2xl:gap-2xl
    xs: '20px',
    lg: '36px',
    xl: '40px',
    '2xl': '48px',
  };
};
