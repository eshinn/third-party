const webpack = require('webpack')
const Clean = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: ['./src/index.js'],

  output: {
    filename: 'index.bundle.wp.js',
    path: `${__dirname}/dist`,
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // loader: 'buble-loader',
      }
    ]
  },

  plugins: [
    // new Clean(['dist']),
    new UglifyJSPlugin({
      uglifyOptions: {
        mangle: false,
        output: {
          beautify: true,
        },
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
}
