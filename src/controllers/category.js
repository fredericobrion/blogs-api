const service = require('../services/categories');

const create = async (req, res) => {
  const { name } = req.body;

  const category = await service.createCategory(name);

  return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const categories = await service.getAllCategories();

  return res.status(200).json(categories);
};

module.exports = {
  create,
  getAllCategories,
};
