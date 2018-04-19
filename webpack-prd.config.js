const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const DESTINATION = path.resolve(__dirname, 'public');

/**
 * Webpack Plugins
 */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  output: {
    path: DESTINATION,
    filename: 'js/[name]-bundle-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '../'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new UglifyJsPlugin()
  ]
});
