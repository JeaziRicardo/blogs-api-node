const token = require('../helpers/tokenHelper');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const userCheck = token.verifyToken(authorization);
    req.user = userCheck;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { auth };