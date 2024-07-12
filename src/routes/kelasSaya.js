const express = require("express");

const KelasSayaController = require("../controller/kelasSaya");

const router = express.Router();

// CREATE - POST
router.post("/", KelasSayaController.createNewKelasSaya);

// READ - GET
router.get("/", KelasSayaController.getAllKelasSaya);

// UPDATE - PATCH
router.patch("/:id", KelasSayaController.updateKelasSaya);

//DELETE - DELETE
router.delete("/:id", KelasSayaController.deleteKelasSaya);

module.exports = router;
