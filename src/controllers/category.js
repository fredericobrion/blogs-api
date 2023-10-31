const service = require('../services/categories');

const create = async (req, res) => {
  const { name } = req.body;

  const category = await service.createCategory(name);

  return res.status(201).json(category);
};

module.exports = {
  create,
};
