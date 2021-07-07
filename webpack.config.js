const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader", "postcss-loader"],
      },
      {
        test: /o2-theme.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'o2-theme-[name].css',
      chunkFilename: '[name].css'
    })
  ]
}