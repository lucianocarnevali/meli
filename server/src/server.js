// const axios = require('axios');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/item');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', itemRoutes);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});