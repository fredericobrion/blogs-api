const { User } = require('../models');

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const createUser = async (name, email, password, image = '') => {
  const user = await User.create({ name, email, password, image });

  return user;
};

const findAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const findById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  return user;
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  findByEmail,
  createUser,
  findAll,
  findById,
  deleteUser,
};