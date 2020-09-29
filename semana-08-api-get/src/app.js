const express = require('express');
const app = express();

const index = require('./routes/index');
const series = require('./routes/seriesRoute');

app.use('/', (req, res, next) => {
    console.log('Nova requisicao realizada');
    next();
});

app.use('/', index);
app.use('/', series);

app.use('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

module.exports = app;