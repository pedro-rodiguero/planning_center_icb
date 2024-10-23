const express = require('express');
const Member = require('../models/MemberModel');

const router = express.Router();

// Create member
router.post('/', async (req, res) => {
  const { name, role } = req.body;
  try {
    const member = new Member({ name, role });
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Read members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Update member
router.put('/:id', async (req, res) => {
  const { name, role } = req.body;
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, { name, role }, { new: true });
    res.json(member);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Delete member
router.delete('/:id', async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Member deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;