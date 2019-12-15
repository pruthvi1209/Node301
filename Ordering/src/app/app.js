const express = require('express');
const app = express();



const bodyParser = require('body-parser');
const createOrderRouter = require('../routes/createOrder');
const viewOrderRouter = require('../routes/getOrders');
const updateRouter = require('../routes/updateOrder');
const getBillRouter = require('../routes/getOrderBill');
const deleteorderRouter = require('../routes/deleteorder');

//Middelware
app.use(bodyParser.json());

//handlers
app.use("/api/order/neworder", createOrderRouter);
app.use("/api/order/getorders", viewOrderRouter);
app.use("/api/order/updateorder", updateRouter);
app.use("/api/order/getbill", getBillRouter);
app.use("/api/order/delete", deleteorderRouter);



module.exports = app;