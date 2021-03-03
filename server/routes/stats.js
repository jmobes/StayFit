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

  const { set, reps, weight, routine_exercise_id, user_id } = req.body;
  try {
    const stats = await db.query(
      `INSERT INTO stats (set, reps, weight, routine_exercise_id, user_id)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [set, reps, weight, routine_exercise_id, user_id]
    );
    res.status(201).json(stats.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

module.exports = router;
