const express = require('express');
const cors = require('cors');
const errorHandler = require('./Middlewares/error.middleware');
const { UserRouter, ValidateRouter, AdminRouter, ProductRouter } = require('./Routes');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/', UserRouter);
app.use('/admin', AdminRouter);
app.use('/validate', ValidateRouter);
app.use('/products', ProductRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

if (!app.get('/images')) {
app.use(errorHandler);
}

module.exports = app;