const service = require('../service/post.service');

const getAll = async (_req, res) => {
  const posts = await service.getAll();

  res.status(200).json(posts);
};

module.exports = {
  getAll,
};