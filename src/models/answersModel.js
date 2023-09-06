const connection = require('./connection');

const send = async (questionId, answer, userId) => {
  await connection.execute(
    'INSERT INTO answers (created_at, question_id, option_selected, user_id) VALUES (NOW(), ?, ?, ?)',
    [questionId, answer, userId],
  );
};

const getAll = async () => {
  const [answers] = await connection.execute(
    'SELECT * FROM answers',
  );
  return answers;
};

const getAnswersByAnswerId = async (answerId) => {
  const [[result]] = await connection.execute(
    'SELECT ' +
    'SUM(option_selected = 0) AS count_option_0, ' +
    'SUM(option_selected = 1) AS count_option_1 ' +
    'FROM answers ' +
    'WHERE question_id = ?',
    [answerId],
  );

  const { count_option_0, count_option_1 } = result;
  return {
    count_option_0,
    count_option_1
  };
};

module.exports = { send, getAll, getAnswersByAnswerId }