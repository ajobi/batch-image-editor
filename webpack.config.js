const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const path = require('path')

module.exports = env => ({
  mode: env.production ? 'production' : 'development',
  entry: {
    ui: './src/ui.js',
    code: './src/code.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui.html',
      filename: 'ui.html',
      inlineSource: '.(js)$',
      chunks: ['ui'],
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: [/ui\.js$/],
    }),
    new CopyPlugin({
      patterns: [
        { from: "manifest.json", to: "manifest.json" },
      ],
    }),
  ]
})
