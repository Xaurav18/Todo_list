const express = require('express');

const app = express();
const port = 5000;
const connectDb = require('./db/connect');
//Require dotenv
require('dotenv').config();

//Middleware
app.arguments(express.json());

//Connection
const start = async () => {
  await connectDb(process.env.MONGO_CONNECT);
  app.listen(port, (req, res) => {
    console.log('your are listening to port:', port);
  });
};
start();

/*app.listen(port, (req, res) => {
  console.log('you are listening to port:', port);
});

app.get('/about', (req, res) => {
  res.status(200).send('All is well');
}); */
