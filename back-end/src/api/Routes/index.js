const UserRouter = require('./User.routes');
const ValidateRouter = require('./Validate.routes');
const AdminRouter = require('./Admin.routes');
const ProductRouter = require('./Product.routes');
const SaleRouter = require('./Sale.routes');
const CustomerOrder = require('./CustomerOrders.routes');

module.exports = {
  UserRouter,
  AdminRouter,
  ValidateRouter,
  ProductRouter,
  SaleRouter,
  CustomerOrder,
};
