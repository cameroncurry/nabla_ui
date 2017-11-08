
module.exports = {
  entry: './src/index.js',
  extensions: ['.js', '.jsx'],
  rules: [{
    test: /\.jsx?$/,
    exclude: /node-modules/,
    loader: 'babel-loader'
  }]
}

