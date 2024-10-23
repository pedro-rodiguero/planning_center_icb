const express = require('express');
const Schedule = require('../models/Schedule');

const router = express.Router();

// Create schedule
router.post('/', async (req, res) => {
  const { date, teams } = req.body;
  try {
    const schedule = new Schedule({ date, teams });
    await schedule.save();
    res.status(201).json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Read schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find().populate('teams');
    res.json(schedules);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update schedule
router.put('/:id', async (req, res) => {
  const { date, teams } = req.body;
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, { date, teams }, { new: true });
    res.json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete schedule
router.delete('/:id', async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Schedule deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;