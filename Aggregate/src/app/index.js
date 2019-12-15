const express  = require('express');
const app = express();
const bodyparser = require('body-parser');
const ordersbycity = require('./routes/ordersbycity');

app.use(bodyparser.json());

app.use('/api/getorderbycity', ordersbycity );

 module.exports = app;