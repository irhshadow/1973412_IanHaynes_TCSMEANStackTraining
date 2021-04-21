const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: { type: String },
    description: { type: String },
    amount: { type: Number }
});

module.exports = mongoose.model('course', courseSchema);