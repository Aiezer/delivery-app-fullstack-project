const express = require('express');
const LoginRoute = require('./Routes/login.route');
const CustomerRouter = require('./Routes/Customer.routes');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/customer', CustomerRouter);
app.use('/login', LoginRoute);

module.exports = app;
