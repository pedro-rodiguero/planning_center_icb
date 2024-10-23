const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceAccount.json');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/worship-teams', require('./routes/worshipTeamsRoute'));
app.use('/api/setlists', require('./routes/setlistsRoute'));
app.use('/api/schedules', require('./routes/scheduleRoute'));
app.use('/api/members', require('./routes/membersRoute'));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));