const express = require('express');
const answersController = require('../controllers/answersController')

const answersRouter = express.Router();

answersRouter.get('/', answersController.getAll);
answersRouter.post('/', answersController.send);
answersRouter.get('/:answerId', answersController.getAnswersByAnswerId);

module.exports = answersRouter;
