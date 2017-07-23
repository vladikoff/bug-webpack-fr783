const webpack = require('webpack');

const config = {
  entry: {
    thing: __dirname + '/src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: ['bundle'],
    libraryTarget: 'amd',
    umdNamedDefine: true
  }
};

module.exports = config;
