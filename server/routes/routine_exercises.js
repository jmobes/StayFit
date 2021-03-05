const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const { validateRoutineExercise } = require("../validation/validate");
const router = express.Router();

router.get("/:routineId", async (req, res, next) => {
  const routineId = Number(req.params.routineId);
  if (isNaN(routineId)) {
    return next(new HttpError("Invalid routine ID", 400));
  }
  try {
    const routine_exercises = await db.query(
      `SELECT * FROM routine_exercises WHERE routine_id = $1`,
      [routineId]
    );
    res.status(200).json(routine_exercises);
  } catch (err) {
    return next(new HttpError(err.message));
  }
});

router.get("/:userId/:exerciseId", async (req, res, next) => {
  const userId = Number(req.params.userId);
  const exerciseId = Number(req.params.exerciseId);
  if (isNaN(userId) || isNaN(exerciseId)) {
    return next(new HttpError("Invalid user or exercise id", 400));
  }
  try {
    const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
      userId,
    ]);
    if (user.rows < 1) {
      return next(new HttpError("Could not find user", 404));
    }
    const exercise = await db.query(
      "SELECT * FROM exercises WHERE exercise_id = $1",
      [exerciseId]
    );
    if (exercise.rows < 1) {
      return next(new HttpError("Could not find exercise", 404));
    }
    const routine_exercises = await db.query(
      "SELECT * FROM routine_exercises WHERE user_id = $1 AND exercise_id = $2",
      [userId, exerciseId]
    );
    res.status(200).json(routine_exercises.rows);
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
    return next(new HttpError("Please enter a valid routine or exercise ID"));
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
    res.status(201).json(routine_exercise.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

module.exports = router;
