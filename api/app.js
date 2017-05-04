const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect('mongodb://localhost/blog_teste');
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());

app.use('/api', routes);


module.exports = app;
