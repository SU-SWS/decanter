/**
 * Webpack Dev Configuration File
 * @type {[type]}
 */

var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");

// Dev or not.
if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = "development";
}

const devMode = (process.env.NODE_ENV !== 'production');

// Module Exports From the base.
module.exports = require('../webpack.config.js');

// Dev settings.
module.exports.mode = process.env.NODE_ENV;
module.exports.devtool = 'source-map';
module.exports.watchOptions = {
  aggregateTimeout: 500,
};

// Optimizations
module.exports.optimization = {
  minimize: false,
  noEmitOnErrors: true,
  removeEmptyChunks: false,
};

// Dev server settings. HMR NOT WORKING. COME BACK LATER.
// -----------------------------------------------------------------------------
// module.exports.devServer = {
//   contentBase: path.resolve(__dirname, 'dist'),
//   watchContentBase: true,
//   port: 9090,
//   compress: true,
//   hot : true,
//   liveReload: true,
//   inline : true,
//   open: true,
//   overlay: true,
//   historyApiFallback : true,
//   progress: true,
//   writeToDisk: true,
//   index: 'index.html',
// };

// Entry points.
// -----------------------------------------------------------------------------
module.exports.entry = {
  'decanter': path.resolve(__dirname, "../src/decanter.js"),
  'test': path.resolve(__dirname, "src/index.js"),
};

// Output points.
// -----------------------------------------------------------------------------
module.exports.output = {
  filename: devMode ? '[name].js' : '[name].[hash].js',
  chunkFilename: devMode ? '[id].js' : '[id].[hash].js',
  path: path.resolve(__dirname, 'dist'),
  publicPath: "/",
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
    filename: 'index.html',
    template: path.resolve(__dirname, 'src', 'test.html'),
    hash: false,
    inject: true,
    compile: true,
    favicon: false,
    minify: false,
    cache: false,
    showErrors: true,
    alwaysWriteToDisk: true,
  })
);

// Add more watch options.
module.exports.plugins.push(
  new ExtraWatchWebpackPlugin({
    dirs: [
      path.resolve(__dirname, '../', 'src'),
      path.resolve(__dirname, 'src'),
    ]
  })
);

// Clean up all the things.
module.exports.plugins.push(new CleanWebpackPlugin());
