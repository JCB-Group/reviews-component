const express = require('express');
const models = require('../db/models.js');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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