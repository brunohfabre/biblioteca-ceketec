const Scheduling = require('../models/scheduling');

const schedulingController = {};

schedulingController.get = function(req, res) {
    Scheduling.find({}).then(function(schedulings) {
        res.send(schedulings);
    }).catch(function(err) {
        res.send(err);
    });
};

schedulingController.post = function(req, res) {
    Scheduling.create(req.body).then(function(scheduling) {
        res.send(scheduling);
    }).catch(function(err) {
        res.send(err);
    });
};

schedulingController.put = function(req, res) {
    Scheduling.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(scheduling) {
        Scheduling.findOne({_id: req.params.id}).then(function(scheduling) {
            res.send(scheduling);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

schedulingController.delete = function(req, res) {
    Scheduling.findByIdAndRemove({_id: req.params.id}).then(function(scheduling) {
        res.send(scheduling);
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = schedulingController;
