const express =require('express');
var proxy= require('http-proxy-middleware');
var path = require('path');
var router = express.Router();
const app=express();
var request = require("request");
router.get("/opd",(req,res)=>{
    console.log(req.headers);
    let url='req.query.url'
    res.json({
    msg:req.url
})});
app.use('/api', proxy({
    target: 'http://47.95.49.109:8080',
    changeOrigin: true,
    pathRewrite:{
        '/api':'/'
      }
}));
app.use(express.static(path.join(__dirname, 'static')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,  './views/index.html'))
})
app.use(router)
app.listen(3000);