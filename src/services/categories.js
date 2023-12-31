const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  console.log(newCategory);

  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

const getAllCategoriesIds = async () => {
  const categories = await Category.findAll();

  const categoriesIds = categories.map(({ id }) => id);

  return categoriesIds;
};

module.exports = {
  createCategory,
  getAllCategories,
  getAllCategoriesIds,
};
