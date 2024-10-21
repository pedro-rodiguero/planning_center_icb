const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const admin = require('firebase-admin');

const router = express.Router();
const db = admin.firestore();

// Register user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userRef = db.collection('users').doc();
    const userDoc = await db.collection('users').where('email', '==', email).get();
    if (!userDoc.empty) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    await userRef.set({ name, email, password: hashedPassword, role: 'volunteer' });

    const payload = { user: { id: userRef.id } };
    jwt.sign(payload, 'secret', { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await db.collection('users').where('email', '==', email).get();
    if (userDoc.empty) return res.status(400).json({ msg: 'Invalid credentials' });

    const user = userDoc.docs[0].data();
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const payload = { user: { id: userDoc.docs[0].id } };
    jwt.sign(payload, 'secret', { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;