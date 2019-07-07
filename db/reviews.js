
const mongoose = require('mongoose');
const db = require('./index.js');
const autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
require('mongoose-type-url');

const Url = mongoose.SchemaTypes.Url;

// autoIncrement.initialize(db);

//currently schema not supporting child comments
//ID auto-incrementing to allow for references from
//child collection reviews at later date
const reviewSchema = new Schema({
  userName: String,
  textBody: String,
  datePosted: {
    type: Date,
    default: Date.now,
  },
  avatar: Url,
  ratings: {
    accuracy: Number,
    communication: Number,
    cleanliness: Number,
    location: Number,
    checkIn: Number,
    value: Number,
  },
});

// reviewSchema.plugin(autoIncrement.plugin, 'Review');

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
