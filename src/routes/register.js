const express = require('express');

const UsersController = require('../controller/users');

const router = express.Router();

// CREATE - POST (REGISTER)
router.post('/', UsersController.register);

module.exports = router;