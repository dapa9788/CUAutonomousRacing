# CU Autonomous Racing - Voting Backend

Simple Node.js/Express backend for the "Name our First Car" voting system.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

3. **Server will run on:** `http://localhost:3001`

## 📡 API Endpoints

### Get Vote Counts
```
GET /api/votes
```
Returns all car names and their vote counts.

### Submit a Vote
```
POST /api/votes/:carName
```
Submit a vote for a specific car. Valid names: Lightning, Thunder, Velocity, Phoenix

### Get Results with Totals
```
GET /api/votes/results
```
Returns vote counts plus total vote count.

### Health Check
```
GET /api/health
```
Check if the API is running.

## 🗄️ Database

Uses SQLite database (`votes.db`) with the following schema:

```sql
CREATE TABLE car_votes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  car_name TEXT UNIQUE NOT NULL,
  vote_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 Usage Examples

```javascript
// Get current votes
fetch('http://localhost:3001/api/votes')
  .then(res => res.json())
  .then(data => console.log(data));

// Submit a vote
fetch('http://localhost:3001/api/votes/Lightning', { method: 'POST' })
  .then(res => res.json())
  .then(data => console.log(data));
```