let path = require('path')

/**
 * Aspect ratio options for containers
 */
module.exports = function () {
  let dir = path.resolve(__dirname, '../../', 'assets/img')

  return {
    'icon-search': "url('" + dir + "/icon-search.svg')",
  }
}
