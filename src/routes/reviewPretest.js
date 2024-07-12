const express = require('express');

const ReviewPretestController = require('../controller/reviewPretest')

const router = express.Router();

// CREATE - POST
router.post('/', ReviewPretestController.createNewReviewPretest);

// READ - GET
router.get('/', ReviewPretestController.getAllReviewPretest);

// UPDATE - PATCH
router.patch('/:id', ReviewPretestController.updateReviewPretest);

//DELETE - DELETE
router.delete('/:id', ReviewPretestController.deleteReviewPretest)

module.exports = router;