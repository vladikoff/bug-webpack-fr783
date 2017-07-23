const webpack = require('webpack');

const config = {
  entry: {
    thing: __dirname + '/src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: ['bundle'],
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};

module.exports = config;
