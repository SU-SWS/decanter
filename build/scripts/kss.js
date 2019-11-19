var kss = require('kss');
var opts = {
  "source": "./core/src/scss/components",
  "destination": "./styleguide/components",
  "css": [
    "css/decanter.css"
  ],
  "js": [
    "js/decanter.js"
  ],
  "builder": "builder/twig",
  "extend-drupal8": true,
  "namespace": "decanter:core/src/templates",
  "markup": true,
  "nav-depth": 4,
  "title": "Decanter"
};
kss(opts);
