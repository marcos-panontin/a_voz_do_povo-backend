const connection = require('./connection');

const checkIfUserExists = async (userId) => {
  const [user] = await connection.execute(
    'SELECT * FROM users WHERE user_id = ?',
    [userId],
  );
  return user;
};

const create = async (userId) => {
  await connection.execute(
    'INSERT INTO users (user_id) VALUES (?)',
    [userId],
  );
};

module.exports = { checkIfUserExists, create }