# Upgrade

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
