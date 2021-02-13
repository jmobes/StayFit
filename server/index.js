require("dotenv").config();
const express = require("express");
const HttpError = require("./models/Http-Error");
const users = require("./routes/users");
const authenticate = require("./routes/authenticate");
const routines = require("./routes/routines");
const exercises = require("./routes/exercises");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).send();
  }
  next();
});

app.use("/api/users", users);
app.use("/api/authenticate", authenticate);
app.use("/api/routines", routines);
app.use("/api/exercises", exercises);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.send(error.message || "An unexpected error occurred");
});

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
