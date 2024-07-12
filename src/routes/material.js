const express = require("express");

const MaterialController = require("../controller/material");

const router = express.Router();

// CREATE - POST
router.post("/", MaterialController.createNewMaterial);

// READ - GET
router.get("/", MaterialController.getAllMaterial);

// UPDATE - PATCH
router.patch("/:id", MaterialController.updateMaterial);

//DELETE - DELETE
router.delete("/:id", MaterialController.deleteMaterial);

module.exports = router;
