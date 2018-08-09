var http = require('http');
var port = process.env.port || 8080;
var express = require('express');
var app = express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');

var cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://localhost:8080/meanDb',{useNewUrlParser: true});

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.use('/',appRoutes);





http.createServer(app).listen(port);


console.log('hey tushar server is running' + port);