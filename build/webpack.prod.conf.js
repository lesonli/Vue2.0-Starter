var webpack = require('webpack')
var config = require('./config')
var path = require('path')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')


var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader'
          }),
          scss: ExtractTextPlugin.extract({
            use: ["css-loader", "sass-loader"],
            fallback: 'vue-style-loader'
          })
        }
      }
    },{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader',
        fallback: 'style-loader'
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader'],
        fallback: 'style-loader'
      })
    },],
    noParse: /videojs-contrib-hls/
  },
  resolve: {
    //切换min，去掉警告
    alias: {
      'vue$': 'vue/dist/vue.min.js'
    }
  },
  output: {
    // publicPath: 'https://file.laoshi123.com',
    publicPath: config.prod.publicPath,
    filename: config.base.assetsPath + '/js/[name].[chunkhash].js',
    chunkFilename: config.base.assetsPath + '/js/[name].[chunkhash].js'
  },
  //devtool: "#source-map",
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin(),
    // extract css into its own file
    new ExtractTextPlugin(config.base.assetsPath + '/css/[name].[contenthash].css'),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      //      filename: pathResolve('../server/dist/index.html'),
      template: 'index.html',
      inject: true,
      /*minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'*/
    }),
    // split vendor js into its own file
    /*new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor','manifest']
      //minChunks: Infinity

    }),*/
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    /*new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })*/
  ]
})

module.exports = webpackConfig
