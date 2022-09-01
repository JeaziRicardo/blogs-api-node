const tokenHelper = require('../helpers/tokenHelper');
const { User } = require('../database/models');
const CustomError = require('../errors/customError');
const validate = require('../middlewares/validateMiddleware');

const login = async ({ email, password }) => {
  validate.validateLogin({ email, password });

  const user = await User.findOne({ where: { email } });
  if (!user || email !== user.email || password !== user.password) {
    throw new CustomError(400, 'Invalid fields');
  }

  const token = tokenHelper.createToken({ email: user.email });

  return token;
};

module.exports = { login };
