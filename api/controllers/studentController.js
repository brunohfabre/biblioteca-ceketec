const Student = require('../models/student');

const studentController = {};

studentController.get = function(req, res) {
    Student.find({}).then(function(students) {
        res.send(students);
    }).catch(function(err) {
        res.send(err);
    });
};

studentController.post = function(req, res) {
    Student.create(req.body).then(function(student) {
        res.send(student);
    }).catch(function(err) {
        res.send(err);
    });
};

studentController.put = function(req, res) {
    Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(student) {
        Student.findOne({_id: req.params.id}).then(function(student) {
            res.send(student);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

studentController.delete = function(req, res) {
    Student.findByIdAndRemove({_id: req.params.id}).then(function(student) {
        res.send(student);
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = studentController;
