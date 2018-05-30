const activities = require('./activities.js');

export function randRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

export function getNewActivity(old) {
  const current_index = findIndex(old);
  var new_index = null;
  while (new_index == null || new_index == current_index) {
    new_index = randRange(0, activities.length);
  };
  return activities[new_index];
};

export function getNewExpiry(act) {
  const duration_in_milliseconds = randRange(act.min_duration, act.max_duration + 1) * 60 * 1000
  return duration_in_milliseconds + Date.now();
};
