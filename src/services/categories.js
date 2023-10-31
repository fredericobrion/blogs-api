const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  console.log(newCategory);

  return newCategory;
};

module.exports = {
  createCategory,
};
