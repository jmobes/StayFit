const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const { validateExercise } = require("../validation/validate");
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("ROUTE WAS ACTIVATED");
  try {
    const exercises = await db.query("SELECT * FROM exercises");
    res.status(200).send(exercises.rows);
  } catch (ex) {
    return next(new HttpError());
  }
});

module.exports = router;
