const jwt = require("jsonwebtoken");
const HttpError = require("../models/Http-Error");

function authorize(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }
  const token = req.header("Authorization");
  if (!token) {
    return next(new HttpError("Access denied. No token provided.", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIV_KEY);
    req.user = decoded.id;
    next();
  } catch (ex) {
    return next(new HttpError("Invalid token.", 400));
  }
}

module.exports = authorize;
