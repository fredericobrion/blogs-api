const jwt = require('jsonwebtoken');
const { createUser } = require('../services/users');

const { JWT_SECRET } = process.env;

const createNewUser = async (req, res) => {
  const { name, email, password, image } = req.body;

  const user = await createUser(name, email, password, image);

  const payload = {
    name: user.name,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(201).json({ token });
};

module.exports = {
  createNewUser,
};
