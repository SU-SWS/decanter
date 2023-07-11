/**
 * Make any HTML element clickable by stretching a nested link
 * For example, wrap the <a> tag around the headline of a card
 * Add this stretched-link class to the <a> tag to make the whole card clickable
 * Based on Bootstrap's idea https://getbootstrap.com/docs/4.3/utilities/stretched-link/
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      '.stretched-link': {
        '&::after': {
          display: 'block',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '1',
          pointerEvents: 'auto',
          content: '""',
          backgroundColor: 'transparent',
        },
      },
    };

    addComponents(components);
  };
};
