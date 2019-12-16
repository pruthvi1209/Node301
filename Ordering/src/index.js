const app = require('./app/app');

require('./config/db');

const PORT = process.env.PORT|| 4040
app.listen(PORT, () => console.log(`OrderService Running: ${PORT}`));