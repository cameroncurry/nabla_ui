const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const {entry, resolve, webpack_module} = require('./webpack.common.config.js')

module.exports = {
  context: __dirname,
  entry,
  output: {
      path: path.resolve('./nabla_ui/static/webpack_bundles/'),
      filename: "[name]-[hash].js"
  },
  resolve,
  module: webpack_module,
  plugins: [
    new BundleTracker({filename: './nabla_ui/webpack-stats.json'})
  ]
}
