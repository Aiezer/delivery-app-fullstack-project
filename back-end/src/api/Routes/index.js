const UserRouter = require('./User.routes');
const ValidateRouter = require('./Validate.routes');
const AdminRouter = require('./Admin.routes');
const ProductRouter = require('./Product.routes');
const OrderRouter = require('./Order.routes');
const SaleRouter = require('./Sale.routes');
const SellerRouter = require('./Seller.routes');

module.exports = {
  UserRouter,
  AdminRouter,
  ValidateRouter,
  ProductRouter,
  OrderRouter,
  SaleRouter,
  SellerRouter,
};
