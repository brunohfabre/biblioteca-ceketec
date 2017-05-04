const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    ra: { type: String, required: true },
    _room: { type: Schema.ObjectId, ref: 'Room' },
    createdAt: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model('Student', studentSchema);
