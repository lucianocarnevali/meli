// const axios = require('axios');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/item');
const categoryRoutes = require('./routes/category');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', itemRoutes);
app.use('/', categoryRoutes);

app.listen(8800, () => {
 console.log("Server running on port 8800");
});