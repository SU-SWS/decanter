


Developer Conventions

- Releases will be using semantic versioning
- Will be using npm
- Use css linting TBD on tests
- 7-1 SASS architecture organization
- Bourbon & Neat ~2.0
- No compilers in this repo
- SASS doc style documentation
- No global variables in function calls
- No globally overridden variables in partials
- Formatting conventions
  - https://sass-guidelin.es/#syntax--formatting
  - https://github.com/brigade/scss-lint
- Workflow
  - Master branch is master NO COMMITTING DIRECTLY
  - Releases go off master branch or a release branch
  - Following NPM semantic versioning
  - Everything is a pull request
  - Master should always be stable
  - Github issue queue to track issues and work
- .scss files not .sass

# Main file (master.scss)

This project uses the [7-1 architecture pattern](http://sass-guidelin.es/#architecture), sticking to [Sass Guidelines](http://sass-guidelin.es) writing conventions.

The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Main file](http://sass-guidelin.es/#main-file)
