const { User } = require('../models');

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const createUser = async (name, email, password, image = '') => {
  const user = await User.create({ name, email, password, image });

  return user;
};

module.exports = {
  findByEmail,
  createUser,
};