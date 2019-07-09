const mongoose = require('mongoose');
const db = require('./index.js');
const Review = require('./reviews.js');

const find = (callback) => {
  Review.find({}, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  });
};

module.exports.find = find;