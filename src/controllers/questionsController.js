const { questions } = require('../models');

const getAll = async (_req, res) => {
  const allQuestions = await questions.getAll();
  return res.status(200).json(allQuestions);
};

module.exports = { getAll };