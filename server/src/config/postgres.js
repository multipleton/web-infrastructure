const { Pool } = require('pg');

const pool = new Pool({
  host: 'wi-postgres',
  port: 5432,
  database: 'p-wi',
  user: 'p-wi-user',
  password: 'p-wi-password',
});

module.exports = { pool };
