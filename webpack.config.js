// Requires / Dependencies
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Dev or not.
if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = "development";
}

const devMode = (process.env.NODE_ENV !== 'production');

// webpack.config.js
module.exports = {
  name: "decanter",
  // Define the entry points for which webpack builds a dependency graph.
  entry: {
    "decanter": path.resolve(__dirname, "src", "decanter.js")
  },
  // Where should I output the assets.
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
  },
  // Define and configure webpack plugins.
  plugins: [
    // This plugin extracts CSS into separate files. It creates a CSS file per
    // JS file which contains CSS. It supports On-Demand-Loading of CSS and
    // SourceMaps.
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // Extract loader.
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: process.env.NODE_ENV === 'development',
              // if hmr does not work, this is a forceful method.
              // reloadAll: true,
            },
          },
          // CSS Loader. Generate sourceMaps.
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true,
            }
          },
          // PostCSS loader.
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('postcss-import'),
                require('postcss-nested'),
                require('autoprefixer'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        loader: 'file-loader',
        options: {
          name: "[name].[ext]",
          publicPath: "/assets/fonts",
          outputPath: "../dist/assets/fonts"
        }
      },
      // Apply plugins to image assets.
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "/assets/img",
              outputPath: "../dist/assets/img"
            }
          }
        ]
      }
    ],
  }
}
