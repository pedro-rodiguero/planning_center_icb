const express = require('express');
const Setlist = require('../models/SetlistModel');

const router = express.Router();

// Create setlist
router.post('/', async (req, res) => {
  const { name, songs } = req.body;
  try {
    const setlist = new Setlist({ name, songs });
    await setlist.save();
    res.status(201).json(setlist);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Read setlists
router.get('/', async (req, res) => {
  try {
    const setlists = await Setlist.find();
    res.json(setlists);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update setlist
router.put('/:id', async (req, res) => {
  const { name, songs } = req.body;
  try {
    const setlist = await Setlist.findByIdAndUpdate(req.params.id, { name, songs }, { new: true });
    res.json(setlist);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete setlist
router.delete('/:id', async (req, res) => {
  try {
    await Setlist.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Setlist deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;