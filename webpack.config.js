const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");

const npmPackage = './node_modules/';

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

module.exports = ( argv ) => {
  console.log( 'Mode is ' + argv.mode );
  let assetDir  = './core/',
      outputDir = 'core/dist',
      devMode   = argv.mode !== 'production';

  return {
    entry: {
      "full":  assetDir + "js/decanter.js",
      "noMarkup": assetDir + "js/decanter-no-markup.js"
    },
    output: {
      filename: devMode ? "[name].js" : "[name].[hash].js",
      path: path.resolve(__dirname, outputDir + '/js')
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          full: {
            name: 'full',
            test: (m,c,entry = 'decanter') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
            chunks: 'all',
            enforce: true
          },
          noMarkup: {
            name: 'noMarkup',
            test: (m,c,entry = 'decanter-no-markup') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
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
              presets: ['@babel/preset-env']
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
                    browsers: ['last 2 versions', '> 1%']
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
                  npmPackage + 'bourbon/core'
                ],
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin( [ outputDir ], {
        verbose: true
      }),
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
  };
}