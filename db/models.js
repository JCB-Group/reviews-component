const mongoose = require('mongoose');
const db = require('./index.js');
const Review = require('./reviews.js');

//called on initial page load
//paginates data and sends back first page
const find = (callback, page=0, searching=false, query) => {
  Review.find({}, (err, docs) => {
    if (err) {
      callback(err);
    } else if (searching === false) {
      callback(null, [paginateData(docs, page), calculateReviews(docs)]);
    } else if (searching === true) {
      console.log(query);
      search(query, callback, page);
    }
  });
};

const findAll = (callback, page=0) => {
  Review.find({}, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, paginateData(docs, page));
    }
  });
};

const calculateReviews = (docs) => {
  let numDocs = docs.length;
  let accuracy = 0;
  let communication = 0;
  let cleanliness = 0;
  let location = 0;
  let checkIn = 0;
  let value = 0;
  let averages = {};
  for (let i = 0; i < docs.length; i++) {
    let { ratings } = docs[i];
    accuracy += ratings.accuracy;
    communication += ratings.communication;
    cleanliness += ratings.cleanliness;
    location += ratings.location;
    checkIn += ratings.checkIn;
    value += ratings.value;
  }
  averages.accuracy = accuracy / numDocs;
  averages.communication = communication / numDocs;
  averages.cleanliness = cleanliness / numDocs;
  averages.location = location / numDocs;
  averages.checkIn = checkIn / numDocs;
  averages.value = value / numDocs;
  averages.total = (accuracy + communication + cleanliness + location + checkIn + value) / (numDocs * 6);
  return averages;
};

//called when the user searches
//builds array of matching reviews
//paginates those reviews and returns page one
//currently does not find all matching words
//it finds one instance of query and breaks loop
//in order to avoid pushing duplicate entries to return data
const search = (query, callback, page=0) => {
  Review.find({}, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      let returnData = [];
      for (let i = 0; i < docs.length; i++) {
        let words = docs[i].textBody.split(' ');
        for (let word = 0; word < words.length; word++) {
          if (words[word] === query) {
            returnData.push(docs[i]);
            break;
          }
        }
      }
      // console.log(returnData);
      // console.log(page);
      callback(null, paginateData(returnData, page));
    }
  });
};

//paginates reviews and sends first page
//can optionally take a second argument
//as a request for a specific page
const paginateData = (rawData, pageRequested) => {
  // console.log(pageRequested);
  // console.log(rawData);
  if (rawData.length === 0) {
    return [0, []];
  }
  let numberOfPages = Math.ceil((rawData.length / 7));
  let pages = [];
  let counter = 0;
  for (let i = 0; i < numberOfPages; i++) {
    let page = [];
    for (let c = 0; c < 7; c ++) {
      if (counter < rawData.length) {
        page.push(rawData[((i * 7) + c)]);
        counter += 1;
      }
    }
    pages.push(page);
  }
  return [pages.length, pages[pageRequested]];
};

module.exports.find = find;
module.exports.search = search;
module.exports.findAll = findAll;