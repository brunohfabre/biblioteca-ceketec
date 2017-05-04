const express = require('express');

const unitController = require('./controllers/unitController');
const roomController = require('./controllers/roomController');
const studentController = require('./controllers/studentController');
const bookController = require('./controllers/bookController');

const routes = express.Router();

// Rotas Unit
routes.get('/units', unitController.get);
routes.post('/units', unitController.post);
routes.put('/units/:id', unitController.put);
routes.delete('/units/:id', unitController.delete);

// Rotas Room
routes.get('/rooms', roomController.get);
routes.post('/rooms', roomController.post);
routes.put('/rooms/:id', roomController.put);
routes.delete('/rooms/:id', roomController.delete);

// Rotas Student
routes.get('/students', studentController.get);
routes.post('/students', studentController.post);
routes.put('/students/:id', studentController.put);
routes.delete('/students/:id', studentController.delete);

// Rotas Book
routes.get('/books', bookController.get);
routes.post('/books', bookController.post);
routes.put('/books/:id', bookController.put);
routes.delete('/books/:id', bookController.delete);

module.exports = routes;
