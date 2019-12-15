const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const erroMiddleWare = require('./middleware/error');

const locationRouter = require('./routes/location');
const nameRouter = require('./routes/name');
const restaurantRouter = require('./routes/restaurant');

//Middleware
app.use(bodyParser.json());


app.use('/api/location',locationRouter);
app.use('/api/name', nameRouter);
app.use('/api/restaurant', restaurantRouter );

app.use(erroMiddleWare);

module.exports = app;