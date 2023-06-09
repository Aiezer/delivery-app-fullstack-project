const express = require('express');
const cors = require('cors');
const {
  UserRouter,
  ValidateRouter,
  AdminRouter,
  ProductRouter,
  SaleRouter,
  CustomerRouter,
  SellerRouter,
} = require('./Routes');

const { validateJWT } = require('./Middlewares/validateJWT.middleware');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/', UserRouter);
app.use(validateJWT);
app.use('/admin', AdminRouter);
app.use('/validate', ValidateRouter);
app.use('/products', ProductRouter);
app.use('/seller', SellerRouter);
app.use('/sale', SaleRouter);
app.use('/customer', CustomerRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
