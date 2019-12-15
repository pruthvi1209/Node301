const mongoose = require('mongoose');



const OrderSchema = new mongoose.Schema( {
    status: String,
    bill_amount: Number,
    items: [ String ],
    res_id: String,
    date: String
});

// TODO: Mention Collection Name
const orders = mongoose.model('Orders', OrderSchema, 'myorders');
module.exports = orders;