# Changelog

Version XXXX              20XX-XX-XX
---------------------------------------------
- Deprecated: su-aspect-ratio-1x1 & su-aspect-ratio-4x3 classes.

Version 6.0.0-alpha.1              2019-10-31
---------------------------------------------
- Removed deprecated code
- LOTS of wonderful new changes

Version 5.1.0                      2019-10-31
---------------------------------------------
- Updated codeclimate linting settings
- Updated nvmrc to version 11.14.0
- Removed line length lint requirement for sass
- Added tugboat builds
- Fixed bug with grunt browsersync and Webpack
- Added terms of use policy statement
- Changed all variables to have the prefix `$su-`
- Added new color function to support color maps with named colors
- New Component: Date Stacked
- New Component: Masthead
- New Variant: `su-card--link`
- New Variant: `su-card--minimal`
- New Variant: `su-global-footer--bright`
- New Variant: `su-global-footer--dark`
- New Variant: `su-hero--caption`
- New Variant: `su-link--download`
- New Variant: `su-link--internal`
- New Variant: `su-link--jump`
- New Variant: `su-link--video`
- New Mixin: `aspect-ratio()`
- New Mixin: `ie-only()`
- New Mixin: `link-glyph()`
- New Mixin: `link-icon()`
- New Function: `breakpoint-previous`
- New Typography styles: 	
  -- `.su-type-a`: Display Type A (used for H1 heading)
  -- `.su-type-b`: Display Type B (used for H2 heading)
  -- `.su-type-c`: Display Type C (used for H3 heading)
  -- `.su-type-d`: Display Type D (used for H4 heading)
  -- `.su-type-e`: Display Type E (used for H5 heading)
  -- `.su-type-f`: Display Type F (used for H6 heading)
- Change to @type-a and @type-b sizes at xs and sm breakpoints
- Template Update: `card.twig` has new regions and variables
- Template Update: `hero.twig` has new regions and variables
- Bugfix: Main Menu CSS
- Bugfix: Flex grid where grid classes now populate up breakpoints
- Bugfix: whitespace issues in `brand-bar.twig`, `global-footer.twig`, `link.twig`, `lockup.twig`, `logo.twig`, `main-nav.twig`, `site-search.twig`
- Deprecated: all variables that didn't start with `$su-`
- Deprecated: mixin `action-link`
- Deprecated: mixin `external-link`
- Deprecated: mixin `more-link`
- `grid-media-only` mixin now does ALL
- Modular scale now goes to 9!
- Added fort-awesome and fonts
- Updated npm package dependency versions
- Updated webpack config


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
