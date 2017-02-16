# Base

Base rules consist of styling for HTML elements only, such as used in a CSS
reset or Normalize.css. Base rules should never include class selectors.
To avoid ‘undoing’ styles in components, base styles should reflect the
simplest possible appearance of each element. For example, the simplest usage
of the ul element may be completely unstyled, removing list markers and
indents and relying on a component class for other applications.

The `base/` folder holds what we might call the boilerplate code for the project.
In there, you might find some typographic rules, and probably a stylesheet
(that I’m used to calling `base.scss`), defining some standard styles for
commonly used HTML elements.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Base folder](http://sass-guidelin.es/#base-folder)
