var path = require('path')

module.exports = {
    base:{
        path: path.resolve(__dirname,'../server/dist'),
        assetsPath:'static'
    },
    dev:{
        publicPath:'/',
        port:4000
    },
    prod:{
        publicPath:''
      //publicPath:'//file.laoshi123.com/dskj_dscj_web/'
    }
}
