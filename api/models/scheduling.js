const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schedulingSchema = new Schema({
    _students: [{ type: Schema.ObjectId, ref: 'Student', required: true }],
    date: { type: String, required: true },
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
