// server/index.js

const express = require('express');
const cors = require('cors');
const feed = require('./feed/sample.json');

const PORT = 3001;

const app = express();

app.use(cors());

app.get('/series', (req, res) => {
    const allSeries = feed.entries.filter((show) => show.programType === 'series');

    const sortedSeries = allSeries.sort((a, b) => (a.title < b.title ? -1 : 11));

    res.json(sortedSeries.slice(0, 20));
});

app.get('/movies', (req, res) => {
    const allMovies = feed.entries.filter((show) => show.programType === 'movie');

    const sortedMovies = allMovies.sort((a, b) => (a.title < b.title ? -1 : 11));

    res.json(sortedMovies.slice(0, 20));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
