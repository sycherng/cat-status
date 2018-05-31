const mongoose = require('mongoose');
const express = require('express');
const Router = express.Router();

const Bio = require('../models/bio');
const Status = require('../models/status'); 
const activities = require('../../resources/activities');
const utils = require('../../resources/utils');

Router.get('/', (req, res, next) => {
  res.status(200).json({
  message: 'Please specify a cat, for example /status/Cheesecake'
  });
});

Router.get('/:cat_name', (req, res, next) => {
  const cat_name = req.params.cat_name; 
  var cat_id;

  //load the cat bio
  Bio.findOne({'name': cat_name}).exec()

  //using cat id load the status
  .then(cat_doc => {
    if (cat_doc == null) {
      res.status(404).json({
        message: `No cat by the name of ${cat_name}.`
      })
    };
    cat_id = cat_doc._id;
    return Status.findOne({'_id': cat_id}).exec();
  })

  //check if activity has expired
  .then(cat_status => {
    console.log(cat_status);
    var activity;
    //if activity expired, roll a new activity and update the doc
    if (cat_status.expiry < Date.now()) {
      const new_activity = utils.getNewActivity(cat_status.activity);
      const new_expiry = utils.getNewExpiry(new_activity);
      Status.update({'_id': cat_id}, {'activity': new_activity.name, 'expiry': new_expiry }).exec();
      activity = new_activity.name;
    } else {
      activity = cat_status.activity;
    }
//    activity = 'meowing';
    res.status(200).json({
        message: `${cat_name} is currently ${activity}.`
    })
  })

  .catch(err => {
    next(err);
  });
});
  
module.exports = Router;
