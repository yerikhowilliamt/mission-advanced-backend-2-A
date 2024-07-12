const express = require('express');

const UsersController = require('../controller/users')

const router = express.Router();

// CREATE - POST
router.post('/', UsersController.createNewUser);

// READ - GET
router.get('/', UsersController.getAllUsers);

// UPDATE - PATCH
router.patch('/:email', UsersController.updateUser);

//DELETE - DELETE
router.delete('/:email', UsersController.deleteUser)

module.exports = router;