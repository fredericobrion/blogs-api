const jwt = require('jsonwebtoken');
const service = require('../services/users');

const { JWT_SECRET } = process.env;

const createNewUser = async (req, res) => {
  const { name, email, password, image } = req.body;

  const user = await service.createUser(name, email, password, image);

  const payload = {
    name: user.name,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
  });

  return res.status(201).json({ token });
};

const findAll = async (req, res) => {
  const users = await service.findAll();

  return res.status(200).json(users);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const user = await service.findById(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);
};

module.exports = {
  createNewUser,
  findAll,
  findById,
};
