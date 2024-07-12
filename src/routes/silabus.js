const express = require('express');

const SilabusController = require('../controller/silabus')

const router = express.Router();

// CREATE - POST
router.post('/', SilabusController.createNewSilabus);

// READ - GET
router.get('/', SilabusController.getAllSilabus);

// UPDATE - PATCH
router.patch('/:id', SilabusController.updateSilabus);

//DELETE - DELETE
router.delete('/:id', SilabusController.deleteSilabus)

module.exports = router;