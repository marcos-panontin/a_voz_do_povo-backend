const express = require('express');
const questionsController = require('../controllers/questionsController')

const questionsRouter = express.Router();

questionsRouter.get('/', questionsController.getAll);

module.exports = questionsRouter;
