const express = require('express');
const models = require('../db/models.js');
const app = express();
const path = require('path');
const PORT = 3004;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//may need to add path.resolve to give absolute path rather than relative
app.use('/', express.static(path.resolve(__dirname, '/../client/dist')));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.get('/reviews', (req, res) => {
  models.find((err, results) => {
    if (err) {
      console.log(err);
      res.send();
    } else {
      console.log('successfully got initial page');
      res.send(results);
    }
  });
});

app.post('/reviews', (req, res) => {
  models.find((err, results) => {
    if (err) {
      console.log(err);
      res.send();
    } else {
      console.log('attempting to get new page');
      res.send(results);
    }
  }, req.body.pageNumber, req.body.searching, req.body.searchString);
});

app.post('/search', (req, res) => {
  console.log(req.body.searchString);
  console.log('we received a post request to search');
  models.search(req.body.searchString, (err, results) => {
    if (err) {
      console.log(err);
      res.send();
    } else {
      console.log('successfully searched');
      res.send(results);
    }
  });
});