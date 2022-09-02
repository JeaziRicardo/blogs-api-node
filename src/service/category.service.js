const { Category } = require('../database/models');
const CustomError = require('../errors/customError');

const create = async ({ name }) => {
  const category = await Category.create({ name });

  if (!name) throw new CustomError(400, '"name" is required');

  return category;
};

module.exports = {
  create,
};
