const monogoose = require('mongoose');

const dbConncetion = monogoose.connect( process.env.MONGO_URL,  { useNewUrlParser: true, useUnifiedTopology: true }, (err,db) =>{
    if(!err) {
        console.log("Connected to db....");
    } else {
        console.log("Error");
    }
});

module.exports = dbConncetion;