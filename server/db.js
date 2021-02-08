const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.DB_PORT
});

module.exports = pool;
