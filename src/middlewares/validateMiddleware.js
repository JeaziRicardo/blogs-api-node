const CustomError = require('../errors/customError');
const schema = require('./schema');

const validateLogin = ({ email, password }) => {
  const { error } = schema.login.validate({ email, password });
  if (error) {
    const [status, message] = error.message.split('|');
    throw new CustomError(+status, message);
  }
};

const validateUser = ({ displayName, email, password }) => {
  const { error } = schema.user.validate({ displayName, email, password });
  if (error) {
    const [status, message] = error.message.split('|');
    throw new CustomError(+status, message);
  }
};

module.exports = {
  validateLogin,
  validateUser,
};