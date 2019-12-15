const express = require('express');
const router = express.Router();
const OrderService = require('../services/orderservice');

router.get('/:id', OrderService.getbill);


module.exports = router;