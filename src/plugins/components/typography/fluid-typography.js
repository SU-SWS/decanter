/**
 * Fluid type that increase font size smoothly and linearly between a min and max value
 * over the viewport width range 360px (XS) to 1500px (2XL)
 * See concept on https://www.aleksandrhovhannisyan.com/blog/fluid-type-scale-with-css-clamp/
 *
 * See google sheet for a plot of the font sizes over the viewport width range 360px (XS) to 1500px (2XL):
 * https://docs.google.com/spreadsheets/d/1AN9eV_ECXc9MzTZUc10hiLjOHeOCDTutC5tMHOCPqgo/edit?usp=sharing
 *
 * Good for use in hero banners and horizontal cards where UI looks better with a smooth transition of font size
 * Here we offer the sizes from fluid-type-4 to fluid-type-10. Their min and max values at the XS and 2XL breakpoints
 * are the same as the corresponding modular typography classes (type-4 to type-10).
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      '.fluid-type-4': {
        fontSize: 'clamp(3.1rem, 2.19vw + 2.31rem, 5.6rem)',
      },
      '.fluid-type-5': {
        fontSize: 'clamp(3.6rem, 2.98vw + 2.53rem, 7rem)',
      },
      '.fluid-type-6': {
        fontSize: 'clamp(4.2rem, 4.04vw + 2.75rem, 8.8rem)',
      },
      '.fluid-type-7': {
        fontSize: 'clamp(4.8rem, 5.44vw + 2.84rem, 11rem)',
      },
      '.fluid-type-8': {
        fontSize: 'clamp(5.5rem, 7.19vw + 2.91rem, 13.7rem)',
      },
      '.fluid-type-9': {
        fontSize: 'clamp(6.3rem, 9.47vw + 2.89rem, 17.1rem)',
      },
      '.fluid-type-10': {
        fontSize: 'clamp(7.3rem, 12.37vw + 2.85rem, 21.4rem)',
      },
    };

    addComponents(components);
  };
};
