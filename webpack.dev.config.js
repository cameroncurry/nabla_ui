const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const {entry, resolve, webpack_module} = require('./webpack.common.config.js')

module.exports = {
  context: __dirname,
  entry,
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },
  resolve,
  module: webpack_module,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new DashboardPlugin()
  ]
}
