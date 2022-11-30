const express = require('express');
const errorHandler = require('./Middlewares/error.middleware');
const CustomerRouter = require('./Routes');

const app = express();

app.use(express.json());

app.use('/customer', CustomerRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', CustomerRouter);
app.use(errorHandler);

module.exports = app;
