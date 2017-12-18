# Changelog

## Unreleased ( target: master 1.0.0-alpha3 )
  - delete before comitting
  
### Added
  - `package.json` only includes the `/core` folder when the project 
  is installed via `npm install`
  - `bourbon`, `bourbon-neat`, `neat-omega`, `font-awesome` and 
  `normalize.css` are included via `bundledDependencies` in `package.json`
  - `.sass-lint.yaml` now tracks recommended settings from [sass guidelines](https://sass-guidelin.es)
  - added `DOCUMENTATION.md` to `docs` folder to track current state of scss documentation
  - added `dependencies.md` to `docs` folder with links to their project or NPM sites
  
### Fixed
  - `h3` in `base/_typography.scss` now correctly picks up `h3` 
  heading styles from the map instead of `h2` 

### Changed
  - the `material-shadow` mixin passes through to the `material-shadow` 
  function instead of duplicating the code
  - the `card` mixin now uses the `material-shadow` function instead of 
  the mixin
  - *Breaking:* reversed `$hocus` and `$pocus` variables in `variables/_typography.scss` to
  better conform to their expected semantics. 
  `$hocus` is now hover + focus, and `$pocus` is a little more (hover + focus + active).
  - *Potential Breaking* change: `$decanter-default-settings` 
  renamed to `$decanter-settings--default` to conform to the rest of our
  variables `$variable`, `$variable--default` convention
  - Moved `bourbon`, `neat`, `neat-omega` from `decanter-variables.scss` 
  to `decanter-utilities.scss`
  - Flexbox overrides have been added to `flex-items-per-row.scss` when 
  `$center-grid` is `true`
  - cleaned up `sassdoc` documentation
  - cleaned up rollup files to be more consistent
  - spacing and linting pass on many mixins and maps
  - renamed `core/decanter.scss` to `core/_decanter.scss`
  - upped dependency version numbers for `bourbon` and `bourbon-neat` and `normalize`
  - shuffled sassdoc groups to be more useful
  
### Removed
  - delete before comitting
