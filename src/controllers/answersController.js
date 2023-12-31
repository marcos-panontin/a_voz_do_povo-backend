const { answers, users } = require('../models');

const send = async (req, res) => {
  console.log('entrou no send');
  const { questionId, optionSelected, userId } = req.body;

  const [user] = await users.checkIfUserExists(userId);

  if (!user) {
    await users.create(userId);
    console.log('criou o user');
  }

  await answers.send(questionId, optionSelected, userId);
  return res.status(201).json({ message: `Answer ${optionSelected} sent regarding question ${questionId} by user ${userId}` });
};

const getAll = async (_req, res) => {
  const allAnswers = await answers.getAll();
  return res.status(200).json(allAnswers);
};

const getAnswersByAnswerId = async (req, res) => {
  const { answerId } = req.params;
  const answer = await answers.getAnswersByAnswerId(Number(answerId));
  return res.status(200).json({ message: answer });
};

module.exports = { send, getAll, getAnswersByAnswerId };