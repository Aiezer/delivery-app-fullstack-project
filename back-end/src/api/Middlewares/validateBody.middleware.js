const schemas = require('../utils/Schemas');

const validateRegister = (req, res, next) => {
    console.log(req);
    const validate = schemas.registreSchema.validate({ ...req.body });
    if (validate.error) {
      next(error)
    }
    next();
}

module.exports = validateRegister;