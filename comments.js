// Create web server
// 1. npm init
// 2. npm install express --save
// 3. npm install body-parser --save
// 4. node comments.js

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/comments', function (req, res) {
    res.send('GET request to the homepage');
});

app.post('/comments', function (req, res) {
    console.log(req.body);
    res.send('POST request to the homepage');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});