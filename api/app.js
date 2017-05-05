const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect('mongodb://localhost/blog_teste');
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  	next()
});

app.use('/api', routes);


module.exports = app;
