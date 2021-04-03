require("dotenv").config();
const express = require("express");
const cors = require("cors");
const HttpError = require("./models/Http-Error");
const authorize = require("./middleware/authorize");
const users = require("./routes/users");
const authenticate = require("./routes/authenticate");
const routines = require("./routes/routines");
const exercises = require("./routes/exercises");
const routine_exercises = require("./routes/routine_exercises");
const stats = require("./routes/stats");
const routine_data = require("./routes/routine_data");
const max = require("./routes/max");
const progress = require("./routes/progress");
const PORT = process.env.PORT || 5000;
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "frontend/build")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json();
  }
  next();
});

app.use("/api/users", users);
app.use("/api/authenticate", authenticate);
app.use("/api/routines", routines);
app.use("/api/exercises", exercises);
app.use("/api/routine-exercises", routine_exercises);
app.use("/api/stats", stats);
app.use("/api/routine-data", routine_data);
app.use("/api/max", max);
app.use("/api/progress", progress);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  console.log(path.join(__dirname, "frontend/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json(error.message || "An unexpected error occurred");
});

app.listen(PORT, () => {
  console.log(`express server listening on port ${PORT}`);
});
