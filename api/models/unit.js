const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model('Unit', unitSchema)
