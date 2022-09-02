const service = require('../service/category.service');

const create = async (req, res) => {
  const { name } = req.body;

  const category = await service.create({ name });

  res.status(201).json(category);
};

module.exports = {
  create,
};
