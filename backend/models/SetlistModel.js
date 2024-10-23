const mongoose = require('mongoose');

const SetlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  songs: [{ type: String }],
});

module.exports = mongoose.model('Setlist', SetlistSchema);