const webpack = require('webpack')
const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const {resolve, webpack_module} = require('./webpack.common.config.js')

module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: './src/index.js',
  output: {
      path: path.resolve('./nabla_ui/static/webpack_bundles/'),
      filename: "[name]-[hash].js"
  },
  resolve,
  module: webpack_module,
  plugins: [
    new BundleTracker({filename: './nabla_ui/webpack-stats.json'}),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
  ]
}
