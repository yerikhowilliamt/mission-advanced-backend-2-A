const express = require('express');

const ReviewController = require('../controller/review')

const router = express.Router();

// CREATE - POST
router.post('/', ReviewController.createNewReview);

// READ - GET
router.get('/', ReviewController.getAllReview);

// UPDATE - PATCH
router.patch('/:id', ReviewController.updateReview);

//DELETE - DELETE
router.delete('/:id', ReviewController.deleteReview)

module.exports = router;