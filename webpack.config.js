var path = require('path');

module.exports = (env, argv) => ({
  mode: 'production',
  devtool: false,
  entry: './src/code.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.js'
  }
})
