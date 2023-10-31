const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateLoginToken = async (req, res) => {
  const { email } = req.body;

  const payload = {
    email,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(200).json({ token });
};

module.exports = {
  generateLoginToken,
};
