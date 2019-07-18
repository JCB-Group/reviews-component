const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  watch: true,
  output: {
    filename: 'reviewsBundle.js',
    path: path.resolve(__dirname, './client/dist')
    // path: '/users/JosefBerthoud/Desktop/FEC-2/reviews-proxy/dist/'
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