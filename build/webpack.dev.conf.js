var config = require('./config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = [
    `webpack-dev-server/client?http://localhost:${config.dev.port}/`,
    "webpack/hot/dev-server"
  ].concat(baseWebpackConfig.entry[name])
});

module.exports = merge(baseWebpackConfig, {
  output: {
    publicPath: config.dev.publicPath,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }, {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  // eval-source-map is faster for development  
  devtool: "cheap-eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(), // 模块热替换 
    new webpack.NoEmitOnErrorsPlugin(), // 编译过程中，跳过错误
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
