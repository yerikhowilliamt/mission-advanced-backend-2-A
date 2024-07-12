const express = require('express');

const ModulKelasController = require('../controller/modulKelas')

const router = express.Router();

// CREATE - POST
router.post('/', ModulKelasController.createNewModulKelas);

// READ - GET
router.get('/', ModulKelasController.getAllModulKelas);

// UPDATE - PATCH
router.patch('/:id', ModulKelasController.updateModulKelas);

//DELETE - DELETE
router.delete('/:id', ModulKelasController.deleteModulKelas)

module.exports = router;