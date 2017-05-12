const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: { type: String, required: true },
    _unit: { type: Schema.ObjectId, ref: 'Unit', required: true },
    _students: [{ type: Schema.ObjectId, ref: 'Student', required: true }],
    createdAt: { type: Date, required: true, default: Date.now() },
});

const autoPopulateUnit = function(next) {
    this.populate({
        path: '_unit',
        select: 'name'
    });
    this.populate({
        path: '_students',
        select: 'name email ra'
    });
    next();
};

roomSchema.pre('find', autoPopulateUnit);

module.exports = mongoose.model('Room', roomSchema);
