// make connection to server from db

const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/reviews');

module.exports = db;