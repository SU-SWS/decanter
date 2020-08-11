/**
 * Webpack Dev Configuration File
 * @type {[type]}
 */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
  progress: true,
  writeToDisk: true
};

// Entry points.
// -----------------------------------------------------------------------------
module.exports.entry = {
  "test": path.resolve(__dirname, "src/index.js")
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
// Render html files.
module.exports.plugins.push(
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: path.resolve(__dirname, 'src', 'test.html')
  })
);

// Clean up all the things first.
module.exports.plugins.unshift(new CleanWebpackPlugin());
