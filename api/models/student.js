const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    ra: { type: String, required: true },
    _room: { type: Schema.ObjectId, ref: 'Room' },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const autoPopulateRoom = function(next) {
    this.populate({
        path: '_room',
        select: 'name _unit'
    });
    next();
};

studentSchema.pre('find', autoPopulateRoom);

module.exports = mongoose.model('Student', studentSchema);
