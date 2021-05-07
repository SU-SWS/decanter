/**
 * Sets the vertical rhythm, i.e., spacing between elements such as heading, paragraphs and lists
 * within unstructured WYSIWYG content.
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      ".wysiwyg": {
        "> *:first-child": {
          marginTop: "-0.25em", // Leading trim
        },
        "> *:last-child": {
          marginBottom: "0",
        },
        "p, ol, ul, dl": {
          color: theme("color.black.true"),
          marginBottom: "1.6em",
        },
        "li p": {
          marginBottom: "0.4em",
        },
        "h2, h3, h4, h5, h6": {
          marginBottom: "0.7em",
          clear: "both",
          "&:not(:first-child)": {
            marginTop: "1.6em",
          },
          a: {
            textDecoration: "none",
          },
          "a:hover, a:focus": {
            textDecoration: "underline",
          },
        },
        "h2 + h3, h3 + h4, h4 + h5, h5 + h6": {
          "&:not(:first-child)": {
            marginTop: "1em",
          },
        },
      },
    };

    addComponents(components);
  };
};
