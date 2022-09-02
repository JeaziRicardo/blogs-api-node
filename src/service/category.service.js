const { Category } = require('../database/models');
const CustomError = require('../errors/customError');

const create = async ({ name }) => {
  const category = await Category.create({ name });

  if (!name) throw new CustomError(400, '"name" is required');

  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  create,
  getAll,
};
