const mongoose = require('mongoose');

const WorshipTeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('WorshipTeam', WorshipTeamSchema);