require('dotenv/config');
require("../src/app/config/logging");
require("./app/config/db");
const app = require('./app/index');
const port = process.env.PORT || '3030';
app.listen(port, () => console.log(`Restaurant service Running at ${port}....`));