var path = require('path')
var config = require('./config')

function pathResolve(relPath) {
    return path.resolve(__dirname, relPath);
}

module.exports = {
    entry: {
        app: './src/main.js'
        //vendor: ['vue', 'vuex', 'vue-router', 'element-ui', 'vuex-router-sync', 'axios']
    },
    output: {
        path: config.base.path
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'src': pathResolve('../src'),
            'assets': pathResolve('../src/assets'),
            'components': pathResolve('../src/components'),
            'views': pathResolve('../src/views'),
            'routes': pathResolve('../src/routes'),
            'store': pathResolve('../src/store'),
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: config.base.assetsPath + '/img/[name].[hash:7].[ext]'
                    }
                }]
            }, {
                test: /\.(woff2|woff|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: config.base.assetsPath + '/fonts/[name].[hash:7].[ext]'
                    }
                }]
            }]
    }
}
