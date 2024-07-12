const express = require('express');

const PretestController = require('../controller/pretest')

const router = express.Router();

// CREATE - POST
router.post('/', PretestController.createNewPretest);

// READ - GET
router.get('/', PretestController.getAllPretest);

// UPDATE - PATCH
router.patch('/:id', PretestController.updatePretest);

//DELETE - DELETE
router.delete('/:id', PretestController.deletePretest)

module.exports = router;