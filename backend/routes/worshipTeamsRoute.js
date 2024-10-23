const express = require('express');
const admin = require('firebase-admin');

const router = express.Router();
const db = admin.firestore();

// Create worship team
router.post('/', async (req, res) => {
  const { name, members } = req.body;
  try {
    console.log('Creating worship team:', { name, members }); // Add logging
    const worshipTeamRef = db.collection('worshipTeams').doc();
    await worshipTeamRef.set({ name, members });
    const worshipTeam = await worshipTeamRef.get();
    res.status(201).json({ id: worshipTeam.id, ...worshipTeam.data() });
  } catch (err) {
    console.error(err); // Log the error details
    res.status(500).send('Server error');
  }
});

// Read worship teams
router.get('/', async (req, res) => {
  try {
    const worshipTeamsSnapshot = await db.collection('worshipTeams').get();
    const worshipTeams = worshipTeamsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(worshipTeams);
  } catch (err) {
    console.error(err); // Log the error details
    res.status(500).send('Server error');
  }
});

// Update worship team
router.put('/:id', async (req, res) => {
  const { name, members } = req.body;
  try {
    const worshipTeamRef = db.collection('worshipTeams').doc(req.params.id);
    await worshipTeamRef.update({ name, members });
    const worshipTeam = await worshipTeamRef.get();
    res.json({ id: worshipTeam.id, ...worshipTeam.data() });
  } catch (err) {
    console.error(err); // Log the error details
    res.status(500).send('Server error');
  }
});

// Delete worship team
router.delete('/:id', async (req, res) => {
  try {
    await db.collection('worshipTeams').doc(req.params.id).delete();
    res.json({ msg: 'Worship team deleted' });
  } catch (err) {
    console.error(err); // Log the error details
    res.status(500).send('Server error');
  }
});

module.exports = router;