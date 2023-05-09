const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const HttpError = require('./models/http-error');
const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);
app.use(errorHandlerMiddleware);
app.use((req, res, next) => {
  throw new HttpError('Could not find route', 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error has occured.' });
});
mongoose
  .connect(
    'mongodb+srv://dsimpkins717:summer91@ratesomething.h72nmsx.mongodb.net/mern?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(5002);
  })
  .catch((err) => {
    console.log(err);
  });
