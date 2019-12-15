const express = require('express');
const router = express.Router();
const OrderService = require('../services/orderservice');

router.get('/', OrderService.getAllOrders);
router.get('/:order', OrderService.getOrderDetails);
router.post('/', OrderService.getOrderWithFilter)

module.exports = router;