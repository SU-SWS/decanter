/**
 * Borderless table styles.
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      // For no borders at all.
      ".table-borderless": {
        "thead, tbody, tfoot": {
          "tr, th, td": {
            border: "0",
          },
        },
        "thead + tbody": {
          border: "0",
        },
      },
    };

    addComponents(components);
  };
};
