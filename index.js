const express = require('express');
const app = express();
require('dotenv').config();

const calculationRoute = require('./routes/calculations');
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/calculation', calculationRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})