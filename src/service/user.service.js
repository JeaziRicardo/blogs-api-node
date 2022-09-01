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

const create = async ({ displayName, email, password, image }) => {
  validate.validateUser({ displayName, email, password });

  const userExist = await User.findOne({ where: { email } });
  if (userExist) {
    throw new CustomError(409, 'User already registered');
  }

  const user = await User.create({ displayName, email, password, image });

  const token = tokenHelper.createToken({ email: user.email });

  return token;
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  if (!user) throw new CustomError(404, 'User does not exist'); 

  return user;
};

module.exports = {
  login,
  create,
  getAll,
  getById,
};
