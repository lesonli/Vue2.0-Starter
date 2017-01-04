/**
 * Created by lesonli on 2016/11/15.
 */

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('dist'));
//开启单页路由跳转
app.get('*',function (req, res) {
    //console.log('input');
    console.log(path.dirname(require.main.filename));
    res.sendFile(path.dirname(require.main.filename) + '/dist/index.html');
    //res.status(404);
});
//测试路径
/*app.get('/', function (request, response) {
    response.send('Hello World!');
});*/

var PORT = parseInt(process.env.port || 4000);
app.listen(PORT, function () {
    console.log('Node app is running, port:', PORT, '\n\n\n\n\n\n');
});