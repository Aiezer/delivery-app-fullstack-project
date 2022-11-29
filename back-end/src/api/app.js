const express = require('express');
const loginRoute = require('../database/routes/login.route')

const app = express();

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoute)

module.exports = app;
