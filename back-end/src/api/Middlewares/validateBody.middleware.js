const schemas = require('../utils/Schemas');

const validateRegister = (req, _res, next) => {
    const { error } = schemas.registreSchema.validate({ ...req.body });
    if (error) {
      next(error);
    }
    next();
};

module.exports = validateRegister;