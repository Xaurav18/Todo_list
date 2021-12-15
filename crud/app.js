const express = require('express');

const app = express();
const port = 5000;

app.listen(port, (req, res) => {
  console.log('you are listening to port:', port);
});

app.get('/', (req, res) => {
  res.status(200).send('All is working');
});
