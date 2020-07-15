// Requires / Dependencies
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// webpack.config.js
module.exports = {
  name: "decanter",
  // Define the entry points for which webpack builds a dependency graph.
  entry: {
    "decanter": path.resolve(__dirname, "src/css/index.css")
  },
  // Where should I output the assets.
  output: {
    filename: "[name].js",
    path: path.resolve( __dirname, 'dist' )
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // Extract loader.
          MiniCssExtractPlugin.loader,
          // PostCSS loader.
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        ],
      }
    ],
  }
}
