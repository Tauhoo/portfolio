const path = require('path')
const webpack = require('webpack')

const server =  {
  entry: path.resolve('./server/server.js'),
  output: {
      path: path.resolve('./server'),
      filename: 'server.built.js',
  },
  module: {
    rules:[
      {
        test: /\.js/,
        exclude: /node_module/,
        loaders: [
          'babel-loader',
        ],
      },
    ]
  },
  target: 'node',
}

const script =  {
  entry: path.resolve('./src/index.js'),
  output: {
      path: path.resolve('./public'),
      filename: 'script.js',
  }
  ,plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    rules:[
      {
        test: /\.js/,
        exclude: /node_module/,
        loaders: [
          'babel-loader',
        ],
      },
    ]
  },
}

module.exports = [
  server, script,
]
