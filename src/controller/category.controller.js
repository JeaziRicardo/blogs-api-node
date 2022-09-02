const service = require('../service/category.service');

const create = async (req, res) => {
  const { name } = req.body;

  const category = await service.create({ name });

  res.status(201).json(category);
};

const getAll = async (_req, res) => {
  const categories = await service.getAll();

  res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};
