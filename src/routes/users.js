const express = require('express');

const UsersController = require('../controller/users');

const router = express.Router();

// READ - GET
router.get('/', UsersController.getAllUsers);

// UPDATE - PATCH
router.patch('/:email', UsersController.updateUser);

//DELETE - DELETE
router.delete('/:email', UsersController.deleteUser)

module.exports = router;