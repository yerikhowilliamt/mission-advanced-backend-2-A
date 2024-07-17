const express = require('express');

const RegisterController = require('../controller/users')

const router = express.Router();

// CREATE - POST
router.post('/', RegisterController.createNewUser);

// READ - GET
router.get('/', RegisterController.getAllRegister);

// UPDATE - PATCH
router.patch('/:email', RegisterController.updateRegister);

//DELETE - DELETE
router.delete('/:email', RegisterController.deleteRegister)

module.exports = router;