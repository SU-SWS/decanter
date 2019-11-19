var sassdoc = require('sassdoc');
var opts = {
  "src": "./core/src/scss/",
  "dest": "./styleguide/docs/scss"
};
sassdoc(opts.src, opts);
