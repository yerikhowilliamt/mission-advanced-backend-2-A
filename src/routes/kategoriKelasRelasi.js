const express = require("express");

const KategoriKelasRelasiController = require("../controller/kategoriKelasRelasi");

const router = express.Router();

// CREATE - POST
router.post("/", KategoriKelasRelasiController.createNewKategoriKelasRelasi);

// READ - GET
router.get("/", KategoriKelasRelasiController.getAllKategoriKelasRelasi);

// UPDATE - PATCH
router.patch("/:id", KategoriKelasRelasiController.updateKategoriKelasRelasi);

//DELETE - DELETE
router.delete("/:id", KategoriKelasRelasiController.deleteKategoriKelasRelasi);

module.exports = router;
