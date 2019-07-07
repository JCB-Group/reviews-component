//define schema and create DB

const mongoose = require('mongoose');
const db = require('./index.js');
var Schema = mongoose.Schema;

const reviewSchema = new Schema({
  reviewID: Number,
  userName: String,
  textBody: String,
  datePosted: {
    type: Date,
    default: Date.now,
  },
  ratings: {
    accuracy: Number,
    communication: Number,
    cleanliness: Number,
    location: Number,
    checkIn: Number,
    value: Number,
  },
  childComments: [{
    id: Number,
  }],
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
