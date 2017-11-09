
module.exports = {
  entry: './src/index.js',
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

