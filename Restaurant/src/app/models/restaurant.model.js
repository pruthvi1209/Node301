const mongoose = require('mongoose');
// const Schema = new mongoose.Schema;

const RestaturantSchema =  new mongoose.Schema({
    id: String,
    name: String,
    location: String,
    menu : [ String ],
    cuisine : [ String ],
    rating: Number,
    Budget: Number
});

const Restaurants = mongoose.model('Restaurant', RestaturantSchema, "restaurant");

module.exports = Restaurants;
