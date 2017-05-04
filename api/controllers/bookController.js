const Book = require('../models/book');

const bookController = {};

bookController.get = function(req, res) {
    Book.find({}).then(function(books) {
        res.send(books);
    }).catch(function(err) {
        res.send(err);
    });
};

bookController.post = function(req, res) {
    Book.create(req.body).then(function(book) {
        res.send(book);
    }).catch(function(err) {
        res.send(err);
    });
};

bookController.put = function(req, res) {
    Book.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(book) {
        Book.findOne({_id: req.params.id}).then(function(book) {
            res.send(book);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

bookController.delete = function(req, res) {
    Book.findByIdAndRemove({_id: req.params.id}).then(function(book) {
        res.send(book);
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = bookController;
