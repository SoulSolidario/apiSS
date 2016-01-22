//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var port = '8020';

// Ruturn app and express instance
var app = module.exports = express();

// BodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// External access for other applications
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Atuhorization');
    next();
})

// Run app
app.listen(port);
console.log('Rodando o app. Acesse http://localhost:8020');
