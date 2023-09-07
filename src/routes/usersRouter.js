const express = require('express');
const usersController = require('../controllers/usersController')

const usersRouter = express.Router();

usersRouter.get('/', usersController.getAll);

module.exports = usersRouter;
