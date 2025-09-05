# Upgrade

Upgrade from version 7.x to 8.0.0-alpha.x
-------------------------------------------

.break-words => .wrap-anywhere
.a11y-hidden, .accessibility-hidden => aria-hidden:hidden

### Grid Systems

There are now two grid systems available in this project, one of which is built
with Flexbox and the other of which is built with CSS Grid. The systems can be
used jointly or independently of each other, depending on your project's
needs.

While the CSS Grid system is entirely new (and comes with new functions and mixins),
the Flexbox system is an updated version of the previously used system. Therefore,
only the Flexbox system requires an upgrade from the previous version. You are
encouraged to explore the CSS Grid system for enhancement and usability in your
project.

#### Flexbox Grid System

While the available Flexbox grid system still remains a class-based system, the
class names have changed and are processed dynamically, using a combination of new
functions and mixins. These can be found `/core/src/scss/utilities/functions/flex/`
and `/core/src/scss/utilities/mixins/flex`, respectively.

Example: `grid--6-of-12` is now `flex-6-of-12`

##### Responsive Classes

The grid includes five tiers of predefined classes for building complex responsive
layouts. You can customize the size of your columns (or items inside of your columns)
on small, medium, large, extra large, or extra extra large devices.

For grids that are the same from the smallest of devices to the largest, use the
`.flex-*-of-*`and `.flex-*-*-of-*`classes. Specify a numbered class when you need
a particularly sized column; otherwise, feel free to stick to `.flex-*-of-*`.

Example: if you want to produce a layout where a column spans two of the available
twelve columns at every breakpoint, you would do the following: `class="flex-2-of-12"`

If you wanted to produce a layout that would span two of the available
twelve columns, you would do the following: `class="flex-lg-2-of-12 flex-xl-2-of-12 flex-2xl-2-of-12"`

##### Pushing Columns

You can now push grid columns with responsive classes. The classes are sized to
match columns.

Example: `.flex-push-xs-5`

### File Paths

You can now find all the files you need for your project inside `decanter/core`. `/core/src/` contains all the raw
source files that one can read/edit, including `.scss`, `.js`, `.twig` templates and image files in their respective
folders. `/core/dist/` contains the distribution version of the .css and .js files used in production sites.

Font files have been removed from Decanter and are now being downloaded from the Google CDN with the except of a few
that are being downloaded from a Stanford server.

### Fonts
The font Crimson Text is no longer part of Decanter and has been removed. Two new fonts have been added.

- Kalam (handwriting display font)
- Noto Sans Devanagari Subset (for Sanskrit font support)

### Naming Conventions

Decanter now uses the [BEM (Block Element Modifier) naming convention](http://getbem.com/naming/). All decanter
components are now namespaced with the `su-` prefix in their class names.

Example: `.su-button`, `.su-main-nav`

Elements within a component have class names that start with the component name plus 2 underscores plus
the element name.

Example: `.su-main-nav__toggle`

Modifier classes start with the component or element name that they are modifying plus 2 hyphens plus the modifier name.

Example: `.su-main-nav--light`, `.su-main-nav__toggle--center`

### Components (Restructured with New Items)

Version 5.0.0 has dropped the Atomic Design structure to allow for more flexible component creation. All component
.scss files (including variants) can now be found under `/core/src/scss/components` within individual
component folders.

### Utilities

#### Variables (Moved with New Items)

The `/variables` directory has been moved inside the `/utilities` directory.

#### Layouts (Moved with New Items)

Previously inside the `/mixins` directory, `/layouts` now has path `/core/src/scss/layout` with .scss files for
Flexbox Grid and CSS Grid layouts inside `/layout/flex` and `/layout/grid` respectively. Each grid system now has many
different one to four column layouts.

#### Mixins (Restructured with New Items)

Many new mixins have been added or changed. Below are a few notable ones.

- Updated media query mixins that work with our new grid system can be found inside the `/breakpoint` directory.
- Modular scale mixins for rendering modular spacing (uses the Bourbon modular scale with a factor of 1.25 between steps) and typography (uses a curated scale) have been introduced.
- Many typography mixins have been added, including `@type-a` to `@type-f` which could be used to
generate styles for headers and other text elements.

#### Functions (New Items)

Many helper functions have been added to the directory.

#### Placeholders (New)

The new `/placeholders` directory inside the `/utilities` directory contains .scss files with placeholder classes that
developers can extend in their own projects. Currently, this directory holds mostly base styles for our components,
e.g., `%button-base`, `%card-base`.

### Build Tools

Grunt has been mostly deprecated in 5.0.0. Most of the build steps previously performed by grunt
are now performed by npm scripts, several of which invoke webpack. You will want to migrate any
integrations you have with grunt over to npm / webpack.

[Webpack](https://webpack.js.org/concepts) is now the tool that processes the source SCSS and JS
and generates the distribution CSS and JS files.
[npm scripts](https://docs.npmjs.com/cli/run-script.html) are used to run webpack
and other tools, e.g. `kss`, `eslint`. **Stop using grunt.**

The following npm scripts are available:
- `npm run build` generates the dev (non-minified) .css and .js for decanter and the styleguide.
- `npm run dist` generates the production (minified) .css and .js for decanter and the styleguide.
- `npm run watch` regenerates the dev (non-minified) .css and .js for decanter and the styleguide whenever the source files change.
- `npm run styleguide` builds the styleguide.
- `npm run eslint` and `npm run sasslint` lint the code.
- `npm run start` opens a tab in your default browser and loads the styleguide on port `9000`.
- `npm run dev` is a shortcut that runs the `build`, `styleguide`, `watch` and `start` scripts.
