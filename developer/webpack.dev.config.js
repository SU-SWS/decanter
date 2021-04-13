/**
 * Webpack Configuration File
 * @type {[type]}
 */

 // Requires / Dependencies
const path =                       require('path');
const webpack =                    require('webpack');
const autoprefixer =               require('autoprefixer')({ grid: true });
const FileManagerPlugin =          require('filemanager-webpack-plugin');
const UglifyJsPlugin =             require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin =       require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin =    require("optimize-css-assets-webpack-plugin");
const WebpackAssetsManifest =      require("webpack-assets-manifest");
const ExtraWatchWebpackPlugin =    require("extra-watch-webpack-plugin");
const FixStyleOnlyEntriesPlugin =  require("webpack-fix-style-only-entries");
const HtmlWebpackPlugin =          require('html-webpack-plugin');

// Paths
const npmPackage = '../node_modules';
const srcDir = path.resolve( __dirname, '../core/src' );
const outputDir = path.resolve( __dirname, 'js' );

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

// Module Exports.
module.exports = {
  name: "decanter-dev",
  // Define the entry points for which webpack builds a dependency graph.
  entry: {
    "decanter": srcDir + "/js/decanter.js",
    "twig": path.resolve(__dirname, "twig.js"),
    "local-js": path.resolve(__dirname, "index.js"),
    "local-css": path.resolve(__dirname, "index.scss"),
  },
  // Where should I output the assets.
  output: {
    filename: "[name].js",
    path: path.resolve( __dirname, outputDir )
  },
  // Allows for map files.
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname),
    watchContentBase: true,
    compress: true,
    port: 9001,
    hot: true
  },
  // Relative output paths for css assets.
  resolve: {
    alias: {
      './@fortawesome': path.resolve(__dirname, npmPackage, '@fortawesome'),
      '@decanter-no-markup': path.resolve(__dirname, "../core/src/scss/decanter-no-markup.scss"),
    }
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
        }
      }
    }
  },
  // Define and configure webpack plugins.
  plugins: [
    // Remove JS files from render.
    new FixStyleOnlyEntriesPlugin(),
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
    // Turn things in to html.
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.twig'),
      filename: path.resolve(__dirname, 'index.html'),
      xhtml: true,
      inject: true,
    }),
  ],
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
                autoprefixer
              ]
            }
          },
          // SASS Loader. Add compile paths to include bourbon.
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve( __dirname, npmPackage, "bourbon/core" ),
                path.resolve( __dirname, srcDir, "scss" ),
                path.resolve( __dirname, npmPackage )
              ],
              sourceMap: true,
              lineNumbers: true,
              outputStyle: 'nested',
              precision: 10
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        loader: 'file-loader',
        options: {
          name:"[name].[ext]",
          publicPath: "/assets",
          outputPath: "../assets"
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
              publicPath: "/assets",
              outputPath: "../assets"
            }
          }
        ]
      },
      {
        test: /\.twig$/,
        use: [
          'raw-loader',
          {
            loader: 'twig-html-loader',
            options: {
              data: (context) => {
                const data = path.join(__dirname, 'test.json');
                context.addDependency(data); // Force webpack to watch file
                return context.fs.readJsonSync(data, { throws: false }) || {};
              },
              namespaces: {
                'decanter': path.resolve( __dirname, '../core/src/templates' )
              }
            }
          }
        ]
      },
    ]
  }
};
