const express = require('express');
const router = express.Router();
const OrderService = require('../services/orderservice');

router.post('/', OrderService.createOrder);


module.exports = router;