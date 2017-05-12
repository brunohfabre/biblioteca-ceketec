const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    name: { type: String, required: true },
    _rooms: [{ type: Schema.ObjectId, ref: 'Room', required: true }],
    createdAt: { type: Date, required: true, default: Date.now() },
});

const autoPopulateRooms = function(next) {
    this.populate({
        path: '_rooms',
        select: 'name _students'
    });
    next();
};

unitSchema.pre('find', autoPopulateRooms);

module.exports = mongoose.model('Unit', unitSchema)
