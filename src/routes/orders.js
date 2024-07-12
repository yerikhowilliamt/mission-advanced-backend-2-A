const express = require('express');

const OrdersController = require('../controller/orders')

const router = express.Router();

// CREATE - POST
router.post('/', OrdersController.createNewOrders);

// READ - GET
router.get('/', OrdersController.getAllOrders);

// UPDATE - PATCH
router.patch('/:id', OrdersController.updateOrders);

//DELETE - DELETE
router.delete('/:id', OrdersController.deleteOrders)

module.exports = router;