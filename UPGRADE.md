# Upgrade

Upgrade from version 7.0.0-beta.0 to 7.0.0-beta.1
-------------------------------------------
- Removed `su-link-underline`, `su-link-no-underline`, and `.su-link` nested variant states as they don't play nice with JIT mode.
- Replace this functionality by installing and using the tailwind children varients plugin within your project and using it with the no-underline utility.
  - https://github.com/benface/tailwindcss-children
  - https://tailwindcss.com/docs/text-decoration#no-underline

Upgrade from version 7.0.0-alpha to 7.0.0-beta
-------------------------------------------
- Renamed `su-input-base` to `su-input`
- We removed the base styles from form elements as they were too hard to override. You are now expected to add the following css classes to your form elements.
  - `su-button`
  - `su-radio`
  - `su-checkbox`
  - `su-fieldset`
  - `su-label`
  - `su-legend`
  - `su-textarea`
  - `su-select`

Upgrade from version 6.2.x to 7.0.0-alpha.x
-------------------------------------------
We are still working on this. We will have documentation on this change by
stable release.

Upgrade from version 5.2.0 to 6.0.0
-----------------------------------

The two major differences are in the removal of deprecated code and a change to the webpack build.
Make sure you get the new npm dependencies.
Card.twig schema has changed. Please look at the new variable name and options.

More instructions forthcoming...

Upgrade from version 4.1.0 to 5.0.0
-----------------------------------

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

### Assets

Image and other file assets are now managed through webpack builds and in order
to simplify your experience we have gone to great lengths to ensure that all
references to files (images/fonts/etc) are now either encoded directly into the
generated CSS or fetched from a remote CDN. If you had a build tool that was
moving the assets previously you can stop that.

Upgrade from version 3.1.0 to 4.0.0
-----------------------------------

- If you are on version 3.1.x skip over this version and head directly to 5.
- Actually, if you are still reading this, skip this version completely. It didn't work out for us and it won't work out for you.
- Mega Menu and Main Menu components have been dropped in favor of the navigation component
- Neat was dropped in favor of CSS grid native and new variables/mixins. Sorry, but there is no upgrade path from neat's syntax to this new version.
- Decanter grid css classes have been mostly been removed.
- We changed the variable names for all of the breakpoints and their values. Good luck with that :D

Upgrade from version 2.1.0 to 3.0.0
-----------------------------------

Version 3.0.0 is a new major version of Decanter. The primary difference between
version 2.1.0 and 3.0.0 is that Bourbon has been updated from version 4.2.7 to
the latest stable version, 5.0.0.

For details on other changes in this release, as well as details on all
Decanter releases, see [CHANGELOG.md](CHANGELOG.md).

### Migrating from v4 to v5 of Bourbon

See Bourbon's documentation overviewing what has changed between these two
versions at https://www.bourbon.io/docs/migrating-from-v4-to-v5/.

### What's been updated in Decanter

Only Bourbon mixins and functions being utilized in Decanter thus far needed to
be combed through and updated.

All deprecated code being used in Decanter from version 4.2.7 of Bourbon has
been updated to leverage and implement the new means of accomplishing the same
thing. These changes are:

1. Added new method (post-processor) of adding required vendor prefixes:
autoprefixer with postcss. Bourbon 5.0.0 has removed all prefixing features, as
it is no longer best practice for pre-processors like SCSS to handle prefixing.
A new Grunt task, `grunt compile` has been configured. This task compiles All
SCSS to CSS and adds any necessary prefixes to code.
2. The `$weight` and `$style` arguments in the `@font-face` mixin have been
removed. As a result, the mixin now includes one less argument. All fonts being
called with the mixin has been updated with the new implementation.
3. All of the font stack variables are now prefixed with `font-stack-`. The
fallback for all three primary fonts in Decanter leverage these variables. The
new variables has been added to all of the font calls.

### How to Upgrade Decanter in your project

1. Check out or pull down the latest version 3 code of Decanter
2. Run npm install to get the newest packages
3. Compile the SCSS
