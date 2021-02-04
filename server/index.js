require('dotenv').config();
const express = require('express');
const staticMiddleware = require('./static-middleware');
const users = require("./routes/users");
const app = express();

app.use(express.json());
app.use("/api/users", users);

app.use(staticMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
