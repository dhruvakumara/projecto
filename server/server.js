const express = require('express');
const setupDB = require('./utils/database');

const authRoutes = require('./Routes/auth')

const app = express();

app.use(authRoutes)

setupDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server listening the port http://localhost/" + port);
});