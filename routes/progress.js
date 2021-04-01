const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const router = express.Router();

router.get("/:uid/:eid", async (req, res, next) => {
  const userId = Number(req.params.uid);
  const exerciseId = Number(req.params.eid);

  if (isNaN(userId) || isNaN(exerciseId))
    return next(new HttpError("Invalid id", 400));

  try {
    const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
      userId,
    ]);
    if (user.rowCount < 1) return next(new HttpError("user not found", 404));

    const exercise = await db.query(
      "SELECT * FROM exercises WHERE exercise_id = $1",
      [exerciseId]
    );
    if (exercise.rowCount < 1)
      return next(new HttpError("exercise not found", 404));

    const data = await db.query(
      `
      SELECT u.user_name, r.date_end, r.routine_id, e.name, MAX(s.weight)
      FROM users u
      JOIN routines r ON u.user_id = r.user_id
      JOIN routine_exercises re ON r.routine_id = re.routine_id
      JOIN stats s ON re.routine_exercise_id = s.routine_exercise_id
      JOIN exercises e ON re.exercise_id = e.exercise_id
      WHERE u.user_id = $1 AND e.exercise_id = $2
      GROUP BY u.user_name, r.routine_id, e.name
      ORDER BY r.routine_id
      `,
      [userId, exerciseId]
    );

    res.status(200).json(data.rows);
  } catch (ex) {
    return next(new HttpError(ex.message));
  }
});

module.exports = router;
