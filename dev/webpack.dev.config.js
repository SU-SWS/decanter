/**
 * Webpack Dev Configuration File
 * @type {[type]}
 */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Module Exports From the base.
module.exports = require('../webpack.config.js');

// Dev server settings.
// -----------------------------------------------------------------------------
module.exports.devServer = {
  contentBase: path.resolve(__dirname),
  watchContentBase: true,
  compress: true,
  port: 9000,
  hot: true,
  progress: true
};

// Entry points.
// -----------------------------------------------------------------------------
module.exports.entry = {
  "test": path.resolve(__dirname, "src/test.js")
};

// Output points.
// -----------------------------------------------------------------------------
module.exports.output = {
  filename: "[name].js",
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/dist/',
};

// Rules.
// -----------------------------------------------------------------------------
module.exports.module.rules.push({
  test: /\.html$/,
  loader: 'html-loader'
});

// Plugins
// -----------------------------------------------------------------------------

module.exports.plugins.push(
  new HtmlWebpackPlugin({
    // hash: true,
    filename: '../index.html',
    // title: 'Decanter Preview Environment',
    // myPageHeader: 'Decanter Preview Environment',
    template: path.resolve(__dirname, 'src', 'test.html')
  })
);
