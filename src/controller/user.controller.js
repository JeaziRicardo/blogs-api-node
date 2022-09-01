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

module.exports = {
  login,
  create,
};
