const express = require("express");
const db = require("../db");
const HttpError = require("../models/Http-Error");
const { validateRoutine } = require("../validation/validate");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const routines = await db.query("SELECT * FROM routines");
    res.status(200).json(routines.rows);
  } catch (ex) {
    return next(new HttpError());
  }
});

router.post("/", async (req, res, next) => {
  const { error } = validateRoutine(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  const { userId } = req.body;
  if (!Number(userId)) {
    return next(new HttpError("Please enter a valid userId", 400));
  }
  try {
    const user = await db.query("SELECT * FROM users WHERE user_id = $1", [
      userId,
    ]);
    if (user.rowCount < 1) {
      return next(new HttpError("Could not find user in database", 404));
    }
  } catch (ex) {
    return next(new HttpError());
  }

  try {
    const routine = await db.query(
      "INSERT INTO routines (user_id) VALUES ($1) RETURNING *",
      [userId]
    );
    res.status(201).json(routine.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

router.patch("/:routineId", async (req, res, next) => {
  const { routineId } = req.params;
  if (!Number(routineId)) {
    return next(new HttpError("Please enter a valid routine or user ID"));
  }

  try {
    const routine = await db.query(
      "SELECT * FROM routines WHERE routine_id = $1",
      [routineId]
    );
    if (routine.rowCount < 1) {
      return next(
        new HttpError("Could not find routine with the given ID", 404)
      );
    }

    const update = await db.query(
      "UPDATE routines SET date_end = CURRENT_DATE WHERE routine_id = $1 RETURNING *",
      [routineId]
    );

    res.status(200).json(update.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

router.delete("/:id", async (req, res, next) => {
  const routine_id = Number(req.params.id);

  try {
    const routine = await db.query(
      "DELETE FROM routines WHERE routine_id = $1 RETURNING *",
      [routine_id]
    );
    if (routine.rowCount < 1) {
      return next(new HttpError("Routine does not exist", 404));
    }

    res.status(200).json(routine.rows[0]);
  } catch (ex) {
    return next(new HttpError());
  }
});

module.exports = router;
