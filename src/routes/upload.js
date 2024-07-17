const express = require('express');

const UploadController = require('../controller/uploadFile');

const router = express.Router();

// CREATE - POST (REGISTER)
router.post('/', UploadController.uploadFile);

module.exports = router;