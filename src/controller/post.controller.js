const service = require('../service/post.service');

const getAll = async (_req, res) => {
  const posts = await service.getAll();

  res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const post = await service.getById(id);

  res.status(200).json(post);
};

module.exports = {
  getAll,
  getById,
};