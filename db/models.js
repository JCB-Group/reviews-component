const mongoose = require('mongoose');
const db = require('./index.js');
const Review = require('./reviews.js');

const find = (callback) => {
  Review.find({}, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, buildResponseData(docs));
    }
  });
};

const search = (query, callback) => {
  Review.find({}, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      //loop across the strings, split them and search
      let returnData = [];
      for (let i = 0; i < docs.length; i++) {
        let words = docs[i].textBody.split('');
        for (let word = 0; word < words.length; word++) {
          if (words[word] === query) {
            returnData.push(docs[i]);
            break;
          }
        }
      }
      callback(null, buildResponseData(returnData));
    }
  });
};

const buildResponseData = (rawData) => {
  //takes array and calculates number of pages
  //sends back only the first page
  let numberOfPages = Math.ceil((rawData.length / 7));
  let pageOne = rawData.slice(0, 7);
  let data = [numberOfPages, pageOne];
  return data;
};

module.exports.find = find;
module.exports.search = search;