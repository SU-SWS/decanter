// we would like you to use debug
var kss = require('kss');

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
    kss(opts);
  };
}
