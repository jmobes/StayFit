const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const { validateStats } = require("../validation/validate");
const router = express.Router();

router.get("/:id", async (req, res, next) => {
  const statsId = Number(req.params.id);
  if (isNaN(statsId)) {
    return next(new HttpError("Invalid ID", 400));
  }

  let stats;
  try {
    stats = await db.query("SELECT * FROM stats WHERE stats_id = $1", [
      statsId,
    ]);
  } catch (ex) {
    return next(new HttpError());
  }
  if (!stats.rowCount) {
    return next(new HttpError("Cannot find User", 404));
  }

  res.status(200).json(stats.rows);
});

router.post("/", async (req, res, next) => {
  const { error } = validateStats(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message), 400);
  }

  const { reps, weight, routine_exercise_id, user_id } = req.body;

  try {
    const stats = await db.query(
      `INSERT INTO stats (reps, weight, routine_exercise_id, user_id)
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [reps, weight, routine_exercise_id, user_id]
    );
    res.status(201).json(stats.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

router.delete("/:id", async (req, res, next) => {
  const exerciseId = Number(req.params.id);
  if (isNaN(exerciseId)) return next(new HttpError("Invalid ID", 400));

  const exercise = await db.query(
    "SELECT * FROM exercises WHERE exercise_id = $1",
    [exerciseId]
  );
  if (exercise.rowCount < 1)
    return next(new HttpError("Exercise with the given ID does not exist"));

  const routineExercise = await db.query(
    "SELECT * FROM routine_exercises WHERE exercise_id = $1",
    [exerciseId]
  );
  if (routineExercise.rowCount < 1)
    return next(new HttpError("Nothing to delete", 400));

  const stats = await db.query(
    "SELECT * FROM stats WHERE routine_exercise_id = $1"[
      routineExercise.rows[0].routine_exercise_id
    ]
  );
});

module.exports = router;
