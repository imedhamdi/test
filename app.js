const express = require('express');
const path = require('path');
const mysql = require('mysql');
const router = require('express').Router();
var bodyParser = require('body-parser');



const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'index.html'));
  });

// const dbConn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: ""
// });

// dbConn.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!"); {
//         dbConn.query("CREATE DATABASE IF NOT EXISTS Groupomania", function (err, result) {
//             if (err) throw err;
//         })
//         dbConn.query("CREATE TABLE IF NOT EXISTS Groupomania.customers  (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))", function (err, result) {
//             if (err) throw err;
//             console.log(result);
//         });
//     };
// });
// app.post('/', function (req, res) {
//     var user = req.body;
//     dbConn.query("USE Groupomania");
//     dbConn.query("INSERT INTO customers set ?", user, function (err, result) {

//         if (err) {
//             console.log(err);
//         } else {
//             res.send({
//                 "code": 200,
//                 "success": "L'utilisateur a été ajouté ! "
//             });
//         }
//     });

// });
module.exports = app;