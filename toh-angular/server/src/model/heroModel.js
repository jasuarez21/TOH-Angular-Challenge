const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
  id: String,
  name: String,
});

module.exports = mongoose.model('Heroes', heroSchema);
