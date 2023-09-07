const express = require('express');
require('express-async-errors');
const cors = require('cors');
const path = require('path');
const answersRouter = require('./src/routes/answersRouter');
const usersRouter = require('./src/routes/usersRouter');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/answers', answersRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/APIDocs/index.html'));
});

module.exports = app;