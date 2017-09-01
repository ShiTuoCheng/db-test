/* jshint esversion:6 */

//用户数据
const User = require('./Model/User.js');
//文章数据
const Article = require('./Model/Article.js');

const express = require('express');
const app = express();
const mongodb = require('mongoose');
const dbUrl = "mongodb://localhost:27017/stc";
const PORT = 3000;

const router = express.Router();

mongodb.connect(dbUrl).then(() => {

    console.log('connect to db');
});

mongodb.connection.on('disconnected', function () {    
    console.log('disconnect to db');  
});

//insertData();

app.get('/', (req, res) => {
    console.log("GET Request!");
    User.find((err, res1) => {

        err => console.log(err);

        res.send(res1);
    });
 });

 //获取文章接口
 app.get('/articles', (req, res) => {

    console.log('GET Articles');
    Article.find((err, articleRes) => {

        err => console.log('ArticleErr:'+ err);

        res.send(articleRes);
    });
 });

 //上传文章接口
 app.post('/addPostArticle', (req, res, err) => {

    console.log('POST Request');
    err => console.log(err);

    let article = new Article({

        'title':req.body.title,
        'image':req.body.image,
        'content':req.body.content
    });

    article.save((res, err) => {

        err => console.log(err);

        console.log("success to insert a ArticleData"+res);
    });
 });

 var server = app.listen(PORT, () => {
  
   let host = server.address().address,
       port = server.address().port;
  
   console.log("connect to http://%s:%s", host, port);
  
 });