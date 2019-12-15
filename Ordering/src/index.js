const app = require('./app/app');

require('./config/db');


app.listen('4000', () => console.log("OrderService Running:4000"));