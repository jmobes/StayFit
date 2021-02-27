const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const { validateUserExercise } = require("../validation/validate");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const error = validateUserExercise(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }
  const { user_id, exercise_id } = req.body;

  try {
    const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
      user_id,
    ]);
    if (user.rows < 1) {
      return next(new HttpError("Could not find user", 400));
    }
    const exercise = await db.query(
      "SELECT * FROM exercises WHERE exercise_id = $1",
      [exercise_id]
    );
    if (exercise.rows < 1) {
      return next(new HttpError("Could not find exercise", 400));
    }
  }
});
