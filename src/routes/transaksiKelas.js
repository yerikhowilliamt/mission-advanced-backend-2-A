const express = require('express');

const TransaksiKelasController = require('../controller/transaksiKelas')

const router = express.Router();

// CREATE - POST
router.post('/', TransaksiKelasController.createNewTransaksiKelas);

// READ - GET
router.get('/', TransaksiKelasController.getAllTransaksiKelas);

// UPDATE - PATCH
router.patch('/:id', TransaksiKelasController.updateTransaksiKelas);

//DELETE - DELETE
router.delete('/:id', TransaksiKelasController.deleteTransaksiKelas)

module.exports = router;