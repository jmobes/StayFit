require('dotenv').config();
const express = require('express');
const staticMiddleware = require('./static-middleware');
const HttpError = require('./models/Http-Error');
const users = require('./routes/users');
const auth = require('./routes/auth');
const app = express();

app.use(express.json());
app.use(staticMiddleware);
app.use('/api/users', users);
app.use('/api/auth', auth);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.send(error.message || 'An unexpected error occurred');
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
