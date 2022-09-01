const Joi = require('joi');

const schema = Joi.object().keys({
  email: Joi.string().empty().required().messages({
    'string.empty': '400|Some required fields are missing',
    'any.required': '400|email is required',
  }),
  password: Joi.string().empty().required().messages({
    'string.empty': '400|Some required fields are missing',
    'any.required': '400|password is required',
  }),
});

module.exports = schema;