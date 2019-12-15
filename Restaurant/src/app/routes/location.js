const express = require('express');
const router = express.Router();

const restaurantService = require('../services/restaurant.service');


router.get('/:location', restaurantService.getRestaurantswithLoc);


module.exports = router;