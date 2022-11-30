const express = require('express');
const LoginRoute = require('../database/routes/login.route');
const CustomerRouter = require('./Routes');

const app = express();

app.use(express.json());

app.use('/customer', CustomerRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', LoginRoute);

module.exports = app;
