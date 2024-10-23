const express = require('express');
const WorshipTeam = require('../models/WorshipTeam');

const router = express.Router();

// Create worship team
router.post('/', async (req, res) => {
  const { name, members } = req.body;
  try {
    const worshipTeam = new WorshipTeam({ name, members });
    await worshipTeam.save();
    res.status(201).json(worshipTeam);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Read worship teams
router.get('/', async (req, res) => {
  try {
    const worshipTeams = await WorshipTeam.find().populate('members');
    res.json(worshipTeams);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update worship team
router.put('/:id', async (req, res) => {
  const { name, members } = req.body;
  try {
    const worshipTeam = await WorshipTeam.findByIdAndUpdate(req.params.id, { name, members }, { new: true });
    res.json(worshipTeam);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete worship team
router.delete('/:id', async (req, res) => {
  try {
    await WorshipTeam.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Worship team deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;