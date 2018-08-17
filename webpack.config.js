const path = require('path');

module.exports = {
  entry: {
    main: './src/client/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'source-map',
};
