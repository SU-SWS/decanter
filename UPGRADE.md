# Upgrade

Upgrade from version 4.1.0 to 5.0.0
-----------------------------------

- Webpack stuff
  (JB + SM)

### Grid Systems

There are now two grid systems available in this project, one of which is built
with Flexbox and the other of which is built with CSS Grid. The systems can be
used jointly or independently of each other, depending on your project's
needs.

While the CSS Grid system is entirely new (and comes with new functions and mixins),
the Flexbox system is an updated version of the previously used system. Therefore,
only the Flexbox system requires an upgrade from the pervious version. You are
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

- Other
  (Yvonne)
  File paths
  removed items
  added items (functions/mixins/components)

Upgrade from version 3.1.0 to 4.0.0
-----------------------------------


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
