const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const { validateRoutineExercise } = require("../validation/validate");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const routine_exercises = await db.query("SELECT * FROM routine_exercises");
    res.status(200).send(routine_exercises.rows);
  } catch (ex) {
    return next(new HttpError());
  }
});

router.post("/", async (req, res, next) => {
  const { error } = validateRoutineExercise(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  const { routine_id, exercise_id } = req.body;
  if (!Number(routine_id) || !Number(exercise_id)) {
    return next(new HttpError("Please send a valid routine or exercise ID"));
  }
  try {
    const routine = await db.query(
      "SELECT * FROM routines WHERE routine_id = $1",
      [routine_id]
    );
    if (routine.rowCount < 1) {
      return next(new HttpError("Routine does not exist", 404));
    }
    const exercise = await db.query(
      "SELECT * FROM exercises WHERE exercise_id = $1",
      [exercise_id]
    );
    if (exercise.rowCount < 1) {
      return next(new HttpError("Exercise does not exist", 404));
    }
    const routine_exercise = await db.query(
      "INSERT INTO routine_exercises (routine_id, exercise_id) VALUES ($1, $2) RETURNING *",
      [routine_id, exercise_id]
    );
    res.status(201).send(routine_exercise.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

module.exports = router;
