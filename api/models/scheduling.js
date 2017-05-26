const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schedulingSchema = new Schema({
    _student: { type: Schema.ObjectId, ref: 'Student', required: true },
    quantity: { type: Number, required: true },
    date: { type: Date, required: true },
    start_time: { type: String },
    end_time: { type: String },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const autoPopulateStudents = function(next) {
    this.populate({
        path: '_students',
        select: 'name email ra _room'
    });
    next();
};

schedulingSchema.pre('find', autoPopulateStudents);

module.exports = mongoose.model('Scheduling', schedulingSchema);
