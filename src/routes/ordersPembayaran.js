const express = require("express");

const OrdersPembayaranController = require("../controller/ordersPembayaran");

const router = express.Router();

// CREATE - POST
router.post("/", OrdersPembayaranController.createNewOrdersPembayaran);

// READ - GET
router.get("/", OrdersPembayaranController.getAllOrdersPembayaran);

// UPDATE - PATCH
router.patch("/:id", OrdersPembayaranController.updateOrdersPembayaran);

//DELETE - DELETE
router.delete("/:id", OrdersPembayaranController.deleteOrdersPembayaran);

module.exports = router;
