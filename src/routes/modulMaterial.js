const express = require('express');

const ModulMaterialController = require('../controller/modulMaterial')

const router = express.Router();

// CREATE - POST
router.post('/', ModulMaterialController.createNewModulMaterial);

// READ - GET
router.get('/', ModulMaterialController.getAllModulMaterial);

// UPDATE - PATCH
router.patch('/:id', ModulMaterialController.updateModulMaterial);

//DELETE - DELETE
router.delete('/:id', ModulMaterialController.deleteModulMaterial)

module.exports = router;