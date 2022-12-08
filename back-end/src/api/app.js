const express = require('express');
const cors = require('cors');
const { UserRouter, ValidateRouter, AdminRouter, ProductRouter } = require('./Routes');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/', UserRouter);
app.use('/admin', AdminRouter);
app.use('/validate', ValidateRouter);
app.use('/products', ProductRouter);
app.use('/sale', saleRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;