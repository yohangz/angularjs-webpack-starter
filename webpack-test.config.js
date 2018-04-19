const path = require('path');
const ROOT = path.resolve(__dirname, 'src');

/**
 * Webpack Plugins
 */
module.exports = {
  context: ROOT,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'eslint-loader',
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
        test: /\.js/,
        exclude: [
          /node_modules/,
          /\.spec\.js/
        ],
        use: 'istanbul-instrumenter-loader',
        enforce: 'post'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(jpg|png|gif|svg|woff|woff2|eot|ttf)$/,
        use: 'file-loader'
      },

      {
        test: /.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [],
  devtool: 'inline-source-map',
  devServer: {}
};
