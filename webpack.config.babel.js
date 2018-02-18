import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import babel-polyfill from 'babel-polyfill'
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: __dirname + '/client',
    filename: 'bundle.js',
  },
  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : 'source-map',
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        loader: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: ['node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: "body",
      minify: {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true
      }
    })
  ]
};
