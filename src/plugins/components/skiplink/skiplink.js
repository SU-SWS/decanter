/**
 * Styles for skiplinks for keyboard users.
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      ".skiplink, .skiplinks": {
        position: "absolute",
        top: "-500px",
        left: "0.8em",
        minHeight: "1px",
        transition: "top 0.25s ease-in-out",
        padding: "0",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: theme("colors.black.DEFAULT"),
        color: theme("colors.white"),
        fontSize: "2rem",
        fontWeight: "400",
        textDecoration: "none",
        "&:hover, &:visited": {
          width: "1px",
          height: "1px",
          color: theme("colors.white"),
          overflow: "hidden",
          whiteSpace: "nowrap",
        },
        "&:active, &:focus": {
          position: "fixed",
          top: "0.8em",
          padding: "0.4em 0.8em",
          width: "auto",
          height: "auto",
          color: theme("colors.white"),
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: theme("colors.cool-grey"),
          borderRadius: "3px",
          zIndex: "10000",
        },
        "@media print": {
          display: "none",
        },
      },
    };

    addComponents(components);
  };
};
