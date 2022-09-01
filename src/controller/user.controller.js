const CustomError = require('../errors/customError');
const user = require('../service/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await user.login({ email, password });
    res.status(200).json({ token });
  } catch (error) {
    console.log('error: ', error);
    throw new CustomError();
  }
};

module.exports = { login };
