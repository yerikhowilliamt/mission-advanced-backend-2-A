const express = require('express');

const PembayaranController = require('../controller/pembayaran')

const router = express.Router();

// CREATE - POST
router.post('/', PembayaranController.createNewPembayaran);

// READ - GET
router.get('/', PembayaranController.getAllPembayaran);

// UPDATE - PATCH
router.patch('/:id', PembayaranController.updatePembayaran);

//DELETE - DELETE
router.delete('/:id', PembayaranController.deletePembayaran)

module.exports = router;