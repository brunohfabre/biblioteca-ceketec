const Unit = require('../models/unit');
const Room = require('../models/room');
const Student = require('../models/student');

const unitController = {};

unitController.get = function(req, res) {
    Unit.find({}).then(function(units) {
        res.send(units);
    }).catch(function(err) {
        res.send(err);
    });
};

unitController.post = function(req, res) {
    Unit.create(req.body).then(function(unit) {
        res.send(unit);
    }).catch(function(err) {
        res.send(err);
    });
};

unitController.put = function(req, res) {
    Unit.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(unit) {
        Unit.findOne({_id: req.params.id}).then(function(unit) {
            res.send(unit);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

unitController.delete = function(req, res) {
    Student.remove({'_room._unit': req.params.id}).then(function(student) {
        Room.remove({_unit: req.params.id}).then(function(student) {
            Unit.findByIdAndRemove({_id: req.params.id}).then(function(unit) {
                res.send(unit);
            }).catch(function(err) {
                res.send(err);
            });
        }).catch(function(err) {
            res.send(err);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = unitController;
