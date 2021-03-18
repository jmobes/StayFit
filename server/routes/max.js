const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const router = express.Router();

router.get("/:uid", async (req, res, next) => {
  const userId = Number(req.params.uid);
  if (isNaN(userId)) return next(new HttpError("Invalid user ID", 400));

  try {
    const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
      userId,
    ]);
    if (user.rowCount < 1)
      return next(new HttpError("User does not exist", 400));

    const maxLifts = await db.query(
      `
    SELECT e.name, MAX(s.weight) AS max_weight, u.user_id, e.exercise_id
    FROM users u
    JOIN stats s ON u.user_id = s.user_id
    JOIN routine_exercises re
      ON s.routine_exercise_id = re.routine_exercise_id
    JOIN exercises e ON e.exercise_id = re.exercise_id
    WHERE u.user_id = $1
    GROUP BY e.name, u.user_id, e.exercise_id
    ORDER BY e.name;
    `,
      [userId]
    );

    res.status(200).json(maxLifts.rows);
  } catch (ex) {
    return next(new HttpError(ex.message));
  }
});

module.exports = router;
