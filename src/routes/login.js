const express = require('express');

const UsersController = require('../controller/users');

const router = express.Router();

//ROUTER - LOGIN
router.post('/', UsersController.login);

module.exports = router;