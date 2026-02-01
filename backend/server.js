const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const dbPath = path.join(__dirname, 'votes.db');
const db = new sqlite3.Database(dbPath);

// Initialize database
db.serialize(() => {
  // Create votes table if it doesn't exist
  db.run(`CREATE TABLE IF NOT EXISTS car_votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    car_name TEXT UNIQUE NOT NULL,
    vote_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Insert initial car options if they don't exist
  const carNames = ['Lightning', 'Thunder', 'Velocity', 'Phoenix'];
  
  carNames.forEach(name => {
    db.run(`INSERT OR IGNORE INTO car_votes (car_name, vote_count) VALUES (?, 0)`, [name]);
  });
});

// API Routes

// Get all vote counts
app.get('/api/votes', (req, res) => {
  db.all('SELECT car_name, vote_count FROM car_votes ORDER BY vote_count DESC', (err, rows) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

// Submit a vote
app.post('/api/votes/:carName', (req, res) => {
  const carName = req.params.carName;
  
  // Validate car name
  const validNames = ['Lightning', 'Thunder', 'Velocity', 'Phoenix'];
  if (!validNames.includes(carName)) {
    return res.status(400).json({ error: 'Invalid car name' });
  }

  db.run('UPDATE car_votes SET vote_count = vote_count + 1 WHERE car_name = ?', [carName], function(err) {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }

    // Return updated vote count
    db.get('SELECT vote_count FROM car_votes WHERE car_name = ?', [carName], (err, row) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ 
        car_name: carName, 
        vote_count: row.vote_count,
        message: 'Vote recorded successfully' 
      });
    });
  });
});

// Get voting results (same as /api/votes but with total count)
app.get('/api/votes/results', (req, res) => {
  db.all('SELECT car_name, vote_count FROM car_votes ORDER BY vote_count DESC', (err, rows) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    
    const totalVotes = rows.reduce((sum, row) => sum + row.vote_count, 0);
    
    res.json({
      results: rows,
      total_votes: totalVotes
    });
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Voting API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Voting API server running on port ${PORT}`);
  console.log(`📊 Database: ${dbPath}`);
  console.log(`🌐 API endpoints:`);
  console.log(`   GET  /api/votes - Get vote counts`);
  console.log(`   POST /api/votes/:carName - Submit vote`);
  console.log(`   GET  /api/votes/results - Get results with totals`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('✅ Database connection closed');
    }
    process.exit(0);
  });
});