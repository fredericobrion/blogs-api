const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const validateToken = (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) return res.status(401).json({ message: 'Token not found' });

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
