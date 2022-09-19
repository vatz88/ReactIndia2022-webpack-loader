const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve('./src/index.js'),
  output: {
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.rql$/,
        use: [
          {
            loader: path.resolve('./rql-loader.js'),
          },
        ],
      },
    ],
  },
};
