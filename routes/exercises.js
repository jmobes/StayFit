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
    const alreadyLogged = await db.query(
      `
    SELECT DISTINCT e.name, e.user_id, e.name
    FROM users u
    JOIN routines r ON u.user_id = r.user_id
    JOIN routine_exercises re ON r.routine_id = re.routine_id
    JOIN exercises e ON e.exercise_id = re.exercise_id
    JOIN stats s ON s.routine_exercise_id = re.routine_exercise_id
    WHERE u.user_id = $1 AND r.date_end IS NULL
    ORDER BY e.name
    `,
      [userId]
    );

    const rootExercises = await db.query(
      "SELECT * FROM exercises WHERE user_id = $1 ORDER BY name",
      [1]
    );

    const user_exercises = await db.query(
      "SELECT * FROM exercises WHERE user_id = $1 ORDER BY name",
      [userId]
    );

    const exerciseList = [
      ...user_exercises.rows,
      ...rootExercises.rows,
      ...alreadyLogged.rows,
    ];

    const updatedList = exerciseList.filter(
      (exercise) =>
        exerciseList.filter((e) => e.name === exercise.name).length === 1
    );

    res.status(200).json(updatedList);
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

    const duplicate = await db.query(
      "SELECT * FROM exercises WHERE name = $1",
      [req.body.name.toLowerCase()]
    );

    if (duplicate.rows.length) {
      duplicate.rows.forEach((data) => {
        if (data.user_id === 1 || data.user_id === user.rows[0].user_id) {
          throw new HttpError("Duplicate Exercise", 400);
        }
      });
    }

    const exercise = await db.query(
      "INSERT INTO exercises (user_id, name) VALUES ($1, $2) RETURNING *",
      [req.body.user_id, req.body.name.toLowerCase()]
    );

    res.status(201).json(exercise.rows[0]);
  } catch (ex) {
    return next(new HttpError(ex.message, ex.errorCode));
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
    return next(new HttpError(ex.message));
  }
});

module.exports = router;
