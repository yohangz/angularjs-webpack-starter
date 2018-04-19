const path = require('path');
const ROOT = path.resolve(__dirname, 'src');

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: ROOT,
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          }
        },
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: 'ng-annotate-loader',
        enforce: 'post'
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },

      {
        test: /\.(svg|woff|woff2|eot|ttf)$/,
        use: 'file-loader?outputPath=fonts/'
      },

      {
        test: /.html$/,
        exclude: /index.html$/,
        use: 'html-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'AngularJS - Webpack',
      template: 'index.html',
      inject: true
    })
  ],

  entry: './index.js'
};
