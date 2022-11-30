const express = require('express');
const errorHandler = require('./Middlewares/error.middleware');
const UserRouter = require('./Routes');

const app = express();

app.use(express.json());

app.use('/customer', UserRouter);
app.use('/login', UserRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = app;