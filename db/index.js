
const mongoose = require('mongoose');

// mongoose.connect('mongodb://172.17.0.2:27017/reviews');
mongoose.connect('mongodb://localhost/reviews');

module.exports.mongoose = mongoose;