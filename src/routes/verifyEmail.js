const express = require('express');

const UsersController = require('../controller/users');

const router = express.Router();

// CREATE - POST (REGISTER)
router.get('/', UsersController.verifyEmail);

module.exports = router;