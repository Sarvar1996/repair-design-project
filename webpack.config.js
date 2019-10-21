const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './javascript/index.js',

  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [
          path.resolve(__dirname, './node_modules'),
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash].[ext]',
            outputPath: '../',
            publicPath: '../',
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
              loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/style.css'
    }),
  ],

  mode: 'development'


}