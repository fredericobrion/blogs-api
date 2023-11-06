const service = require('../services/post');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const id = 1;

  const newPost = await service.create(title, content, categoryIds, id);

  return res.status(201).json(newPost);
};

module.exports = {
  create,
};
