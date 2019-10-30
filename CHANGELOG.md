# Changelog

Version 6.0.0-alpha.1              2019-10-31
---------------------------------------------
- Removed deprecated code
- LOTS of wonderful new changes

Version 5.0.1                      2019-05-22
---------------------------------------------
- Fix CSS grid gaps not displaying on Edge issue and other minor grid related issue
- Fix main nav color variants css selector specificity issues
- Add drop shadow to md breakpoint mobile menu
- Main Navigation components now fires openNav, closeNav, openSubnav, closeSubnav events
- "More info" link icon now inherits color from the link itself
- Adjust linter settings
- Add favicon to style guide
- Update README

Version 5.0.0                      2019-03-27
---------------------------------------------
- New Webpack Build System
- Two revamped and improved Grid Systems with 6 breakpoints
    - Flexbox based, class generated grid system
    - CSS Grid based mixin supported grid system
- A modular scale system that includes both modular spacing and modular typography mixins
- LOTS of new components and variants, including Stanford branded elements such as 20 versions of logo lockups, global footer, brand bars - check them out!
- LOTS of new SASS/SCSS mixins, functions and placeholders to help you in your project
- LOTS of usable Twig templates for both components and layouts
- Revamped and refreshed the KSS theme with a new look and feel; plus new navigation
- Moved source code from core/ to src/ to better align with Webpack projects
- Code Climate and Linter file updates
- Removed the generated style guide from Git
- Moved .lando.yml to .lando.default.yml
- Deprecated and replaced a number of Grunt commands with Webpack and NPM scripts
- Removed the font files and put them on a CDN
- Dropped the Atomic design structure for components to allow for less strict component creation

Version 4.1.0                      2018-08-16
---------------------------------------------
- Added class-based grid system
- Added new Flexbox grid mixins

Version 4.0.0                      2018-08-09
---------------------------------------------
- Added new CSS Grid mixins
- Added new example site layout templates levering CSS Grid mixins
- Eliminated Neat
- (Temporarily) eliminated class-based system with Neat (to be re-introduced using Flexbox in future point version)
- Added LiveReload to Grunt workflow
- Other tweaks and bug fixes

Version 3.1.0                      2018-08-09
---------------------------------------------
- Added all available Source Sans Pro font styles
- Added sensible img tag defaults
- Fix to require kss npm package to be installed globally
- Other small tweaks and bug fixes

Version 3.0.0                      2018-05-16
---------------------------------------------
- Updated to latest stable release of Bourbon (5.0.0)
- Added autoprefixer and postcss for better vendor prefix support

Version 2.1.0                      2018-05-10
---------------------------------------------
- KSS Node generating style guide and pattern library
- More components, variables, and mixins

Version 2.0.0                      2017-12-18
---------------------------------------------
- Base HTML element styles
- Base component styles
- Grid system
- Revised load order of variables, vendors, mixins, and components
- Removed vendor code from repository
- Introduced Atomic Design naming conventions
