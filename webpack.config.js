/**
 * Webpack Configuration File
 * @type {[type]}
 */

 // Requires / Dependencies
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");

// Paths
const npmPackage = 'node_modules/';
const srcDir = path.resolve( __dirname, process.env.npm_package_srcDir );
const outputDir = path.resolve( __dirname, process.env.npm_package_distDir );
const kssSrcDir = path.resolve( __dirname, process.env.npm_package_kssSrcDir );
const kssOutputDir = path.resolve( __dirname, process.env.npm_package_kssDistDir );

// Other variables
// process.env.NODE_ENV is NOT set, so use the name of the npm script as the clue.
const devMode = process.env.npm_lifecycle_event !== 'dist';

// For MiniCssExtractPlugin
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

// Common config between Decanter and KSS builds.
var config = {
  // Allows for map files.
  devtool: 'source-map',
  // Live dev server!
  devServer: {
    contentBase: path.join(__dirname, 'styleguide'),
    compress: true,
    port: 9000
  },
  // Define modules.
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
          // Extract loader.
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
                  grid: true
                } )
              ]
            }
          },
          // SASS Loader. Add compile paths to include bourbon.
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve( __dirname, npmPackage, "bourbon/core" ),
                path.resolve( __dirname, srcDir, "scss" )
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
              limit: 8192,
              fallback: {
                loader: "file-loader",
                options: {
                  name: devMode ? "[name].[ext]" : "[hash:7].[ext]",
                  publicPath: "../assets",
                  outputPath: "../assets"
                }
              }
            }
          }
        ]
      }
    ]
  }
};

// Decanter core configuration.
let coreConfig = Object.assign({}, config, {
  name: "decanter",
  // Define the entry points for which webpack builds a dependency graph.
  entry: {
    "decanter": srcDir + "/js/decanter.js",
    "decanter-grid": srcDir + "/js/decanter-grid.js",
    "decanter-no-markup": srcDir + "/js/decanter-no-markup.js"
  },
  // Where should I output the assets.
  output: {
    filename: devMode ? "[name].js" : "[name].[hash].js",
    path: path.resolve( __dirname, outputDir + '/js' )
  },
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
  // Define and configure webpack plugins.
  plugins: [
    // A webpack plugin to manage files before or after the build.
    // Used here to:
    // - clean all generated files (js AND css) prior to building
    // - copy generated files to the styleguide after building
    // Copying to the styleguide must happen in this build because the 2 configs
    // run asynchronously, and the kss build finishes before this build generates
    // the assets that need to be copied.
    // https://www.npmjs.com/package/filemanager-webpack-plugin
    new FileManagerPlugin( {
      onStart: {
        delete: [ outputDir + '/**/*' ]
      },
      onEnd: {
        copy: [
          { source: outputDir + '/**/*', destination: kssOutputDir }
        ],
      },
    } ),
    // This plugin extracts CSS into separate files. It creates a CSS file per
    // JS file which contains CSS. It supports On-Demand-Loading of CSS and
    // SourceMaps.
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin( {
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "../css/[name].css" : "../css/[name].[hash].css",
      chunkFilename: "../css/[id].css"
    } ),
    // This Webpack plugin will generate a JSON file that matches the original
    // filename with the hashed version.
    // https://github.com/webdeveric/webpack-assets-manifest
    new WebpackAssetsManifest( {
      output: 'assets.json'
    } ),
  ]
});

// Decanter core configuration.
let kssConfig = Object.assign({}, config, {
  name: "kss",
  // Define the entry points for which webpack builds a dependency graph.
  entry: {
    'kss': kssSrcDir + "/scss/kss.js"
  },
  // Where should I output the assets.
  output: {
    filename: "[name].js",
    path: path.resolve( __dirname, kssSrcDir + '/kss-assets/dist' )
  },
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
        'kss': {
          name: 'kss',
          test: ( module, chunks, entry = 'kss' ) => module.constructor.name === 'CssModule' && recursiveIssuer( module ) === entry,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  // Define and configure webpack plugins.
  plugins: [
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
    // Add a plugin to watch other files other than that required by webpack.
    // https://www.npmjs.com/package/filewatcher-webpack-plugin
    new ExtraWatchWebpackPlugin( {
      files: [
        srcDir + '/**/*.twig',
        srcDir + '/**/*.json'
      ]
    } ),
  ]
});

// Module Exports.
module.exports = [ coreConfig, kssConfig ];
