const express = require('express');
const db = require('../db');
const HttpError = require('../models/Http-Error');
const validate = require('../validation/validate');
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

router.post('/', async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }
  const { username, email, password } = req.body;

  let user;
  try {
    user = await db.query(`INSERT INTO users (user_name, email, password)
    VALUES($1, $2, $3) RETURNING *`, [username, email, password]);
  } catch (ex) {
    let message, code;
    if (ex.code === '23505') {
      message = 'Email already exists';
      code = 400;
    }
    return next(new HttpError(message || 'Unexpected error', code || 500));
  }

  res.status(201).send(user.rows);
});

module.exports = router;
