const user = require('../service/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await user.login({ email, password });
  
  res.status(200).json({ token });
};

module.exports = { login };
