'use strict';

var _ = require('lodash');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var banner = _.template([
  '',
  ' Battlefield Example - <%= pkg.description %>',
  ' @version v<%= pkg.version %>',
  ' @link <%= pkg.homepage %>',
  ' @license <%= pkg.license %>',
  ' @author <%= pkg.author.name %> (<%= pkg.author.url %>)',
  ''
].join('\n'), {
  pkg: require('./package.json')
});

module.exports = {
  entry: {
      'Battlefield':  './lib/app.js',
      'Battlefieldexample':  './example/example.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    sourceMapFilename: '[file].map'
},
  module: {
    loaders: [{
      test: /\.(js)$/,
      exclude: '/node_modules/',
      loaders: ['babel-loader']
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
