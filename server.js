var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/store',function (req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('To jest sklep');
});


app.post('/', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!');
});


var server = app.listen(3000, function () {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
