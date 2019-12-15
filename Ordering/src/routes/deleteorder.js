const express = require('express');
const router = express.Router();
const OrderService = require('../services/orderservice');

router.delete('/:id', OrderService.deleteOrder);


module.exports = router;