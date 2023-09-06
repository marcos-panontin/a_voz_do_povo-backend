const express = require('express');
const cors = require('cors');
const answersRouter = require('./src/routes/answersRouter');
const questionsRouter = require('./src/routes/questionsRouter');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/answers', answersRouter);
app.use('/questions', questionsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;