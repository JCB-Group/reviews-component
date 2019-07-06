const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader", options: {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
      }}
    ]
  }
};