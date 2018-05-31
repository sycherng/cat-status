const mongoose = require('mongoose');
const express = require('express');
const Router = express.Router();

const Bio = require('../models/bio');

Router.get('/:cat_name', (req, res, next) => {
  const cat_name = req.params.cat_name;
  Bio.findOne({'name': cat_name})
    .exec()
    .then(cat => {
      console.log('database returned', cat)
      if (cat == null) {
        res.status(404).json({
          message: `No cat by the name of ${cat_name}!`
        });
      } else {
        res.status(200).json(cat);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
});

Router.get('/', (req, res, next) => {
  console.log('200 GET for /');
  Bio.find()
    .exec()
    .then(entries => {
      res.status(200).json(entries);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
});

module.exports = Router;
