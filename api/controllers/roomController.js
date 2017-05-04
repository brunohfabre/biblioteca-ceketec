const Room = require('../models/room');

const roomController = {};

roomController.get = function(req, res) {
    Room.find({}).then(function(rooms) {
        res.send(rooms);
    }).catch(function(err) {
        res.send(err);
    });
};

roomController.post = function(req, res) {
    Room.create(req.body).then(function(room) {
        res.send(room);
    }).catch(function(err) {
        res.send(err);
    });
};

roomController.put = function(req, res) {
    Room.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(room) {
        Room.findOne({_id: req.params.id}).then(function(room) {
            res.send(room);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

roomController.delete = function(req, res) {
    Room.findByIdAndRemove({_id: req.params.id}).then(function(room) {
        res.send(room);
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = roomController;
