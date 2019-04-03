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
const srcDir = path.resolve( __dirname, process.env.npm_package_config_srcDir );
const outputDir = path.resolve( __dirname, process.env.npm_package_config_distDir );
const kssSrcDir = path.resolve( __dirname, process.env.npm_package_config_kssSrcDir );
const kssOutputDir = path.resolve( __dirname, process.env.npm_package_config_kssDistDir );
const sassSrcDir = path.resolve( __dirname, process.env.npm_package_config_sassSrcDir );
const sassOutputDir = path.resolve( __dirname, process.env.npm_package_config_sassOutputDir );

// Other variables
// process.env.NODE_ENV is NOT set, so use the name of the npm script as the clue.
const devMode = process.env.npm_lifecycle_event !== 'dist';


////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////
// JAVASCRIPT CONFIGURATION.
////////////////////////////////////////////////////////////////////////////////

let DecanterJS = {
  // What am i?
  name: 'decanter-js',
  // Allows for map files.
  devtool: 'source-map',
  // What build?
  entry: {
    'decanter': path.resolve(__dirname, srcDir + "/js/decanter.js")
  },
  // Where put build?
  output: {
    filename: devMode ? "[name].js" : "[name].[hash].js",
    path: path.resolve(__dirname, outputDir + "/js")
  },
  // Additional module rules.
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  // Build optimizations.
  optimization: {
    // Uglify the Javascript & and CSS.
    minimizer: [
      // Shrink JS.
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
    ]
  },
  plugins: [
    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            source: outputDir + '/js/**/*',
            destination: kssSrcDir + '/kss-assets/js/'
          }
        ],
      },
    }),
  ],
  // Live dev server!
  devServer: {
    contentBase: path.join(__dirname, 'styleguide'),
    compress: true,
    port: 9000
  },
};

////////////////////////////////////////////////////////////////////////////////
// SASS CONFIGURATION.
////////////////////////////////////////////////////////////////////////////////

let DecanterSass = {
  // What am i?
  name: 'decanter-sass',
  // Allows for map files.
  devtool: 'source-map',
  // What build?
  entry: {
    "decanter": path.resolve(__dirname, sassSrcDir + "/decanter.scss"),
    "decanter-grid": path.resolve(__dirname, sassSrcDir + "/decanter-grid.scss"),
    "decanter-no-markup": path.resolve(__dirname, sassSrcDir + "/decanter-no-markup.scss"),
  },
  // Where put build?
  output: {
    filename: devMode ? "[name].delete" : "[name].[hash].delete",
    path: path.resolve(__dirname, sassOutputDir)
  },
  // Additional module rules.
  module: {
    rules: [
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
                  browsers: ['last 2 versions', 'ie 11']
                } )
              ]
            }
          },
          // SASS Loader. Add compile paths to include bourbon.
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, npmPackage, "bourbon/core"),
                path.resolve(__dirname, sassSrcDir)
              ],
              sourceMap: true,
              lineNumbers: true,
              outputStyle: 'nested',
              precision: 10
            }
          },
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
      },
    ]
  },
  plugins: [
    // Output css files.
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: "[id].css"
    }),
    // A webpack plugin to manage files before or after the build.
    // Used here to:
    // - clean all generated files (js AND css) prior to building
    // https://www.npmjs.com/package/filemanager-webpack-plugin
    new FileManagerPlugin({
      onStart: {
        delete: [ sassOutputDir + '/**/*' ]
      },
      onEnd: {
        delete: [ sassOutputDir + '/**/*.delete' ],
        copy: [
          {
            source: sassOutputDir + '/**/*',
            destination: kssSrcDir + '/kss-assets/css/'
          }
        ],
      },
    }),
    // This Webpack plugin will generate a JSON file that matches the original
    // filename with the hashed version.
    // https://github.com/webdeveric/webpack-assets-manifest
    new WebpackAssetsManifest({
      output: 'assets.json'
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
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
        'decanter-grid': {
          name: 'decanter-grid',
          test: ( module, chunks, entry = 'decanter-grid' ) => module.constructor.name === 'CssModule' && recursiveIssuer( module ) === entry,
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
    },
  }
};

////////////////////////////////////////////////////////////////////////////////
// KSS CONFIGURATION.
////////////////////////////////////////////////////////////////////////////////

let DecanterKSS = {
  // What am i?
  name: 'decanter-kss',
  // Allows for map files.
  devtool: 'source-map',
  // What build?
  entry: {
    "kss": path.resolve(__dirname, kssSrcDir + "/scss/kss.scss"),
  },
  // Where put build?
  output: {
    filename: devMode ? "[name].delete" : "[name].[hash].delete",
    path: path.resolve(__dirname, kssSrcDir + "/kss-assets/css")
  },
  // Additional module rules.
  module: {
    rules: [
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
                  browsers: ['last 2 versions', 'ie 11']
                } )
              ]
            }
          },
          // SASS Loader. Add compile paths to include bourbon.
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, npmPackage, "bourbon/core"),
                path.resolve(__dirname, sassSrcDir)
              ],
              sourceMap: true,
              lineNumbers: true,
              outputStyle: 'nested',
              precision: 10
            }
          },
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
                  name: "[name].[ext]",
                  publicPath: "../",
                  outputPath: "../"
                }
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // Output css files.
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: "[id].css"
    }),
    // A webpack plugin to manage files before or after the build.
    // Used here to:
    // - clean all generated files (js AND css) prior to building
    // https://www.npmjs.com/package/filemanager-webpack-plugin
    new FileManagerPlugin({
      onStart: {
        delete: [ kssSrcDir + '/kss-assets/css/**/*' ]
      },
      onEnd: {
        delete: [ kssSrcDir + '/kss-assets/css/*.delete' ],
      },
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
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
    },
  }
};

////////////////////////////////////////////////////////////////////////////////
// MODULE EXPORTS.
////////////////////////////////////////////////////////////////////////////////

module.exports = [ DecanterJS, DecanterSass, DecanterKSS ];
