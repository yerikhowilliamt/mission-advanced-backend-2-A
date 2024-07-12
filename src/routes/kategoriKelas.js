const express = require("express");

const KategoriKelasController = require("../controller/kategoriKelas");

const router = express.Router();

// CREATE - POST
router.post("/", KategoriKelasController.createNewKategoriKelas);

// READ - GET
router.get("/", KategoriKelasController.getAllKategoriKelas);

// UPDATE - PATCH
router.patch("/:id", KategoriKelasController.updateKategoriKelas);

//DELETE - DELETE
router.delete("/:id", KategoriKelasController.deleteKategoriKelas);

module.exports = router;
