const path = require('path');

const assetDir  = './core/';
const outputDir = 'core/dist';
const styleGuide = path.resolve( __dirname, './styleguide/');

const npmPackage = './node_modules/';
const devMode = process.env.NODE_ENV !== 'production';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const CopyPlugin = require('webpack-copy-on-build-plugin');

// for MiniCssExtractPlugin
function recursiveIssuer(module) {
  if (module.issuer) {
    return recursiveIssuer(module.issuer);
  } else if (module.name) {
    return module.name;
  } else {
    return false;
  }
}

module.exports = {
  entry: {
    "decanter": assetDir + "js/decanter.js",
    "decanter-grid": assetDir + "js/decanter-grid.js",
    "decanter-no-markup": assetDir + "js/decanter-no-markup.js"
  },
  output: {
    filename: devMode ? "[name].js" : "[name].[hash].js",
    path: path.resolve( __dirname, outputDir + '/js' )
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin( {
        cache: true,
        parallel: true,
        sourceMap: true
      } ),
      new OptimizeCSSAssetsPlugin( {} )
    ],
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
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer( {
                  browsers: [ 'last 2 versions', '> 1%' ]
                } )
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve( __dirname, npmPackage, 'bourbon/core' )
              ],
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin( {
      cleanOnceBeforeBuildPatterns: [ outputDir + '/css/*', outputDir + '/js/*' ],
      verbose: true
    } ),
    new MiniCssExtractPlugin( {
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "../css/[name].css",
      chunkFilename: "../css/[id].css",
      sourceMap: true
    } ),
    new WebpackAssetsManifest( {
      output: 'assets.json'
    } ),
    new CopyPlugin( [
      {
        from: outputDir + "/css/decanter.css",
        to: styleGuide + '/css/decanter.css',
      },
      {
        from: outputDir + "/js/decanter.js",
        to: styleGuide + "/js/decanter.js",
      },
    ] ),
  ]
}