const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Bio = require('../models/bio');

router.get('/', (req, res, next) => {
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

router.get('/:cat_name', (req, res, next) => {
  const cat_name = req.params.cat_name;
  Bio.findOne({name: cat_name})
    .exec()
    .then(cat => {
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
