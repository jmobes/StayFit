const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const router = express.Router();

router.delete("/:id", async (req, res, next) => {
  const exerciseId = Number(req.params.id);
  if (isNaN(exerciseId)) {
    return next(new HttpError("Invalid ID", 400));
  }

  try {
    const routine_exercise_ids = await db.query(
      "SELECT routine_exercise_id FROM routine_exercises WHERE exercise_id = $1",
      [exerciseId]
    );
    const ids = routine_exercise_ids.rows;
    ids.forEach(async (id) => {
      const stat = await db.query(
        "DELETE FROM stats WHERE routine_exercise_id = $1 RETURNING *",
        [id.routine_exercise_id]
      );
    });

    const routineExercise = await db.query(
      "DELETE FROM routine_exercises WHERE exercise_id = $1 RETURNING *",
      [exerciseId]
    );

    const exercise = await db.query(
      "DELETE FROM exercises WHERE exercise_id = $1 RETURNING *",
      [exerciseId]
    );
    res.send(exercise.rows[0]);
  } catch (ex) {
    res.send(ex.message);
  }
});

router.get("/:uid/:rid", async (req, res, next) => {
  const user_id = Number(req.params.uid);
  const routine_id = Number(req.params.rid);

  if (isNaN(user_id) || isNaN(routine_id)) {
    return next(new HttpError("Please enter valid id", 400));
  }

  try {
    const user = await db.query(`SELECT * FROM users WHERE user_id = $1`, [
      user_id,
    ]);
    if (user.rowCount < 1) return next(new HttpError("User doesnt exist", 404));

    const routine = await db.query(
      `SELECT * FROM routines WHERE routine_id = $1`,
      [routine_id]
    );
    if (routine.rowCount < 1) {
      return next(new HttpError("Routine does not exist", 404));
    }

    const routineData = await db.query(
      `SELECT r.routine_id, re.routine_exercise_id, e.name, e.exercise_id, s.weight, s.reps
       FROM stats s
       JOIN routine_exercises re
       ON s.routine_exercise_id = re.routine_exercise_id
       JOIN exercises e
       ON e.exercise_id = re.exercise_id
       JOIN routines r
       ON r.routine_id = re.routine_id
       WHERE r.routine_id = $1`,

      // `SELECT u.user_name, r.routine_id, r.date_start, r.date_end, re.routine_exercise_id, e.name, e.exercise_id, s.reps, s.weight
      //  FROM users u
      //  JOIN stats s
      //  ON u.user_id = s.user_id
      //  JOIN routine_exercises re
      //  ON s.routine_exercise_id = re.routine_exercise_id
      //  JOIN exercises e
      //  ON e.exercise_id = re.exercise_id
      //  JOIN routines r
      //  ON u.user_id = r.user_id
      //  WHERE u.user_id = $1 AND r.routine_id = $2`,
      [routine_id]
    );

    res.status(200).json(routineData.rows);
  } catch (ex) {
    return next(new HttpError());
  }
});

module.exports = router;
