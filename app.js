const express = require('express');
const cors = require('cors');
const path = require('path');
const answersRouter = require('./src/routes/answersRouter');
const questionsRouter = require('./src/routes/questionsRouter');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/answers', answersRouter);
app.use('/questions', questionsRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/APIDocs/index.html'));
});

module.exports = app;