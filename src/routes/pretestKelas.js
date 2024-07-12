const express = require("express");

const PretestKelasController = require("../controller/pretestKelas");

const router = express.Router();

// CREATE - POST
router.post("/", PretestKelasController.createNewPretestKelas);

// READ - GET
router.get("/", PretestKelasController.getAllPretestKelas);

// UPDATE - PATCH
router.patch("/:id", PretestKelasController.updatePretestKelas);

//DELETE - DELETE
router.delete("/:id", PretestKelasController.deletePretestKelas);

module.exports = router;
