const assetDir  = './core/';
const outputDir = 'core/dist';

const npmPackage = './node_modules/';
const devMode = process.env.NODE_ENV !== 'production';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");

// for MiniCssExtractPlugin
function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
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
    splitChunks: {
      cacheGroups: {
        'decanter': {
          name: 'decanter',
          test: ( m, c, entry = 'decanter' ) => m.constructor.name === 'CssModule' && recursiveIssuer( m ) === entry,
          chunks: 'all',
          enforce: true
        },
        'decanter-no-markup': {
          name: 'decanter-no-markup',
          test: ( m, c, entry = 'decanter-no-markup' ) => m.constructor.name === 'CssModule' && recursiveIssuer( m ) === entry,
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
              url: false
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
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
              attempts: 10
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
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin( {
      verbose: true
    } ),
    new MiniCssExtractPlugin( {
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "../css/[name].css",
      chunkFilename: "../css/[id].css"
    } ),
    new WebpackAssetsManifest( {
      output: 'assets.json'
    } ),
  ]
}