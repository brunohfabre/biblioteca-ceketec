const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    _student: { type: Schema.ObjectId, ref: 'Student', required: true },
    _book: { type: Schema.ObjectId, ref: 'Book', required: true },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true },
    status: { type: String},
    createdAt: { type: Date, required: true, default: Date.now() },
});

const autoPopulateStudent = function(next) {
    this.populate({
        path: '_student',
        select: 'name email ra _room'
    });
    next();
};

loanSchema.pre('find', autoPopulateStudent);

module.exports = mongoose.model('Loan', loanSchema);
