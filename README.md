# [Decanter](https://github.com/SU-SWS/decanter)
##### Version: 7.0.0-dev

Changelog: [CHANGELOG.md](CHANGELOG.md)

[![Maintainability](https://api.codeclimate.com/v1/badges/5ad9555da4ffa2086204/maintainability)](https://codeclimate.com/github/SU-SWS/decanter/maintainability)

## Demo
To see a live demo of Decanter v7 please [view the v7 styleguide](https://decanter-v7.netlify.app/).


## Description
Decanter is a web design and development system for Stanford University.
It includes a responsive layout system and a browsable collection of design patterns
that can be used in any Stanford project.
For Decanter v7, instead of using SASS/SCSS with the BEM naming convention, we use [TailwindCSS](https://tailwindcss.com/) to generate utility classes with some customization needed for our Stanford design system.

## Assets
We have removed all assets from the repo in Decanter 7. Instead, we are using remote third party resources for our fonts and icons.

### Fonts
- For Source Sans Pro, Source Serif Pro, Roboto Slab, Roboto Mono - we include them using the `@import` method from [Google Fonts](https://fonts.google.com/).
- For the Stanford ligature font that we use for the logo, we link them from the [University Communications media CDN](https://www-media.stanford.edu/assets/fonts/stanford.woff).

### Icons
- We have removed FontAwesome (dependency and asset) completely from Decanter v7. For those who would like to continue using FontAwesome, please feel free to do so and include them using methods that are suitable for your own projects.
- We recommend using the [react-hero-icon](https://www.npmjs.com/package/react-hero-icon) package as [Hero Icons](https://heroicons.com/) are created by the TailwindCSS team and are open source. They can be included as SVG or JSX elements.


## Accessibility
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)

Evaluation Date: 2021-05-21
This project conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: [https://ucomm.stanford.edu/policies/accessibility-policy.html](https://ucomm.stanford.edu/policies/accessibility-policy.html).
