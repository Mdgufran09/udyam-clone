// udyam-backend/index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // To parse JSON request bodies

// API endpoint for form submissions
app.post('/api/submit', (req, res) => {
  console.log('Received form data:', req.body);

  // For now, we just send back a success message.
  // Later, we'll add database logic here.
  res.status(201).json({ message: 'Submission received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});