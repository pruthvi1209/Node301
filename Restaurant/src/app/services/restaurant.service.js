const restaurant = require('../models/restaurant.model');


const getRestaurantswithLoc = async (req, res) => {
    const result = await restaurant.find({location :req.params.location});
    res.send(result);

}

const  getRestaurantswithName = async (req,res) => {
    const result = await restaurant.find({name :req.params.name});
    res.send(result);

}
const getRestaurant = async(req,res) =>{
    const result = await restaurant.find(req.query);
    res.send(result);
}


const RestaurantService = {
    getRestaurantswithLoc,
    getRestaurantswithName,
    getRestaurant
}

module.exports = RestaurantService;