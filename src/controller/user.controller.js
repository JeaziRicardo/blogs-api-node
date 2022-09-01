const user = require('../service/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await user.login({ email, password });
  
  res.status(200).json({ token });
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await user.create({ displayName, email, password, image });

  res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await user.getAll();

  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const userById = await user.getById(id);

  res.status(200).json(userById);
};

module.exports = {
  login,
  create,
  getAll,
  getById,
};
