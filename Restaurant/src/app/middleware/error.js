const winston  = require('winston');

module.exports = function (err,req,res,next) {
    winston.error("something went wrong..",err);    
    res.status(500).send('Something went wrong...');
}