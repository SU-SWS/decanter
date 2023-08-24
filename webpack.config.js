/* eslint-disable no-undef */
/**
 * Decanter 6 - Webpack Configuration
 */

// Requires / Dependencies
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const TerserPlugin = require('terser-webpack-plugin');

// Paths
const npmPackage = 'node_modules';
const srcDir = path.resolve(__dirname, 'core/src');
const outputDir = path.resolve(__dirname, 'core/dist');
// process.env.NODE_ENV is NOT set, so use the name of the npm script as the clue.
const devMode = process.env.npm_lifecycle_event !== 'dist';

// Module Exports.
module.exports = {
  name: 'decanter',
  // Define the entry points for which webpack builds a dependency graph.
  entry: {
    'decanter': srcDir + '/js/decanter.js',
    'decanter-grid': srcDir + '/scss/decanter-grid.scss',
    'decanter-no-markup': srcDir + '/js/decanter-no-markup.js'
  },
  // Where should I output the assets.
  output: {
    filename: devMode ? '[name].js' : '[name].[hash].js',
    path: path.resolve(__dirname, outputDir + '/js'),
    clean: true,
    assetModuleFilename: '../assets/[name][ext]',
    library: {
      name: 'decanter',
      type: 'umd'
    }
  },
  // Allows for map files.
  devtool: 'source-map',
  resolve: {
    alias: {
      './@fortawesome': path.resolve(__dirname, npmPackage, '@fortawesome')
    }
  },
  // Optimizations that are triggered by production mode.
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    minimize: devMode,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
  plugins: [
    // A webpack plugin to manage files before or after the build.
    // Used here to:
    // - clean all generated files (js AND css) prior to building
    // - copy generated files to the styleguide after building
    // Copying to the styleguide must happen in this build because the 2 configs
    // run asynchronously, and the kss build finishes before this build generates
    // the assets that need to be copied.
    // https://www.npmjs.com/package/filemanager-webpack-plugin
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: [outputDir + '/**/*']
        },
        onEnd: {
          delete: [
            outputDir + '/js/decanter-grid.js',
            outputDir + '/js/runtime.js'
          ]
        }
      }
    }),
    // This plugin extracts CSS into separate files. It creates a CSS file per
    // JS file which contains CSS. It supports On-Demand-Loading of CSS and
    // SourceMaps.
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '../css/[name].css' : '../css/[name].[hash].css',
      chunkFilename: '../css/[id].css'
    }),
    // This Webpack plugin will generate a JSON file that matches the original
    // filename with the hashed version.
    // https://github.com/webdeveric/webpack-assets-manifest
    new WebpackAssetsManifest({
      output: 'assets.json'
    })
  ],
  module: {
    rules: [
      // Apply babel ES6 compilation to JavaScript files.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // Apply Plugins to SCSS/SASS files.
      {
        test: /\.s[ac]ss$/,
        use: [
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
              sourceMap: true
            }
          },
          // SASS Loader. Add compile paths to include bourbon.
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                sourceMap: true,
                lineNumbers: true,
                outputStyle: 'nested',
                precision: 10,
                includePaths: [
                  path.resolve(__dirname, npmPackage, 'bourbon/core'),
                  path.resolve(__dirname, srcDir, 'scss'),
                  path.resolve(__dirname, npmPackage)
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
};
