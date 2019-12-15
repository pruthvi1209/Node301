const monogoose = require('mongoose');

const dbConncetion = monogoose.connect('mongodb://pruthvi:root123@ds253348.mlab.com:53348/node301',  { useNewUrlParser: true, useUnifiedTopology: true }, (err,db) =>{
    if(!err) {
        console.log("Connected to db....");
    } else {
        console.log("Error");
    }
});

module.exports = dbConncetion;