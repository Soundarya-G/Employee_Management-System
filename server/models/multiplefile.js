const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const multipleFileSchema = new Schema({
    files:[Object]
},{timestamps: true});

module.exports = mongoose.model('MultipleFile', multipleFileSchema);