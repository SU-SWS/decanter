/**
 * Responsive spacing to provide a curated map of space.
 */
module.exports = function () {
  return function ({ addComponents }) {
    // The return object.
    const res = {};

    // Naming convention vars.
    const prefix = ".rs";
    const margin = "m";
    const padding = "p";
    const top = "t";
    const right = "r";
    const bottom = "b";
    const left = "l";
    const topbottom = "y";
    const leftright = "x";

    // Curated Map.
    const map = {
      neg2: {
        xs: "0.8rem",
        md: "0.9rem",
        "2xl": "1rem",
      },
      neg1: {
        xs: "1.1rem",
        md: "1.2rem",
        "2xl": "1.3rem",
      },
      0: {
        xs: "1.5rem",
        md: "1.8rem",
        "2xl": "1.9rem",
      },
      1: {
        xs: "2rem",
        md: "2.6rem",
        "2xl": "2.7rem",
      },
      2: {
        xs: "3rem",
        md: "3.6rem",
        "2xl": "3.8rem",
      },
      3: {
        xs: "3.2rem",
        md: "4.5rem",
        "2xl": "4.8rem",
      },
      4: {
        xs: "3.4rem",
        md: "5.8rem",
        "2xl": "6.1rem",
      },
      5: {
        xs: "3.8rem",
        md: "7.2rem",
        "2xl": "7.6rem",
      },
      6: {
        xs: "4.5rem",
        md: "9rem",
        "2xl": "9.5rem",
      },
      7: {
        xs: "5rem",
        md: "10.8rem",
        "2xl": "11.4rem",
      },
      8: {
        xs: "6rem",
        md: "12.6rem",
        "2xl": "13.3rem",
      },
      9: {
        xs: "7rem",
        md: "16.2rem",
        "2xl": "17.1rem",
      },
      10: {
        xs: "8rem",
        md: "21.6rem",
        "2xl": "22.8rem",
      },
    };

    // Loop through the key and create the classes.
    const keys = Object.keys(map);
    keys.forEach((key) => {
      // Margin Full
      res[`${prefix}-${margin}-${key}`] = {
        margin: map[key].xs,
        "@screen md": {
          margin: map[key].md,
        },
        "@screen 2xl": {
          margin: map[key]["2xl"],
        },
      };

      // Padding Full
      res[`${prefix}-${padding}-${key}`] = {
        padding: map[key].xs,
        "@screen md": {
          padding: map[key].md,
        },
        "@screen 2xl": {
          padding: map[key]["2xl"],
        },
      };

      // Margin Top.
      res[`${prefix}-${margin}${top}-${key}`] = {
        marginTop: map[key].xs,
        "@screen md": {
          marginTop: map[key].md,
        },
        "@screen 2xl": {
          marginTop: map[key]["2xl"],
        },
      };

      // Padding Top.
      res[`${prefix}-${padding}${top}-${key}`] = {
        paddingTop: map[key].xs,
        "@screen md": {
          paddingTop: map[key].md,
        },
        "@screen 2xl": {
          paddingTop: map[key]["2xl"],
        },
      };

      // Margin Right.
      res[`${prefix}-${margin}${right}-${key}`] = {
        marginRight: map[key].xs,
        "@screen md": {
          marginRight: map[key].md,
        },
        "@screen 2xl": {
          marginRight: map[key]["2xl"],
        },
      };

      // Padding Right.
      res[`${prefix}-${padding}${right}-${key}`] = {
        paddingRight: map[key].xs,
        "@screen md": {
          paddingRight: map[key].md,
        },
        "@screen 2xl": {
          paddingRight: map[key]["2xl"],
        },
      };

      // Margin Bottom.
      res[`${prefix}-${margin}${bottom}-${key}`] = {
        marginBottom: map[key].xs,
        "@screen md": {
          marginBottom: map[key].md,
        },
        "@screen 2xl": {
          marginBottom: map[key]["2xl"],
        },
      };

      // Padding Bottom.
      res[`${prefix}-${padding}${bottom}-${key}`] = {
        paddingBottom: map[key].xs,
        "@screen md": {
          paddingBottom: map[key].md,
        },
        "@screen 2xl": {
          paddingBottom: map[key]["2xl"],
        },
      };

      // Margin Left.
      res[`${prefix}-${margin}${left}-${key}`] = {
        marginLeft: map[key].xs,
        "@screen md": {
          marginLeft: map[key].md,
        },
        "@screen 2xl": {
          marginLeft: map[key]["2xl"],
        },
      };

      // Padding Left.
      res[`${prefix}-${padding}${left}-${key}`] = {
        paddingLeft: map[key].xs,
        "@screen md": {
          paddingLeft: map[key].md,
        },
        "@screen 2xl": {
          paddingLeft: map[key]["2xl"],
        },
      };

      // Margin Top + Bottom.
      res[`${prefix}-${margin}${topbottom}-${key}`] = {
        marginTop: map[key].xs,
        marginBottom: map[key].xs,
        "@screen md": {
          marginTop: map[key].md,
          marginBottom: map[key].md,
        },
        "@screen 2xl": {
          marginTop: map[key]["2xl"],
          marginBottom: map[key]["2xl"],
        },
      };

      // Padding Top + Bottom.
      res[`${prefix}-${padding}${topbottom}-${key}`] = {
        paddingTop: map[key].xs,
        paddingBottom: map[key].xs,
        "@screen md": {
          paddingTop: map[key].md,
          paddingBottom: map[key].md,
        },
        "@screen 2xl": {
          paddingTop: map[key]["2xl"],
          paddingBottom: map[key]["2xl"],
        },
      };

      // Margin Left + Right.
      res[`${prefix}-${margin}${leftright}-${key}`] = {
        marginLeft: map[key].xs,
        marginRight: map[key].xs,
        "@screen md": {
          marginLeft: map[key].md,
          marginRight: map[key].md,
        },
        "@screen 2xl": {
          marginLeft: map[key]["2xl"],
          marginRight: map[key]["2xl"],
        },
      };

      // Padding Left + Right.
      res[`${prefix}-${padding}${leftright}-${key}`] = {
        paddingLeft: map[key].xs,
        paddingRight: map[key].xs,
        "@screen md": {
          paddingLeft: map[key].md,
          paddingRight: map[key].md,
        },
        "@screen 2xl": {
          paddingLeft: map[key]["2xl"],
          paddingRight: map[key]["2xl"],
        },
      };
    });

    addComponents(res);
  };
};
