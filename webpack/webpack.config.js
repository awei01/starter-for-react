const webpack = require('webpack')
const path = require('path')

function _resolvePath (...args) {
  const parts = [__dirname, '..'].concat(args)
  return path.resolve.apply(null, parts)
}

module.exports = {
  entry: [
    'react-hot-loader/patch',
    _resolvePath('src', 'index.js')
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': _resolvePath('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: ['eslint-loader'],
        include: [
          _resolvePath('src')
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
    ]
  },
  output: {
    path: _resolvePath('dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: _resolvePath('dist'),
    overlay: true
  }
}
