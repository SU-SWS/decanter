/**
 * Responsive embed container to ensure that contents scale to the
 * width of parent element while retaining an aspect ratio of 16:9.
 */
module.exports = function () {
  return function ({ addComponents }) {
    const components = {
      ".embed-container": {
        paddingBottom: "56.25%",
        position: "relative",
        height: 0,
        overflow: "hidden",
        maxWidth: "100%",
        "embed, iframe, object ": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        },
      },
    };

    addComponents(components);
  };
};
