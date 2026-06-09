const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/portfolio', (req, res) => {
  const portfolioData = {
    name: 'Shanmukh Praharaju',
    title: 'Full Stack Developer & Data Analyst',
    email: 'spraharaju@umass.edu',
    phone: '+1 413-409-4080',
    location: 'Amherst, MA',
    summary: 'Computer Science student with strong experience in Python, JavaScript, and full-stack development.'
  };
  res.json(portfolioData);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  console.log('Contact message received:', { name, email, message });
  res.status(200).json({ success: true, message: 'Message received! I will get back to you soon.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
