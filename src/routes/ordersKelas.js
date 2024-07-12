const express = require("express");

const OrdersKelasController = require("../controller/ordersKelas");

const router = express.Router();

// CREATE - POST
router.post("/", OrdersKelasController.createNewOrdersKelas);

// READ - GET
router.get("/", OrdersKelasController.getAllOrdersKelas);

// UPDATE - PATCH
router.patch("/:id", OrdersKelasController.updateOrdersKelas);

//DELETE - DELETE
router.delete("/:id", OrdersKelasController.deleteOrdersKelas);

module.exports = router;
