/* eslint-disable no-undef */
/**
 * Decanter 6 - Webpack Configuration
 */

// Requires / Dependencies
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Paths
const npmPackage = path.resolve(__dirname, 'node_modules');
const srcDir = path.resolve(__dirname, 'core/src');
const devDir = path.resolve(__dirname);

// Module Exports.
module.exports = {
  name: 'decanter',
  mode: 'development',
  devtool: 'source-map',
  // Define the entry points for which webpack builds a dependency graph.
  entry: {
    index: path.resolve(devDir, 'index.js')
  },
  resolve: {
    alias: {
      './@fortawesome': path.resolve(npmPackage, '@fortawesome')
    }
  },
  devServer: {
    compress: true,
    port: 9001,
    hot: true,
    open: true
  },
  plugins: [
    // This plugin extracts CSS into separate files. It creates a CSS file per
    // JS file which contains CSS. It supports On-Demand-Loading of CSS and
    // SourceMaps.
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(devDir, 'index.twig'),
      xhtml: true,
      inject: true,
      cache: false
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
                  path.resolve(npmPackage, 'bourbon/core'),
                  path.resolve(srcDir, 'scss'),
                  path.resolve(npmPackage)
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.twig$/,
        use: [
          'raw-loader',
          {
            loader: 'twig-html-loader',
            options: {
              data: (context) => {
                const data = path.join(__dirname, 'twig.data.json');
                context.addDependency(data); // Force webpack to watch file
                return context.fs.readJsonSync(data, {throws: false}) || {};
              },
              namespaces: {
                decanter: path.resolve(__dirname, '../core/src/templates')
              }
            }
          }
        ]
      }
    ]
  }
};
