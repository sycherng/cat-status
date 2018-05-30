const mongoose = require('mongoose');

const bio_schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  breed: String,
  color: String,
  life_stage: String,
  sex: String,
  size: String
  personality: String
});

module.exports = mongoose.model('Bio', bio_schema);
