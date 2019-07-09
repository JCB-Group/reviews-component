const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});