/**
 * Webpack Configuration File
 * @type {[type]}
 */

// Paths.
const path = require('path');
const assetDir  = './src/';
const outputDir = 'dist';
const styleGuide = path.resolve( __dirname, './styleguide/');
const npmPackage = './node_modules/';

// Compile mode.
const devMode = process.env.NODE_ENV !== 'production';

// Requires / Dependencies.
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const CopyPlugin = require('webpack-copy-on-build-plugin');
const FilewatcherPlugin = require("filewatcher-webpack-plugin");

// For MiniCssExtractPlugin.
// Loops through the module variable that is nested looking for a name.
function recursiveIssuer(module) {
  if (module.issuer) {
    return recursiveIssuer(module.issuer);
  }
  else if (module.name) {
    return module.name;
  }
  else {
    return false;
  }
}

// Module Exports.
module.exports = {
  // Define the entry points for which webpack builds a dependency graph.
  entry: {
    "decanter": assetDir + "js/decanter.js",
    "decanter-grid": assetDir + "js/decanter-grid.js",
    "decanter-no-markup": assetDir + "js/decanter-no-markup.js"
  },
  // Where should I output the assets.
  output: {
    filename: devMode ? "[name].js" : "[name].[hash].js",
    path: path.resolve( __dirname, outputDir + '/js' )
  },
  // Allows for map files.
  devtool: 'source-map',
  // Optimizations that are triggered by production mode.
  optimization: {
    // Uglify the Javascript & and CSS.
    minimizer: [
      new UglifyJsPlugin( {
        cache: true,
        parallel: true,
        sourceMap: true
      } ),
      new OptimizeCSSAssetsPlugin( {} )
    ],
    // Splitchunks plugin configuration.
    // https://webpack.js.org/plugins/split-chunks-plugin/.
    splitChunks: {
      cacheGroups: {
        'decanter': {
          name: 'decanter',
          test: ( module, chunks, entry = 'decanter' ) => module.constructor.name === 'CssModule' && recursiveIssuer( module ) === entry,
          chunks: 'all',
          enforce: true
        },
        'decanter-no-markup': {
          name: 'decanter-no-markup',
          test: ( module, chunks, entry = 'decanter-no-markup' ) => module.constructor.name === 'CssModule' && recursiveIssuer( module ) === entry,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      // Apply babel ES6 compilation to JavaScript files.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      },
      // Apply Plugins to SCSS/SASS files.
      {
        test: /\.s[ac]ss$/,
        use: [
          // Mini extract pluign.
          MiniCssExtractPlugin.loader,
          // CSS Loader. Generate sourceMaps.
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true
            }
          },
          // Post CSS. Run autoprefixer plugin.
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer( {
                  browsers: [ 'last 2 versions', 'ie 11' ]
                } )
              ]
            }
          },
          // SASS Loader. Add compile paths to include bourbon.
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve( __dirname, npmPackage, 'bourbon/core' )
              ],
              sourceMap: true,
              lineNumbers: true,
              outputStyle: 'nested',
              precision: 10
            }
          }
        ]
      },
      // Apply plugins to image assets.
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          // A loader for webpack which transforms files into base64 URIs.
          // https://github.com/webpack-contrib/url-loader
          {
            loader: 'url-loader',
            options: {
              // Maximum size of a file in bytes. 8.192 Kilobtyes.
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  // Define and configure webpack plugins.
  plugins: [
    // A webpack plugin to remove/clean your build folder(s).
    // https://www.npmjs.com/package/clean-webpack-plugin
    new CleanWebpackPlugin( {
      verbose: true
    } ),
    // This plugin extracts CSS into separate files. It creates a CSS file per
    // JS file which contains CSS. It supports On-Demand-Loading of CSS and
    // SourceMaps.
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin( {
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "../css/[name].css",
      chunkFilename: "../css/[id].css"
    } ),
    // This Webpack plugin will generate a JSON file that matches the original
    // filename with the hashed version.
    // https://github.com/webdeveric/webpack-assets-manifest
    new WebpackAssetsManifest( {
      output: 'assets.json'
    } ),
    // Add a plugin to watch other files other than that required by webpack.
    // https://www.npmjs.com/package/filewatcher-webpack-plugin
    new FilewatcherPlugin( {
      watchFileRegex: [
        'src/**/*.twig',
        'src/**/*.json'
      ]
    } ),
  ]
}
