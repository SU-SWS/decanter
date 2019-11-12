// we would like you to use debug
var sassdoc = require('sassdoc');

// Expose `plugin`.
module.exports = plugin;

function plugin(opts){
  opts.options = opts.options || {};

  /**
   * [description]
   * @param  {[type]}   files      [description]
   * @param  {[type]}   metalsmith [description]
   * @param  {Function} done       [description]
   * @return {[type]}              [description]
   */
  return function (files, metalsmith, done) {
    setImmediate(done);
    sassdoc(opts.src, opts);
  };
}
