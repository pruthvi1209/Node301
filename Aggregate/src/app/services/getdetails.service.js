const request = require('request');
const url = require('url');

const RESTAURANT_URL  = "http://localhost:3000/api/restaurant";
const ORDER_URL = "http://localhost:4000/api/order/getorders";


const getRestaurantByCity = (req,finalcallBack) => {
    request.get(`${RESTAURANT_URL}?location=${req.body.location}`,  (error,response,body) => {
        getOrdersIncity(body, req.body.date,finalcallBack);
    });
}

const getOrdersIncity = (body, req, finalcallBack) => {
    let restIds = JSON.parse(body).map(a => a.res_id);
    request.post({
        url: ORDER_URL,
        json: { res_id: restIds , date : req}
    },(err,response,body) => {
        finalcallBack(body);
    });
}



module.exports = Service = {
    getRestaurantByCity
}