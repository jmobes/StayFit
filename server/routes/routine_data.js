const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const router = express.Router();

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
      `SELECT u.user_name, r.routine_id, r.date_start, r.date_end, re.routine_exercise_id, e.name, s.reps, s.weight
       FROM users u
       JOIN stats s
       ON u.user_id = s.user_id
       JOIN routine_exercises re
       ON s.routine_exercise_id = re.routine_exercise_id
       JOIN exercises e
       ON e.exercise_id = re.exercise_id
       JOIN routines r
       ON u.user_id = r.user_id
       WHERE u.user_id = $1 AND r.routine_id = $2`,
      [user_id, routine_id]
    );

    res.status(200).json(routineData.rows);
  } catch (ex) {
    return next(new HttpError());
  }
});

module.exports = router;
