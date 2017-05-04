const Loan = require('../models/loan');

const loanController = {};

loanController.get = function(req, res) {
    Loan.find({}).populate({
        path: '_book',
        select: 'name edition author status'
    }).then(function(loans) {
        res.send(loans);
    }).catch(function(err) {
        res.send(err);
    });
};

loanController.post = function(req, res) {
    Loan.create(req.body).then(function(loan) {
        res.send(loan);
    }).catch(function(err) {
        res.send(err);
    });
};

loanController.put = function(req, res) {
    Loan.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(loan) {
        Loan.findOne({_id: req.params.id}).then(function(book) {
            res.send(loan);
        });
    }).catch(function(err) {
        res.send(err);
    });
};

loanController.delete = function(req, res) {
    Loan.findByIdAndRemove({_id: req.params.id}).then(function(loan) {
        res.send(loan);
    }).catch(function(err) {
        res.send(err);
    });
};

module.exports = loanController;
