const express = require('express');
const router = express.Router();
const restaturantService = require('../services/restaurant.service')

router.get('/:name', restaturantService.getRestaurantswithName);

module.exports = router;
