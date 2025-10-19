const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// -----------------------------
// 1️⃣ Serve static files
// -----------------------------
app.use(express.static(path.join(__dirname, 'public'))); 

// -----------------------------
// 2️⃣ Handlebars setup
// -----------------------------
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// -----------------------------
// 3️⃣ Routes
// -----------------------------
app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/team', (req, res) => {
    res.render('pages/team');
});

app.get('/projects', (req, res) => {
    res.render('pages/projects');
});

app.get('/join', (req, res) => {
    res.render('pages/join');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/sponsors', (req, res) => {
    res.render('pages/sponsors');
});

app.get('*', (req, res) => {
    res.redirect('/');
});

// -----------------------------
// 4️⃣ Start server
// -----------------------------
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
