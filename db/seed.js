
const db = require('./index.js');
const Review = require('./reviews.js');
const Faker = require('faker');
const mongoose = require('mongoose');

// const db = mongoose.connect('mongodb://172.17.0.3:27017/reviews');

//evenly represent ratings 1-5 stars
const getRandomRatingInt = () => {
  min = Math.ceil(1);
  max = Math.floor(5);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
};

var fakeDocs = [];
for (let i = 0; i < 100; i ++) { 
  let fakeDoc = {
    userName: Faker.fake("{{name.firstName}}, {{name.lastName}}"),
    textBody: Faker.lorem.paragraph(),
    datePosted: Date.now(),
    avatar: "https://picsum.photos/48/48",
    ratings: {
      accuracy: getRandomRatingInt(),
      communication: getRandomRatingInt(),
      cleanliness: getRandomRatingInt(),
      location: getRandomRatingInt(),
      checkIn: getRandomRatingInt(),
      value: getRandomRatingInt(),
    },
  };
  fakeDocs.push(fakeDoc);
}

Review.insertMany(fakeDocs, (err, docs) => {
  if (err) {
    console.log(err);
  } else {
    console.log("first element of insertion array:", fakeDocs[0]);
    db.mongoose.connection.close();
    // mongoose.disconnect();
  }
});



