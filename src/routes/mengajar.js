const express = require("express");

const MengajarController = require("../controller/mengajar");

const router = express.Router();

// CREATE - POST
router.post("/", MengajarController.createNewMengajar);

// READ - GET
router.get("/", MengajarController.getAllMengajar);

// UPDATE - PATCH
router.patch("/:id", MengajarController.updateMengajar);

//DELETE - DELETE
router.delete("/:id", MengajarController.deleteMengajar);

module.exports = router;
