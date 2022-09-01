const CustomError = require('../errors/customError');
const schema = require('./schema');

const validateLogin = ({ email, password }) => {
  const { error } = schema.validate({ email, password });
  if (error) {
    const [status, message] = error.message.split('|');
    throw new CustomError(+status, message);
  }
};

module.exports = { validateLogin };