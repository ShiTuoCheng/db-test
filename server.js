/* jshint esversion:6 */

//引入user
const User = require('./Model/User.js');

const express = require('express');
const app = express();
const mongodb = require('mongoose');
const dbUrl = "mongodb://localhost:27017/stc";
const PORT = 3000;

const router = express.Router();
const insertData = () => {

    let user = new User({

        name: 'user1'
    });

    user.save((err, res) => {

        err => console.log(err);

        console.log(res);
    });
};

mongodb.connect(dbUrl).then(() => {

    console.log('connect to db');
});

mongodb.connection.on('disconnected', function () {    
    console.log('disconnect to db');  
});

insertData();
app.get('/', (req, res) => {
    console.log("主页 GET 请求");
    User.find((err, res1) => {

        err => console.log(err);

        res.send(res1);
    });
 });
  
  
 let server = app.listen(8081, () => {
  
   let host = server.address().address,
       port = server.address().port;
  
   console.log("connect to http://%s:%s", host, port);
  
 });