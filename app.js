const express = require('express');
const app = express();

const mongoose = require('mongoose');
const body_parser = require('body-parser');

const bio_routes = require('./api/routes/bio/');
const status_routes = require('./api/routes/status/');

mongoose.connect(); //TODO

app.use(body_parser.urlenncoded({extended : false}));
app.use(body_parser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Accept-Language', 'en');
}));

app.use('/bio', bio_routes)
app.use('/status', status_routes)

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
