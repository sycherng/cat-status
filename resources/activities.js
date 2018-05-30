class Activity {
  constructor(name, min_duration, max_duration) {
    this.name = name;
    this.min_duration = min_duration; //durations in minutes
    this.max_duration = max_duration;
  }
}

const activities = [
  new Activity('soliciting pats and food from neighbours', 3*60, 6*60), 
  new Activity('unrolling toilet paper', 3, 5),
  new Activity('playing with toys', 3, 15),
  new Activity('dumpster diving', 7, 1*60),
  new Activity('grooming', 3, 8),
  new Activity('using the litterbox', 1, 5),
  new Activity('out hunting', 4*60, 6*60),
  new Activity('eating', 3, 8),
  new Activity('cat-napping', 1*60, 3*60)
]

module.export = activities;
