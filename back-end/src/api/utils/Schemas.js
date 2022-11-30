const Joi = require('joi');

const registreSchema = Joi.object({
  name: Joi.string().max(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

module.exports = {
  registreSchema,
};
