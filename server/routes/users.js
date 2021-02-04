const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", async(req, res, next) => {
  let users;
  try {
    users = await db.query(`SELECT * FROM users`);
  }
  catch() {

  }

  res.status(200).send(users);
});

module.exports = router;
