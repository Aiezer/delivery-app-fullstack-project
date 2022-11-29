const CustomerRouter = require('./Routes');
const { json } = require('body-parser');
const express = require('express');

const app = express();

app.use(express.json())

app.use('/customer', CustomerRouter)
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
