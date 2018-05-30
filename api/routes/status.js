const mongoose = require('mongoose');
const express = require('express');
const Router = express.Router();

const Status = require('../routes/status'); 
const activities = require('../resources/activities');
const utils = require('../resources/utils');

Router.get('/', (req, res, next) => {
  res.status(200).json({
  message: 'Please specify a cat, for example /status/Cheesecake'
  });
});

Router.get('/:cat_name', (req, res, next) => {
  const cat_name = req.params.cat_name;
  Status
  .findOne({ name: cat_name })
  .exec()
  .then(cat_status => {
    if (cat_status == null) {
    res.status(404).json({
      message: `No cat by the name of ${cat_name}!`
    });
    } else {
    // if activity expired
    // roll a new activity, update the doc
    if (cat_status.expiry < Date.now) {
      const new_activity = utils.getNewActivity(old);
      const new_expiry = utils.getNewExpiry(activity);
      Status.update({ name: cat_name }, { activity: new_activity, expiry: new_expiry });
    }
    // return the activity
    res.status(200).json({
      'status': cat_status.activity
    });
    }
  });
  .catch(err => {
    res.status(500).json({
    error:err
    });
  });
});
