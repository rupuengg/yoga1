// Require Path
var path = require('path');

var DIST_PATH = path.resolve(__dirname, 'dist');
var SRC_PATH = path.resolve(__dirname, 'src');

var config = {
  entry: SRC_PATH + '/app/index.js',
  output: {
    path: DIST_PATH + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: SRC_PATH,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /.(jpeg|jpg|png|gif|svg)$/i,
        loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]','image-webpack-loader','file-loader','url-loader']
      }
    ]
  }
};

module.exports = config;
