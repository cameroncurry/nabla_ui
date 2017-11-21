
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  webpack_module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}

