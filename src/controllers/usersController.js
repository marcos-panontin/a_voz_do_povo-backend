const { users } = require('../models');

const getAll = async (_req, res) => {
  const allUsers = await users.getAll();
  return res.status(200).json(allUsers);
};

module.exports = { getAll };