/**
 * Aspect ratio options for containers
 */
module.exports = function () {
  return {
    'none': 0,
    'square': [1, 1],
    DEFAULT: [16, 9], // Popular photo aspect ratio
    '4x3': [4, 3],
    '2x1': [2, 1], // Our usual crop for cards
  }
}
