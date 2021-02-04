const express = require('express');
const db = require('../db');
const HttpError = require('../models/Http-Error');
const router = express.Router();

router.get('/', async (req, res, next) => {
  let users;
  try {
    users = await db.query('SELECT * FROM users');
  } catch (e) {
    return next(new HttpError());
  }

  res.status(200).send(users.rows);
});

module.exports = router;
