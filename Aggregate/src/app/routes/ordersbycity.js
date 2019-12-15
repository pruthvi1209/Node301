const express = require('express');
const router = express.Router();
const Service = require('../services/getdetails.service');

router.post('/', (req,res) => {
     Service.getRestaurantByCity(req, (result)=> {
        res.status(200).send(result);
    });
});


module.exports = router;