const connection = require('./connection');

const checkIfUserExists = async (userId) => {
  console.log('entrou na checkIfUserExists');
  const [user] = await connection.execute(
    'SELECT * FROM users WHERE user_id = ?',
    [userId],
  );
  return user;
};

const create = async (userId) => {
  console.log('entrou na create');
  await connection.execute(
    'INSERT INTO users (user_id) VALUES (?)',
    [userId],
  );
};

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM users',
  );
  return users;
};


module.exports = { checkIfUserExists, create, getAll }