const express = require('express');
const router = express.Router();
const OrderService = require('../services/orderservice');

router.patch('/', OrderService.updateStatus);


module.exports = router;