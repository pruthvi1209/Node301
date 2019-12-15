const orders = require('../models/order.model');

const createOrder = async (req, res) => {
    req.body.date = new Date().toISOString().slice(0,10);
    const result = await orders.create(req.body);
    res.send(`Order sucssfully placed`);
}

const getAllOrders = async (req, res) => {
    console.log(req.query, "From all orders");
    const result = await orders.find(req.query);
    res.send(result);
}

const getOrderDetails = async (req, res) => {
    const result = await orders.find({ "order_id" :  req.params.order });
    res.send(result);
}

const getOrderWithFilter = async(req,res) => {
    console.log(req.body);
    const result = await orders.find(req.body);
    res.send(result);
}

const updateStatus = async (req, res) => {
    const result = await orders.updateOne({ "order_id" :  req.body.order_id },{$set: req.body.changes} );
    res.send('Updated changes');
}

const getbill = async (req, res) => {
    const result = await orders.find({ "order_id" :  req.params.order }).select(["bill_amount"]);
    res.send(result);
    // res.send(`will send  total amount for order id${req.params.id}`);
}
const deleteOrder = async (req,res) =>{
    await orders.deleteOne({"order_id" : req.params.id});
    res.send('Deleted Order');
}
const OrderService = {
    createOrder,
    getAllOrders,
    getOrderDetails,
    updateStatus,
    getbill,
    deleteOrder,
    getOrderWithFilter
}

module.exports = OrderService;

