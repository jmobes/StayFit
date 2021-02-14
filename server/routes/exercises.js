const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const { validateExercise } = require("../validation/validate");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const exercises = await db.query("SELECT * FROM exercises");
    res.status(200).send(exercises.rows);
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
    const exercise = await db.query(
      "INSERT INTO exercises (name) VALUES ($1)",
      [req.body.name]
    );
    res.status(201).send(exercise.rows[0]);
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
    res.status(200).send(exercise.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

module.exports = router;
