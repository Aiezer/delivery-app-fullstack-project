const schemas = require('../utils/Schemas');

const validateRegister = (req, res, next) => {
    console.log(req);
    const { error } = schemas.registreSchema.validate({ ...req.body });
    if (error) {
      next(error);
    }
    next();
};

module.exports = validateRegister;