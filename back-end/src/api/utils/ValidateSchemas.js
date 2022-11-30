const schemas = require('./Schemas');

const validateRegistre = ({ name, email, password, role }) => {
  const validate = schemas.registreSchema.validate({ name, email, password, role });

  if (validate.error) {
    return validate.error.message;
  }
  return false;
};

module.exports = {
  validateRegistre,
};
