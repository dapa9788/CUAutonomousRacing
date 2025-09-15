const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/people', (req, res) => {
    res.render('pages/people');
});

app.get('/projects', (req, res) => {
    res.render('pages/projects');
});

app.get('/join', (req, res) => {
    res.render('pages/join');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});