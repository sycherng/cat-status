const activities_array = require('./activities.js');
const moment = require('moment');

function randRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getNewActivity(activity) {
    // (Activity) -> Activity
    // Randomly returns a different Activity than the one provided.
    const activity_index = activities_array.indexOf(activity);
    var new_activity_index;
    while (new_activity_index == null || new_activity_index == activity_index) {
        new_activity_index = randRange(0, activities_array.length);
    };
    return activities_array[new_activity_index];
}

function getNewExpiry(activity) {
    // (Activity) -> Date
    // Returns an expiry Date based on the activity's min and max duration attributes
    let duration_in_minutes = randRange(activity.min_duration, activity.max_duration);
    let expiry_date = moment(Date.now()).add(duration_in_minutes, 'm').toDate();
    return expiry_date
}

module.exports = {
  randRange,
  getNewActivity,
  getNewExpiry
};

