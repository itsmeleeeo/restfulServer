'use-strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
let msgSchema = new schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Messages', schema);