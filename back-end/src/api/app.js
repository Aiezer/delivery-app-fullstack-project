const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const { UserRouter, ValidateRouter, AdminRouter, ProductRouter, 
    OrderRouter } = require('./Routes');
=======
const { UserRouter, ValidateRouter, AdminRouter, ProductRouter, SaleRouter } = require('./Routes');
>>>>>>> 31bffd17a1488e4367c3cbc296537c59cb07f55d

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/', UserRouter);
app.use('/admin', AdminRouter);
app.use('/validate', ValidateRouter);
app.use('/products', ProductRouter);
<<<<<<< HEAD
app.use('/orders', OrderRouter);
=======
app.use('/sale', SaleRouter);
>>>>>>> 31bffd17a1488e4367c3cbc296537c59cb07f55d
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;