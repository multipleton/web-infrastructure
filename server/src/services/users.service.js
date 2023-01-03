const { pool } = require('../config/postgres');

const findAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

const findUser = async (id) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE id=$1',
    [id],
  );
  return result.rows[0];
};

const createUser = async (name, country, stack) => {
  const result = await pool.query(
    'INSERT INTO users (name, country, stack) VALUES ($1, $2, $3)',
    [name, country, stack],
  );
  const { rowCount } = result;
  if (rowCount !== 1) throw new Error(`invalid rowCount: ${rowCount}`);
};

const updateUser = async (id, name, country, stack) => {
  const result = await pool.query(
    `UPDATE users SET name=$1, country=$2, stack=$3 WHERE id=$4`,
    [name, country, stack, id],
  );
  const { rowCount } = result;
  if (rowCount !== 1) throw new Error(`invalid rowCount: ${rowCount}`);
};

const removeUser = async (id) => {
  const result = await pool.query(
    `DELETE FROM users WHERE id=$1`,
    [id],
  );
  const { rowCount } = result;
  if (rowCount !== 1) throw new Error(`invalid rowCount: ${rowCount}`);
};

module.exports = {
  findAllUsers,
  findUser,
  createUser,
  updateUser,
  removeUser,
};
