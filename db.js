const { Pool } = require("pg");

const devConfig = {
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.DB_PORT || 5000,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
