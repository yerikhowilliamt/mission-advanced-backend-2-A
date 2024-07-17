const express = require("express");

const KelasController = require("../controller/kelas");

const router = express.Router();

// CREATE - POST
router.post("/", KelasController.createNewKelas);

// READ - GET
router.get("/", KelasController.getAllKelas);

// UPDATE - PATCH
router.patch("/:id", KelasController.updateKelas);

//DELETE - DELETE
router.delete("/:id", KelasController.deleteKelas);

module.exports = router;