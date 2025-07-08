// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'niqFu9-roxpin-vugtar',
  database: 'client_management'
});

// Graceful connection error handling
db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('✅ MySQL connected...');
});

// Register a client
app.post('/api/clients', (req, res) => {
  const { name, email, company, phone } = req.body;
  const sql = 'INSERT INTO Clients (name, email, company, phone) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, company, phone], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Client registered successfully', id: result.insertId });
  });
});


app.get('/api/clients', (req, res) => {
  const search = req.query.search;
  if (!search) return res.json([]);

  const sql = 'SELECT * FROM Clients WHERE name LIKE ? OR email LIKE ?';
  const value = `%${search}%`;

  db.query(sql, [value, value], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


// Schedule a meeting
app.post('/api/meetings', (req, res) => {
  console.log('📩 Meeting data received:', req.body); 

  const { client_id, date, time, notes } = req.body;

  if (!client_id || !date || !time || !notes) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = 'INSERT INTO Meetings (client_id, date, time, notes) VALUES (?, ?, ?, ?)';
  db.query(sql, [client_id, date, time, notes], (err, result) => {
    if (err) {
      console.error('❌ MySQL error:', err.message);
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: 'Meeting scheduled successfully', id: result.insertId });
  });
});


// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});


app.get('/api/meetings', (req, res) => {
  const sql = 'SELECT * FROM Meetings ORDER BY date DESC, time DESC';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
