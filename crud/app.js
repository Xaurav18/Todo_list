const express = require('express');

const app = express();
const port = 5000;
const connectDb = require('./db/connect');
//Require dotenv
require('dotenv').config();

//req router
const router = require('./routers/crud');

//Middleware
app.use(express.json());

//Route
app.use('/api/v1/crud');

//Connection
const start = async () => {
  try {
    await connectDb(process.env.MONGO_CONNECT);
    app.listen(port, (req, res) => {
      console.log('your are listening to port:', port);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

/*app.listen(port, (req, res) => {
  console.log('you are listening to port:', port);
});

app.get('/about', (req, res) => {
  res.status(200).send('All is well');
}); */
