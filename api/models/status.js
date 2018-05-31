const mongoose = require('mongoose');

const status_schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    activity: String,
    expiry: Date
});

module.exports = mongoose.model('Status', status_schema);
