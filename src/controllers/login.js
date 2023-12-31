const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateLoginToken = async (req, res) => {
  const { displayName, id } = res.locals.user;

  const payload = {
    displayName,
    id,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
  });

  return res.status(200).json({ token });
};

module.exports = {
  generateLoginToken,
};
