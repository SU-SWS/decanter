# Changelog

Version 7.0.0-alpha.1              2021-02-24
---------------------------------------------
- Initial TailwindCSS build out.
- This version is still highly volitile and we do not recommend you upgrade
  existing version 6 projects.
- No warranty, documentation, or stability guarenteed. Use at your own risk.

Version 6.0.6                      2020-05-27
---------------------------------------------
- Fixes a typo in the grid-media-min comments (#641)
- Create CODE_OF_CONDUCT.md (#676)
- Removed conflicting background styles on checkboxes (#644)
- DECANTER-193: Accordion/FAQ and development environment. (#642)
- Add aria-expanded="false" to main nav parent links in the twig template (#681)
- D8CORE-1632: Add variables to quote template (#678)

Version 6.0.5                      2020-02-27
---------------------------------------------
- D8CORE-1329: removed the width 100% for xs breakpoint with buttons. (#631)

Version 6.0.4                      2020-02-21
---------------------------------------------
- Remove header html element and duplicate ids from local footer component (#630)
- D8CORE-1334: adjusting the padding to make the text appear centered in local footer login button (#627)
- Changing the search icon to red from the grey (#616)
- Uglify dist output in JS and CSS.

Version 6.0.3                      2020-02-06
---------------------------------------------
- Fixes 6.0.2 build fail. Shea is again, sorry.
- Commits the changes to the updates in package.json

Version 6.0.2                      2020-02-06
---------------------------------------------
- Change font size of `@big-paragraph` to 2.1rem and line height to 1.7; (#608)
- modify date-stacked to not use `@big-paragraph` because we don't want the line height.
- Make date stacked component switch to mobile font size at sm breakpoint instead of md.
- Change `@type-f` font size from 0.8em to 0.9em and remove uppercase style (#609)
- Brand bar wrapper change to div from section. (#613)
- Add cool grey color variables and update package.json (#614)
-- `$su-color-cool-grey-75`, `$su-color-cool-grey-50`, `$su-color-cool-grey-25`, `$su-color-cool-grey-15`

Version 6.0.1                      2020-01-13
---------------------------------------------
- Fixed tugboat builds for previews on PRs
- Restored the `.centered-container` class. Totally did not mean to remove it along with the other layouts.
- Fixed empty cell logic in lockup.twig
- Fixed failing webpack build. Shea is sorry about that one.

Version 6.0.0                      2019-12-20
---------------------------------------------
- Deprecated: su-aspect-ratio-1x1 & su-aspect-ratio-4x3 classes.
- Removed all of the KSS Styleguide build in favor of new website.
- Removed lando.default.yml as you should be using the npm servers.
- Removed Gruntfile.js and fully switched over to npm scripts.
- Removed webpack url-loader and added /core/dist/assets so that images are no longer embedded in the css
- Removed /core/dist/css/decanter-grid.css as it was empty anyhow.
- Removed /core/dist/css/decanter-no-markup.css as it was empty anyhow.
- Removed /core/dist/js/decanter-grid.js as it was empty except for webpack stuff.
- Removed /core/src/js/decanter-grid.js as we now use the decanter-grid.scss as our webpack entry point.
- Removed the scss file import from /core/src/js/decanter-no-markup.js so that it includes just javascript and no sass.
- Removed nearly all of the layouts found in /core/src/scss/layout as they added 4500 lines of css bloat that were not being used. The files and css have been moved to an examples folder.
- Removed all the deprecated code from Version 5.
- New Component: Secondary Navigation
- /core/src/js/decanter.js no imports both the SASS and Javascript files.
- New SASSDOCs code commenting conventions for all SASS files instead of abusing the KSS style.
- New JSDOCs code commenting conventions for all JavaScript files instead of just whatever.
- New Variant: Card Icon
- New Examples folder for adding examples of templates/recipies/documentation/whatever.
- New Dependency: Font Awesome because, well, it's awesome.

Version 5.2.0                      2019-12-20
---------------------------------------------
- This is the last Version 5 release with new features.
- Added CODE_OF_CONDUCT.md
- New Variant: `su-card--icon`
- New Component: Media
- Changed Aspect Ratio CSS class names. Deprecated old ones.
- Changed <figure> margin and set to `margin(0)`
- New Mixin: `@card`
- Updates to caption mixin
- Updates to the credits mixin
- Updates to the small-paragraphs mixin
- Buttons are now bolder (font style)
- Deprecated: %card-base placeholder
- Card.twig template has some pretty large changes to the schmea to allow for different media types.
- hero.twig template variable change from hero_cta_link to hero_link

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
