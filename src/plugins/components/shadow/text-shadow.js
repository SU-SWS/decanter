/**
 * Text shadow styles
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      ".text-shadow": {
        textShadow: "rgba(0, 0, 0, 40%) 0 0 6px, rgba(0, 0, 0, 60%) 0 0 2px",
      },
      ".text-shadow-md": {
        textShadow: "rgba(0, 0, 0, 40%) 0 0 8px, rgba(0, 0, 0, 60%) 0 0 3px",
      },
      ".text-shadow-lg": {
        textShadow: "rgba(0, 0, 0, 30%) 0 0 12px",
      },
    };

    addComponents(components);
  };
};
