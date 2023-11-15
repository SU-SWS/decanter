# [Decanter](https://github.com/SU-SWS/decanter)
##### Version: 7

Changelog: [CHANGELOG.md](CHANGELOG.md)

## Demo
To see a live demo of Decanter v7 elements please [view the v7 demo site](https://decanter-v7.netlify.app/).
For more documentation on Version 7 please visit https://decanter.stanford.edu

## Description
Decanter is a web design and development system for Stanford University.
It includes a responsive layout system and a browsable collection of design patterns
that can be used in any Stanford project.
For Decanter v7, instead of using SASS/SCSS with the BEM naming convention, we use [Tailwind CSS](https://tailwindcss.com/) to generate utility classes with some customization needed for our Stanford design system.

## Assets
We have removed all assets from the repo in Decanter v7. Instead, we are using remote third party resources for our fonts and icons.

### Fonts
- We do not include any font assets with Decanter v7. If you want to use the Decanter fonts in your own projects, it is recommended that you use the font loading method that is optimized for your framework and only import the fonts that you need.
- We provided two font css files that you can import into your own project so you get the latest update from us. `font.css` includes all the fonts that are referenced in the Decanter design system (sans-serif, serif, slab, monospace, Stanford ligature font for the logo). `font-basic.css` includes only the essential sans-serif, serif and Stanford ligature fonts.
- For Source Sans 3, Source Serif 4, Roboto Slab, Roboto Mono - we include them using the `@import` method from [Google Fonts](https://fonts.google.com/).
- The Stanford ligature font that we use for the logo is linked from the [University Communications media CDN](https://www-media.stanford.edu/assets/fonts/stanford.woff).


### Icons
- We have removed FontAwesome (dependency and asset) completely from Decanter v7. For those who would like to continue using FontAwesome, please feel free to do so and include them using methods that are suitable for your own projects.
- We recommend using the [heroicons](https://github.com/tailwindlabs/heroicons) package as [Hero Icons](https://heroicons.com/) are created by the Tailwind CSS team and are open source. They can be included as SVG or JSX elements.


## Accessibility
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)

This project conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: [https://ucomm.stanford.edu/policies/accessibility-policy.html](https://ucomm.stanford.edu/policies/accessibility-policy.html).
