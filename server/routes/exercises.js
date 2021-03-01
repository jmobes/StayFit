const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const { validateExercise } = require("../validation/validate");
const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return next(new HttpError("Invalid user id"));
  }
  try {
    const rootExercises = await db.query(
      "SELECT * FROM exercises WHERE user_id = $1 ORDER BY name",
      [1]
    );
    const userExercises = await db.query(
      "SELECT * FROM exercises WHERE user_id = $1 ORDER BY name",
      [userId]
    );
    res.status(200).json([...userExercises.rows, ...rootExercises.rows]);
  } catch (ex) {
    return next(new HttpError());
  }
});

router.get("/", async (req, res, next) => {
  try {
    const exercises = await db.query();
  } catch (ex) {
    return next(new HttpError());
  }
});

router.post("/", async (req, res, next) => {
  const { error } = validateExercise(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message), 400);
  }

  try {
    const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
      req.body.user_id,
    ]);
    if (user.rowCount < 1) {
      return next(new HttpError("Could not find user", 404));
    }

    const exercise = await db.query(
      "INSERT INTO exercises (user_id, name) VALUES ($1, $2) RETURNING *",
      [req.body.user_id, req.body.name.toLowerCase()]
    );
    res.status(201).json(exercise.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

router.delete("/:id", async (req, res, next) => {
  const exerciseId = Number(req.params.id);
  if (isNaN(exerciseId)) {
    return next(new HttpError("Invalid ID", 400));
  }

  try {
    const exercise = await db.query(
      "DELETE FROM exercises WHERE exercise_id = $1 RETURNING *",
      [exerciseId]
    );
    if (exercise.rowCount < 1) {
      return next(new HttpError("Exercise with that ID does not exist"), 404);
    }
    res.status(200).json(exercise.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

module.exports = router;
