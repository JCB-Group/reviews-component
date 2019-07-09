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
      console.log('success');
      res.send(results);
    }
  });
});