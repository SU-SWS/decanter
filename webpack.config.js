// Requires / Dependencies
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    path: path.resolve(__dirname, 'dist')
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
      filename: "[name].css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
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
          // PostCSS loader.
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                require('postcss-nested'),
                require('@fullhuman/postcss-purgecss')({

                  // Specify the paths to all of the template files in your project
                  content: [
                    './dev/**/*.html',
                    './src/**/*.twig',
                    './src/**/*.js',
                    // etc.
                  ],

                  // This is the function used to extract class names from your templates
                  defaultExtractor: content => {
                    // Capture as liberally as possible, including things like `h-(screen-1.5)`
                    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

                    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
                    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

                    return broadMatches.concat(innerMatches);
                  }
                })
              ],
            },
          },
        ],
      }
    ],
  }
}
