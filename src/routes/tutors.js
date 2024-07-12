const express = require('express');

const TutorsController = require('../controller/tutors')

const router = express.Router();

// CREATE - POST
router.post('/', TutorsController.createNewTutor);

// READ - GET
router.get('/', TutorsController.getAllTutors);

// UPDATE - PATCH
router.patch('/:email', TutorsController.updateTutor);

//DELETE - DELETE
router.delete('/:email', TutorsController.deleteTutor)

module.exports = router;