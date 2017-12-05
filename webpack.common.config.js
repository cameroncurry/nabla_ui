
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  webpack_module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    },{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}

