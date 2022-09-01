const Joi = require('joi');

const KEY_EMPTY = '400|Some required fields are missing';

const login = Joi.object().keys({
  email: Joi.string().empty().required().messages({
    'string.empty': KEY_EMPTY,
    'any.required': '400|email is required',
  }),
  password: Joi.string().empty().required().messages({
    'string.empty': KEY_EMPTY,
    'any.required': '400|password is required',
  }),
});

const user = Joi.object().keys({
  displayName: Joi.string().empty().min(8).required()
    .messages({
      'string.empty': KEY_EMPTY,
      'string.min': '400|"displayName" length must be at least {#limit} characters long',
      'any.required': '400|displayName is required',
  }),
  email: Joi.string().empty().email().required()
    .messages({
      'string.empty': KEY_EMPTY,
      'string.email': '400|"email" must be a valid email',
      'any.required': '400|email is required',
  }),
  password: Joi.string().empty().min(6).required()
    .messages({
      'string.empty': KEY_EMPTY,
      'string.min': '400|"password" length must be at least {#limit} characters long',
      'any.required': '400|password is required',
  }),
});

module.exports = {
  login,
  user,
};