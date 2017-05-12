const Room = require('../models/room');
const Unit = require('../models/unit');
const Student = require('../models/student');

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
        Unit.findByIdAndUpdate({_id: req.body._unit}, { $push: { '_rooms': room._id }}).then(function(unit_room) {
            res.send(room);
        }).catch(function(err) {
            res.send(err);
        });
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
    Student.remove({_room: req.params.id}).then(function(student) {
        Room.findByIdAndRemove({_id: req.params.id}).then(function(room) {
            res.send(room);
        }).catch(function(err) {
            res.send(err);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = roomController;
