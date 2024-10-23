const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorshipTeam' }],
});

module.exports = mongoose.model('Schedule', ScheduleSchema);