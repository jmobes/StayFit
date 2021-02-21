const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");
const Joi = require("joi");
const HttpError = require("../models/Http-Error");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }
  const { email, password } = req.body;

  let user;
  try {
    user = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  } catch (ex) {
    return next(new HttpError());
  }
  if (!user.rowCount) {
    return next(new HttpError("Invalid email or password", 400));
  }

  let validPassword;
  try {
    validPassword = await bcrypt.compare(password, user.rows[0].password);
  } catch (ex) {
    return next(new HttpError());
  }

  if (!validPassword) {
    return next(new HttpError("Invalid email or password", 400));
  }

  const token = jwt.sign(
    { id: user.rows[0].user_id },
    process.env.JWT_PRIV_KEY
  );
  res.json(token);
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(req);
}

module.exports = router;
