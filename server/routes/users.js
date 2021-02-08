const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

router.get('/:id', async (req, res, next) => {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return next(new HttpError('Invalid ID', 400));
  }

  let user;
  try {
    user = await db.query('SELECT * FROM users WHERE user_id = $1', [userId]);
  } catch (ex) {
    return next(new HttpError());
  }
  if (!user.rowCount) {
    return next(new HttpError('Cannot find User', 404));
  }

  res.status(200).send(user.rows);
});

router.post('/', async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  let user;
  try {
    user = await db.query(`INSERT INTO users (user_name, email, password)
    VALUES($1, $2, $3) RETURNING *`, [username, email, hashed]);
  } catch (ex) {
    let message, code;
    if (ex.code === '23505') {
      message = 'Email already exists';
      code = 400;
    }
    return next(new HttpError(message || 'Unexpected error', code || 500));
  }
  const token = jwt.sign({ id: user.rows[0].user_id }, process.env.JWT_PRIV_KEY);
  res.header('x-auth-token', token).status(201).send(user.rows);
});

module.exports = router;
