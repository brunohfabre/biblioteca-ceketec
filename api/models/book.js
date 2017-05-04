const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: { type: String, required: true },
    edition: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model('Book', bookSchema);
